'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { EXAM_CONFIG, ExamType, SECTION_NAMES } from '@/lib/examConfig';
import { Question } from '@/lib/questions';

interface ExamResults {
  examType: ExamType;
  score: number;
  total: number;
  percentage: string;
  passed: boolean;
  answers: Record<string, string>;
  questions: Question[];
}

export default function ResultsPage() {
  const params = useParams();
  const router = useRouter();
  const examType = params.type as ExamType;
  const config = EXAM_CONFIG[examType];
  
  const [results, setResults] = useState<ExamResults | null>(null);
  const [showReview, setShowReview] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<'all' | 'wrong' | 'correct'>('wrong');

  useEffect(() => {
    const storedResults = sessionStorage.getItem('examResults');
    if (storedResults) {
      setResults(JSON.parse(storedResults));
    } else {
      router.push('/');
    }
  }, [router]);

  if (!results || !config) {
    return (
      <div className="results-page">
        <p>Loading results...</p>
      </div>
    );
  }

  const requiredScore = Math.ceil(results.total * config.passingScore);

  const getFilteredQuestions = () => {
    if (!results.questions) return [];
    return results.questions.filter((q, i) => {
      const userAnswer = results.answers[q.id];
      const isCorrect = userAnswer === q.correctAnswer;
      if (reviewFilter === 'wrong') return !isCorrect;
      if (reviewFilter === 'correct') return isCorrect;
      return true;
    });
  };

  const filteredQuestions = getFilteredQuestions();

  if (showReview) {
    return (
      <div className="results-page" style={{ alignItems: 'flex-start', padding: '0.75rem' }}>
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto' }}>
          {/* Review Header */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            padding: '0.75rem 1rem',
            marginBottom: '0.75rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 10
          }}>
            <button
              onClick={() => setShowReview(false)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                color: 'var(--primary)',
                fontWeight: '600'
              }}
            >
              ← Back
            </button>
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {(['wrong', 'all', 'correct'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setReviewFilter(filter)}
                  style={{
                    padding: '0.35rem 0.6rem',
                    fontSize: '0.7rem',
                    border: 'none',
                    borderRadius: '0.25rem',
                    cursor: 'pointer',
                    background: reviewFilter === filter ? 
                      (filter === 'wrong' ? 'var(--danger)' : filter === 'correct' ? 'var(--accent)' : 'var(--primary)') 
                      : 'var(--border)',
                    color: reviewFilter === filter ? 'white' : 'var(--text)'
                  }}
                >
                  {filter === 'wrong' ? '✗ Wrong' : filter === 'correct' ? '✓ Right' : 'All'}
                </button>
              ))}
            </div>
          </div>

          {/* Questions List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {filteredQuestions.length === 0 ? (
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--text-muted)'
              }}>
                No {reviewFilter === 'wrong' ? 'wrong' : reviewFilter === 'correct' ? 'correct' : ''} answers to review
              </div>
            ) : (
              filteredQuestions.map((q, idx) => {
                const userAnswer = results.answers[q.id];
                const isCorrect = userAnswer === q.correctAnswer;
                const originalIndex = results.questions.findIndex(oq => oq.id === q.id);

                return (
                  <div
                    key={q.id}
                    style={{
                      background: 'var(--bg-card)',
                      border: `1px solid ${isCorrect ? 'var(--accent)' : 'var(--danger)'}`,
                      borderRadius: 'var(--radius)',
                      padding: '1rem',
                      borderLeft: `4px solid ${isCorrect ? 'var(--accent)' : 'var(--danger)'}`
                    }}
                  >
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      marginBottom: '0.5rem',
                      fontSize: '0.7rem'
                    }}>
                      <span style={{ fontWeight: '600', color: 'var(--primary)' }}>Q{originalIndex + 1}</span>
                      <span style={{ 
                        background: isCorrect ? 'var(--accent)' : 'var(--danger)',
                        color: 'white',
                        padding: '0.1rem 0.4rem',
                        borderRadius: '1rem',
                        fontWeight: '600'
                      }}>
                        {q.section}
                      </span>
                    </div>
                    
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '0.75rem' }}>
                      {q.questionText}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                      {q.choices.map((choice, i) => {
                        const isUserChoice = userAnswer === choice;
                        const isCorrectChoice = q.correctAnswer === choice;
                        let bg = 'var(--bg)';
                        let border = '1px solid var(--border)';
                        if (isCorrectChoice) {
                          bg = 'rgba(16, 185, 129, 0.15)';
                          border = '1px solid var(--accent)';
                        } else if (isUserChoice && !isCorrect) {
                          bg = 'rgba(239, 68, 68, 0.15)';
                          border = '1px solid var(--danger)';
                        }

                        return (
                          <div
                            key={i}
                            style={{
                              padding: '0.5rem 0.75rem',
                              background: bg,
                              border,
                              borderRadius: '0.35rem',
                              fontSize: '0.8rem',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem'
                            }}
                          >
                            <span style={{
                              width: '1.4rem',
                              height: '1.4rem',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              borderRadius: '50%',
                              fontSize: '0.65rem',
                              fontWeight: '700',
                              background: isCorrectChoice ? 'var(--accent)' : isUserChoice ? 'var(--danger)' : 'var(--border)',
                              color: isCorrectChoice || isUserChoice ? 'white' : 'var(--text-muted)'
                            }}>
                              {['A', 'B', 'C', 'D'][i]}
                            </span>
                            <span style={{ flex: 1 }}>{choice}</span>
                            {isCorrectChoice && <span style={{ color: 'var(--accent)' }}>✓</span>}
                            {isUserChoice && !isCorrect && <span style={{ color: 'var(--danger)' }}>✗</span>}
                          </div>
                        );
                      })}
                    </div>

                    {/* Explanation Section */}
                    {q.explanation && (
                      <div style={{
                        marginTop: '0.75rem',
                        padding: '0.75rem',
                        background: 'rgba(37, 99, 235, 0.08)',
                        border: '1px solid var(--primary)',
                        borderRadius: '0.5rem',
                        fontSize: '0.8rem'
                      }}>
                        <div style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                          💡 How to Solve
                        </div>
                        <div style={{ color: 'var(--text)', lineHeight: '1.5' }}>
                          {q.explanation}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="results-page">
      <div className="results-card">
        <div className="results-icon">
          {results.passed ? '🎉' : '📚'}
        </div>
        
        <h1 className={`results-title ${results.passed ? 'results-passed' : 'results-failed'}`}>
          {results.passed ? 'Congratulations!' : 'Keep Practicing!'}
        </h1>
        
        <p style={{ color: 'var(--text-muted)', marginBottom: '0.75rem', fontSize: '0.85rem' }}>
          {results.passed 
            ? 'You passed the exam!' 
            : `Need ${requiredScore} correct (80%) to pass`}
        </p>

        <div className={`results-score ${results.passed ? 'passed' : 'failed'}`}>
          {results.percentage}%
        </div>

        <div className="results-details">
          <div className="detail">
            <div className="detail-value" style={{ color: 'var(--accent)' }}>{results.score}</div>
            <div className="detail-label">Correct</div>
          </div>
          <div className="detail">
            <div className="detail-value" style={{ color: 'var(--danger)' }}>{results.total - results.score}</div>
            <div className="detail-label">Wrong</div>
          </div>
          <div className="detail">
            <div className="detail-value">{results.total}</div>
            <div className="detail-label">Total</div>
          </div>
        </div>

        {/* Section Breakdown */}
        {results.questions && results.questions.length > 0 && (() => {
          // Calculate section stats
          const sectionStats: Record<string, { correct: number; total: number }> = {};
          results.questions.forEach((q) => {
            const section = q.section;
            if (!sectionStats[section]) {
              sectionStats[section] = { correct: 0, total: 0 };
            }
            sectionStats[section].total++;
            if (results.answers[q.id] === q.correctAnswer) {
              sectionStats[section].correct++;
            }
          });

          return (
            <div style={{
              width: '100%',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              padding: '0.75rem',
              marginBottom: '0.75rem'
            }}>
              <div style={{ 
                fontSize: '0.75rem', 
                fontWeight: '600', 
                marginBottom: '0.5rem',
                color: 'var(--text-muted)'
              }}>
                📊 Section Breakdown
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {Object.entries(sectionStats).map(([section, stats]) => {
                  const percentage = Math.round((stats.correct / stats.total) * 100);
                  const isWeak = percentage < 60;
                  const isStrong = percentage >= 80;
                  
                  return (
                    <div key={section} style={{ fontSize: '0.75rem' }}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        marginBottom: '0.2rem' 
                      }}>
                        <span style={{ fontWeight: '500' }}>
                          {SECTION_NAMES[section] || section}
                        </span>
                        <span style={{ 
                          fontWeight: '600',
                          color: isWeak ? 'var(--danger)' : isStrong ? 'var(--accent)' : 'var(--text)'
                        }}>
                          {stats.correct}/{stats.total} ({percentage}%)
                        </span>
                      </div>
                      <div style={{
                        height: '6px',
                        background: 'var(--border)',
                        borderRadius: '3px',
                        overflow: 'hidden'
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${percentage}%`,
                          background: isWeak ? 'var(--danger)' : isStrong ? 'var(--accent)' : 'var(--warning)',
                          borderRadius: '3px',
                          transition: 'width 0.5s ease'
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {/* Review Answers Button */}
        {results.questions && results.questions.length > 0 && (
          <button
            onClick={() => setShowReview(true)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '0.75rem'
            }}
          >
            📖 Review Answers
          </button>
        )}

        <div className="results-actions">
          <Link href={`/exam/${examType}`} style={{ flex: 1 }}>
            <button className="retake-btn" style={{ width: '100%' }}>
              🔄 Retake
            </button>
          </Link>
          <Link href="/" style={{ flex: 1 }}>
            <button className="home-btn" style={{ width: '100%' }}>
              🏠 Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
