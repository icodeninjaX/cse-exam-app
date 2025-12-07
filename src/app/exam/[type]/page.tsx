'use client';

import { useState, useCallback, useEffect } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Timer from '@/components/Timer';
import QuestionCard from '@/components/QuestionCard';
import QuestionNavigator from '@/components/QuestionNavigator';
import ExamSkeleton from '@/components/ExamSkeleton';
import { EXAM_CONFIG, ExamType, SECTION_NAMES } from '@/lib/examConfig';
import { generateExamQuestions, Question } from '@/lib/questions';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const examType = params.type as ExamType;
  const config = EXAM_CONFIG[examType];
  const isPracticeMode = searchParams.get('mode') === 'practice';

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [bookmarks, setBookmarks] = useState<Set<number>>(new Set());
  const [isRunning, setIsRunning] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [examStarted, setExamStarted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    if (!config) {
      router.push('/');
      return;
    }

    const savedExam = localStorage.getItem(`exam_progress_${examType}`);
    if (savedExam && !isPracticeMode) {
      const parsed = JSON.parse(savedExam);
      if (parsed.questions && parsed.questions.length > 0) {
        setQuestions(parsed.questions);
        setAnswers(parsed.answers || {});
        setBookmarks(new Set(parsed.bookmarks || []));
        setCurrentIndex(parsed.currentIndex || 0);
        return;
      }
    }

    // Generate new questions
    const loadQuestions = async () => {
      try {
        const generatedQuestions = await generateExamQuestions(examType, config.totalItems);
        setQuestions(generatedQuestions);
      } catch (error) {
        console.error("Failed to load questions", error);
      }
    };
    
    loadQuestions();
  }, [examType, config, router, isPracticeMode]);

  // Auto-save progress to localStorage
  useEffect(() => {
    if (examStarted && questions.length > 0 && !isPracticeMode) {
      localStorage.setItem(`exam_progress_${examType}`, JSON.stringify({
        questions,
        answers,
        bookmarks: Array.from(bookmarks),
        currentIndex,
        timestamp: Date.now()
      }));
    }
  }, [answers, bookmarks, currentIndex, examStarted, questions, examType, isPracticeMode]);

  // Keyboard shortcuts
  useEffect(() => {
    if (!examStarted || showConfirmModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      
      // Answer selection: A, B, C, D or 1, 2, 3, 4
      if (['A', 'B', 'C', 'D'].includes(key) || ['1', '2', '3', '4'].includes(key)) {
        e.preventDefault();
        const answerMap: Record<string, number> = { 'A': 0, 'B': 1, 'C': 2, 'D': 3, '1': 0, '2': 1, '3': 2, '4': 3 };
        const idx = answerMap[key];
        if (questions[currentIndex]?.choices[idx]) {
          handleAnswerSelect(questions[currentIndex].choices[idx]);
        }
      }
      
      // Navigation: Arrow keys
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        setCurrentIndex(prev => prev - 1);
      }
      if (e.key === 'ArrowRight' && currentIndex < questions.length - 1) {
        e.preventDefault();
        setCurrentIndex(prev => prev + 1);
      }
      
      // Bookmark: B key with Ctrl/Cmd
      if (e.key === 'b' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        toggleBookmark(currentIndex);
      }
      
      // Submit: Ctrl/Cmd + Enter
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setShowConfirmModal(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [examStarted, currentIndex, questions, showConfirmModal]);

  const startExam = () => {
    // Clear saved progress when starting fresh
    if (!isPracticeMode) {
      localStorage.removeItem(`exam_progress_${examType}`);
    }
    setExamStarted(true);
    setIsRunning(!isPracticeMode); // No timer in practice mode
  };

  const resumeExam = () => {
    setExamStarted(true);
    setIsRunning(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentIndex].id]: answer
    }));

    // In practice mode, show instant feedback
    if (isPracticeMode) {
      setShowFeedback(true);
      setTimeout(() => setShowFeedback(false), 1500);
    }
  };

  const toggleBookmark = (index: number) => {
    setBookmarks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const goToNextBookmark = () => {
    const bookmarkArray = Array.from(bookmarks).sort((a, b) => a - b);
    const nextBookmark = bookmarkArray.find(b => b > currentIndex);
    if (nextBookmark !== undefined) {
      setCurrentIndex(nextBookmark);
    } else if (bookmarkArray.length > 0) {
      setCurrentIndex(bookmarkArray[0]); // Wrap to first bookmark
    }
  };

  const handleTimeUp = useCallback(() => {
    setIsRunning(false);
    submitExam();
  }, []);

  const submitExam = () => {
    // Clear saved progress
    localStorage.removeItem(`exam_progress_${examType}`);

    // Calculate score
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });

    const score = correct;
    const total = questions.length;
    const percentage = (score / total) * 100;
    const passed = percentage >= config.passingScore * 100;

    // Save to exam history
    const history = JSON.parse(localStorage.getItem('exam_history') || '[]');
    history.unshift({
      id: Date.now(),
      examType,
      score,
      total,
      percentage: percentage.toFixed(1),
      passed,
      date: new Date().toISOString(),
      isPractice: isPracticeMode
    });
    localStorage.setItem('exam_history', JSON.stringify(history.slice(0, 20))); // Keep last 20

    // Store results in sessionStorage for review
    sessionStorage.setItem('examResults', JSON.stringify({
      examType,
      score,
      total,
      percentage: percentage.toFixed(1),
      passed,
      answers,
      questions
    }));

    router.push(`/exam/${examType}/results`);
  };

  const answeredQuestions = new Set(
    Object.keys(answers).map(id => 
      questions.findIndex(q => q.id === id)
    ).filter(i => i !== -1)
  );

  const hasSavedProgress = () => {
    const saved = localStorage.getItem(`exam_progress_${examType}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.questions && parsed.questions.length > 0 && Object.keys(parsed.answers || {}).length > 0;
    }
    return false;
  };

  if (!config || questions.length === 0) {
    return <ExamSkeleton />;
  }

  // Pre-exam instructions screen
  if (!examStarted) {
    const savedProgress = hasSavedProgress();
    
    return (
      <div className="instructions-page">
        <div className="instructions-card">
          <h1>{isPracticeMode ? '📚 Practice Mode' : config.name}</h1>
          
          {isPracticeMode && (
            <div style={{ 
              background: 'rgba(16, 185, 129, 0.1)', 
              border: '1px solid var(--accent)', 
              borderRadius: '0.5rem', 
              padding: '0.75rem',
              marginBottom: '1rem',
              fontSize: '0.8rem'
            }}>
              ✨ No time limit • Instant feedback • Learn at your pace
            </div>
          )}
          
          <div className="instructions-stats">
            <div className="stat">
              <div className="stat-value">{config.totalItems}</div>
              <div className="stat-label">Questions</div>
            </div>
            <div className="stat">
              <div className="stat-value">{isPracticeMode ? '∞' : `${Math.floor(config.timeLimit / 3600)}h ${Math.floor((config.timeLimit % 3600) / 60)}m`}</div>
              <div className="stat-label">Time</div>
            </div>
            <div className="stat">
              <div className="stat-value">{config.passingScore * 100}%</div>
              <div className="stat-label">To Pass</div>
            </div>
          </div>

          <ul>
            <li>📌 Bookmark questions with the flag button</li>
            <li>⌨️ Use A/B/C/D keys to answer quickly</li>
            <li>⬅️➡️ Arrow keys to navigate</li>
            {!isPracticeMode && <li>💾 Progress auto-saves if you leave</li>}
          </ul>

          {savedProgress && !isPracticeMode && (
            <button className="begin-btn" onClick={resumeExam} style={{ background: 'var(--accent)' }}>
              📂 Resume Previous Exam
            </button>
          )}
          
          <button className="begin-btn" onClick={startExam}>
            🚀 {savedProgress && !isPracticeMode ? 'Start Fresh' : 'Begin Exam'}
          </button>
          
          <button 
            onClick={() => router.push('/')}
            style={{ 
              width: '100%', 
              marginTop: '0.75rem', 
              padding: '0.65rem', 
              background: 'transparent', 
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.85rem'
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  const isCorrect = isPracticeMode && showFeedback && answers[currentQuestion.id] === currentQuestion.correctAnswer;
  const isWrong = isPracticeMode && showFeedback && answers[currentQuestion.id] && answers[currentQuestion.id] !== currentQuestion.correctAnswer;

  return (
    <div className="exam-page">
      {/* Header */}
      <header className="exam-header">
        <div className="exam-title">
          {isPracticeMode && <span style={{ color: 'var(--accent)' }}>📚 </span>}
          {config.name}
        </div>
        {!isPracticeMode && (
          <Timer
            initialSeconds={config.timeLimit}
            onTimeUp={handleTimeUp}
            isRunning={isRunning}
          />
        )}
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {bookmarks.size > 0 && (
            <button 
              onClick={goToNextBookmark}
              style={{ 
                background: 'var(--warning)', 
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                padding: '0.4rem 0.6rem',
                fontSize: '0.7rem',
                cursor: 'pointer'
              }}
              title="Go to next bookmark"
            >
              🚩 {bookmarks.size}
            </button>
          )}
          <button className="submit-btn" onClick={() => setShowConfirmModal(true)}>
            Submit
          </button>
        </div>
      </header>

      {/* Practice mode feedback toast */}
      {isPracticeMode && showFeedback && (
        <div style={{
          position: 'fixed',
          top: '70px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontSize: '0.85rem',
          fontWeight: '600',
          zIndex: 200,
          background: isCorrect ? 'var(--accent)' : 'var(--danger)',
          color: 'white'
        }}>
          {isCorrect ? '✓ Correct!' : `✗ Wrong! Answer: ${currentQuestion.correctAnswer}`}
        </div>
      )}

      {/* Main Content */}
      <main className="exam-body">
        <div>
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentQuestion.id] || null}
            onAnswerSelect={handleAnswerSelect}
            isBookmarked={bookmarks.has(currentIndex)}
            onToggleBookmark={() => toggleBookmark(currentIndex)}
            showCorrectAnswer={isPracticeMode && showFeedback}
          />

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button
              className="nav-btn prev"
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
            >
              ←
            </button>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              fontSize: '0.75rem', 
              color: 'var(--text-muted)' 
            }}>
              {currentIndex + 1} / {questions.length}
            </span>
            <button
              className="nav-btn next"
              onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentIndex === questions.length - 1}
            >
              →
            </button>
          </div>
        </div>

        <QuestionNavigator
          totalQuestions={questions.length}
          currentQuestion={currentIndex}
          answeredQuestions={answeredQuestions}
          bookmarkedQuestions={bookmarks}
          onQuestionSelect={setCurrentIndex}
        />
      </main>

      {/* Confirm Submit Modal */}
      {showConfirmModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Submit Exam?</h3>
            <p>
              You have answered <strong>{answeredQuestions.size}</strong> out of <strong>{questions.length}</strong> questions.
              {answeredQuestions.size < questions.length && (
                <><br /><span style={{ color: 'var(--warning)' }}>Unanswered questions will be marked as incorrect.</span></>
              )}
            </p>
            <div className="modal-actions">
              <button className="cancel-btn" onClick={() => setShowConfirmModal(false)}>
                Continue
              </button>
              <button className="confirm-btn" onClick={submitExam}>
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
