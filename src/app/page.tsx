'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { EXAM_CONFIG, SECTION_NAMES, ExamType } from '@/lib/examConfig';
import Analytics from '@/components/Analytics';

export interface ExamHistoryItem {
  id: number;
  examType: ExamType;
  score: number;
  total: number;
  percentage: string;
  passed: boolean;
  date: string;
  isPractice: boolean;
}

export default function Home() {
  const [history, setHistory] = useState<ExamHistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  
  const TITLES = [
    "CSE Simulator",
    "Focus. Review. Pass.",
    "Para sa Pangarap. Para sa Bayan.",
    "Magiging Civil Servant Ka Rin.",
    "One Exam Away from Your Dream.",
    "Hindi Madali, Pero Kakayanin.",
    "Make Your Future Self Proud."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); // Start fade out
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
        setIsVisible(true); // Start fade in
      }, 500); // Wait 0.5s for fade out to complete
    }, 4000); // 4 seconds visible

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('exam_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-badge">🇵🇭 Philippine Civil Service</div>
        <h1 style={{ 
          opacity: isVisible ? 1 : 0, 
          transition: 'opacity 0.5s ease-in-out',
          minHeight: '1.2em' // Prevent layout shift
        }}>
          {TITLES[titleIndex]}
        </h1>
        <p className="subtitle">Practice for Civil Service Exam with timed mock tests</p>
      </header>

      <main className="exam-cards">
        {Object.entries(EXAM_CONFIG).map(([type, config]) => (
          <div key={type} className="exam-card">
            <h2>{config.name}</h2>
            
            <div className="stats">
              <div className="stat">
                <div className="stat-value">{config.totalItems}</div>
                <div className="stat-label">Items</div>
              </div>
              <div className="stat">
                <div className="stat-value">{formatTime(config.timeLimit)}</div>
                <div className="stat-label">Time</div>
              </div>
              <div className="stat">
                <div className="stat-value">{config.passingScore * 100}%</div>
                <div className="stat-label">Pass</div>
              </div>
            </div>

            <div className="sections">
              {config.sections.map((section) => (
                <span key={section} className="section-tag">
                  {SECTION_NAMES[section]}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              <Link href={`/exam/${type}`} style={{ flex: 1 }}>
                <button className="start-btn" style={{ margin: 0 }}>
                  📝 Exam
                </button>
              </Link>
              <Link href={`/exam/${type}?mode=practice`} style={{ flex: 1 }}>
                <button className="start-btn" style={{ margin: 0, background: 'var(--accent)' }}>
                  📚 Practice
                </button>
              </Link>
            </div>
          </div>
        ))}

        {/* Study Mode Card */}
        <div className="exam-card" style={{ border: '2px dashed var(--primary)', background: 'rgba(37, 99, 235, 0.03)' }}>
          <h2>📖 Study Mode</h2>
          <div className="stats">
            <div className="stat" style={{ flex: 'none', width: '100%' }}>
              <div className="stat-value">400+</div>
              <div className="stat-label">Total Questions</div>
            </div>
          </div>
          
          <div style={{ margin: '1rem 0', fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
            Browse through all questions at your own pace. Reveal answers instantly and learn from detailed explanations.
          </div>

          <Link href="/study" style={{ display: 'block', marginTop: 'auto' }}>
            <button className="start-btn" style={{ margin: 0, width: '100%', background: 'var(--primary)' }}>
              🧠 Start Studying
            </button>
          </Link>
        </div>
      </main>

      {/* Exam History Section */}
      {history.length > 0 && (
        <section style={{ padding: '1rem', maxWidth: '600px', margin: '0 auto' }}>
          <Analytics history={history} />
          
          <button
            onClick={() => setShowHistory(!showHistory)}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.85rem'
            }}
          >
            <span>📊 Exam History ({history.length})</span>
            <span>{showHistory ? '▲' : '▼'}</span>
          </button>
          
          {showHistory && (
            <div style={{
              marginTop: '0.5rem',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '0.5rem',
              overflow: 'hidden'
            }}>
              {history.slice(0, 10).map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    padding: '0.75rem',
                    borderBottom: i < Math.min(history.length, 10) - 1 ? '1px solid var(--border)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.8rem'
                  }}
                >
                  <div>
                    <div style={{ fontWeight: '600' }}>
                      {item.isPractice && <span style={{ color: 'var(--accent)' }}>📚 </span>}
                      {EXAM_CONFIG[item.examType]?.name || item.examType}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>
                      {formatDate(item.date)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ 
                      fontWeight: '700',
                      color: item.passed ? 'var(--accent)' : 'var(--danger)'
                    }}>
                      {item.percentage}%
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      {item.score}/{item.total}
                    </div>
                  </div>
                </div>
              ))}
              {history.length > 10 && (
                <div style={{ padding: '0.5rem', textAlign: 'center', fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  +{history.length - 10} more
                </div>
              )}
            </div>
          )}
        </section>
      )}

      <footer style={{ textAlign: 'center', padding: '1.5rem 1rem', color: 'var(--text-muted)', fontSize: '0.75rem' }}>
        <p>
          Practice only • Official exams at{' '}
          <a href="https://www.csc.gov.ph" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            csc.gov.ph
          </a>
        </p>
        <p style={{ marginTop: '0.35rem' }}>80% passing • A/B/C/D format</p>
      </footer>
    </div>
  );
}
