'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { EXAM_CONFIG, ExamType } from '@/lib/examConfig';

interface ExamResults {
  examType: ExamType;
  score: number;
  total: number;
  percentage: string;
  passed: boolean;
}

export default function ResultsPage() {
  const params = useParams();
  const router = useRouter();
  const examType = params.type as ExamType;
  const config = EXAM_CONFIG[examType];
  
  const [results, setResults] = useState<ExamResults | null>(null);

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

  return (
    <div className="results-page">
      <div className="results-card">
        <div className="results-icon">
          {results.passed ? '🎉' : '📚'}
        </div>
        
        <h1 className={`results-title ${results.passed ? 'results-passed' : 'results-failed'}`}>
          {results.passed ? 'Congratulations!' : 'Keep Practicing!'}
        </h1>
        
        <p style={{ color: 'var(--muted)', marginBottom: '1rem' }}>
          {results.passed 
            ? 'You passed the exam simulation!' 
            : `You need ${requiredScore} correct answers (80%) to pass.`}
        </p>

        <div className={`results-score ${results.passed ? 'passed' : 'failed'}`}>
          {results.percentage}%
        </div>

        <div className="results-details">
          <div className="detail">
            <div className="detail-value">{results.score}</div>
            <div className="detail-label">Correct</div>
          </div>
          <div className="detail">
            <div className="detail-value">{results.total - results.score}</div>
            <div className="detail-label">Incorrect</div>
          </div>
          <div className="detail">
            <div className="detail-value">{results.total}</div>
            <div className="detail-label">Total</div>
          </div>
        </div>

        <div style={{ 
          background: results.passed ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)', 
          border: `1px solid ${results.passed ? 'var(--success)' : 'var(--danger)'}`,
          borderRadius: '0.5rem',
          padding: '1rem',
          marginBottom: '1.5rem'
        }}>
          <p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>
            {results.passed ? '✓ PASSED' : '✗ FAILED'}
          </p>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
            Required: {requiredScore}/{results.total} ({config.passingScore * 100}%)
            <br />
            Your Score: {results.score}/{results.total} ({results.percentage}%)
          </p>
        </div>

        <div className="results-actions">
          <Link href={`/exam/${examType}`} style={{ flex: 1 }}>
            <button className="retake-btn" style={{ width: '100%' }}>
              🔄 Retake Exam
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
