import Link from 'next/link';
import { EXAM_CONFIG, SECTION_NAMES } from '@/lib/examConfig';

export default function Home() {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div className="landing-page">
      <header className="hero">
        <div className="hero-badge">🇵🇭 Philippine Civil Service Commission</div>
        <h1>CSE Exam Simulator</h1>
        <p className="subtitle">
          Practice for the Civil Service Examination with timed mock tests
          <br />
          featuring the exact format and time limits of the actual exam.
        </p>
      </header>

      <main className="exam-cards">
        {Object.entries(EXAM_CONFIG).map(([type, config]) => (
          <div key={type} className="exam-card">
            <h2>{config.name}</h2>
            
            <div className="stats">
              <div className="stat">
                <div className="stat-value">{config.totalItems}</div>
                <div className="stat-label">Questions</div>
              </div>
              <div className="stat">
                <div className="stat-value">{formatTime(config.timeLimit)}</div>
                <div className="stat-label">Time Limit</div>
              </div>
              <div className="stat">
                <div className="stat-value">{config.passingScore * 100}%</div>
                <div className="stat-label">Passing</div>
              </div>
            </div>

            <div className="sections">
              {config.sections.map((section) => (
                <span key={section} className="section-tag">
                  {SECTION_NAMES[section]}
                </span>
              ))}
            </div>

            <Link href={`/exam/${type}`}>
              <button className="start-btn">
                Start {config.name} Exam →
              </button>
            </Link>
          </div>
        ))}
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', color: 'var(--muted)', fontSize: '0.875rem' }}>
        <p>
          This is a practice simulator only. For official examinations, visit{' '}
          <a href="https://www.csc.gov.ph" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
            csc.gov.ph
          </a>
        </p>
        <p style={{ marginTop: '0.5rem' }}>
          Passing score requirement: 80% • Multiple choice format (A, B, C, D)
        </p>
      </footer>
    </div>
  );
}
