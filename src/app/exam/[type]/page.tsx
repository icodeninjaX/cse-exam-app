'use client';

import { useState, useCallback, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Timer from '@/components/Timer';
import QuestionCard from '@/components/QuestionCard';
import QuestionNavigator from '@/components/QuestionNavigator';
import { EXAM_CONFIG, ExamType, SECTION_NAMES } from '@/lib/examConfig';
import { generateExamQuestions, Question } from '@/lib/questions';

export default function ExamPage() {
  const params = useParams();
  const router = useRouter();
  const examType = params.type as ExamType;
  const config = EXAM_CONFIG[examType];

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isRunning, setIsRunning] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [examStarted, setExamStarted] = useState(false);

  useEffect(() => {
    if (!config) {
      router.push('/');
      return;
    }
    // Generate questions when component mounts
    const generatedQuestions = generateExamQuestions(examType, config.totalItems);
    setQuestions(generatedQuestions);
  }, [examType, config, router]);

  const startExam = () => {
    setExamStarted(true);
    setIsRunning(true);
  };

  const handleAnswerSelect = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentIndex].id]: answer
    }));
  };

  const handleTimeUp = useCallback(() => {
    setIsRunning(false);
    submitExam();
  }, []);

  const submitExam = () => {
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

    // Store results in sessionStorage
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

  if (!config || questions.length === 0) {
    return (
      <div className="exam-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading exam...</p>
      </div>
    );
  }

  // Pre-exam instructions screen
  if (!examStarted) {
    return (
      <div className="exam-page" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div className="results-card">
          <h1 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{config.name}</h1>
          
          <div className="results-details" style={{ flexDirection: 'column', gap: '0.75rem', textAlign: 'left' }}>
            <p><strong>📝 Total Questions:</strong> {config.totalItems} items</p>
            <p><strong>⏱️ Time Limit:</strong> {Math.floor(config.timeLimit / 3600)}h {Math.floor((config.timeLimit % 3600) / 60)}m</p>
            <p><strong>✅ Passing Score:</strong> {config.passingScore * 100}% ({Math.ceil(config.totalItems * config.passingScore)} correct answers)</p>
            <p><strong>📚 Sections:</strong> {config.sections.map(s => SECTION_NAMES[s]).join(', ')}</p>
          </div>

          <div style={{ 
            background: 'rgba(234, 179, 8, 0.1)', 
            border: '1px solid var(--warning)', 
            borderRadius: '0.5rem', 
            padding: '1rem', 
            margin: '1.5rem 0',
            textAlign: 'left',
            fontSize: '0.875rem'
          }}>
            <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>⚠️ Important Instructions:</p>
            <ul style={{ marginLeft: '1rem', color: 'var(--muted)' }}>
              <li>The timer will start immediately after you begin</li>
              <li>You can navigate between questions using the navigator</li>
              <li>Unanswered questions will be marked as incorrect</li>
              <li>The exam will auto-submit when time expires</li>
            </ul>
          </div>

          <button className="start-btn" onClick={startExam} style={{ marginTop: '1rem' }}>
            🚀 Begin Exam
          </button>
          
          <button 
            onClick={() => router.push('/')}
            style={{ 
              width: '100%', 
              marginTop: '1rem', 
              padding: '0.75rem', 
              background: 'transparent', 
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              cursor: 'pointer'
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="exam-page">
      {/* Header */}
      <header className="exam-header">
        <div className="exam-title">{config.name}</div>
        <Timer
          initialSeconds={config.timeLimit}
          onTimeUp={handleTimeUp}
          isRunning={isRunning}
        />
        <button className="submit-btn" onClick={() => setShowConfirmModal(true)}>
          Submit Exam
        </button>
      </header>

      {/* Main Content */}
      <main className="exam-body">
        <div>
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentIndex + 1}
            totalQuestions={questions.length}
            selectedAnswer={answers[currentQuestion.id] || null}
            onAnswerSelect={handleAnswerSelect}
          />

          {/* Navigation Buttons */}
          <div className="nav-buttons">
            <button
              className="nav-btn prev"
              onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
            >
              ← Previous
            </button>
            <button
              className="nav-btn next"
              onClick={() => setCurrentIndex(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentIndex === questions.length - 1}
            >
              Next →
            </button>
          </div>
        </div>

        <QuestionNavigator
          totalQuestions={questions.length}
          currentQuestion={currentIndex}
          answeredQuestions={answeredQuestions}
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
                Continue Exam
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
