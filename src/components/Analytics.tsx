import { useMemo } from 'react';
import { ExamHistoryItem } from '@/app/page';

interface AnalyticsProps {
  history: ExamHistoryItem[];
}

export default function Analytics({ history }: AnalyticsProps) {
  const stats = useMemo(() => {
    if (history.length === 0) return null;

    const totalExams = history.length;
    let totalScore = 0;
    let bestScore = 0;
    let passedCount = 0;

    history.forEach(item => {
      const pct = parseFloat(item.percentage);
      totalScore += pct;
      if (pct > bestScore) bestScore = pct;
      if (item.passed) passedCount++;
    });

    return {
      totalExams,
      averageScore: Math.round(totalScore / totalExams),
      bestScore: Math.round(bestScore),
      passRate: Math.round((passedCount / totalExams) * 100)
    };
  }, [history]);

  // Get last 10 exams for the chart, reversed to show chronological left-to-right
  const chartData = useMemo(() => {
    return history.slice(0, 10).reverse();
  }, [history]);

  if (!stats) return null;

  return (
    <div className="analytics-container" style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '0.5rem',
      padding: '1.25rem',
      maxWidth: '600px',
      margin: '0 auto 1.5rem auto'
    }}>
      <h3 style={{ margin: '0 0 1rem 0', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        📈 Performance Analytics
      </h3>

      {/* Summary Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '0.75rem',
        marginBottom: '1.5rem'
      }}>
        <StatItem label="Exams" value={stats.totalExams.toString()} />
        <StatItem label="Avg Score" value={`${stats.averageScore}%`} 
          color={stats.averageScore >= 80 ? 'var(--accent)' : stats.averageScore < 60 ? 'var(--danger)' : undefined} />
        <StatItem label="Best" value={`${stats.bestScore}%`} color="var(--accent)" />
        <StatItem label="Pass Rate" value={`${stats.passRate}%`} />
      </div>

      {/* Mini Chart */}
      <div style={{ marginTop: '1rem' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          Recent History (Last 10)
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          height: '100px',
          gap: '4px',
          paddingBottom: '5px',
          borderBottom: '1px solid var(--border)'
        }}>
          {chartData.map((item, i) => {
            const pct = parseFloat(item.percentage);
            const isPass = item.passed;
            return (
              <div key={item.id} style={{
                flex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                position: 'relative',
              }} title={`${item.percentage}% - ${new Date(item.date).toLocaleDateString()}`}>
                <div style={{
                  height: `${pct}%`,
                  background: isPass ? 'var(--accent)' : 'var(--danger)',
                  opacity: 0.8,
                  borderRadius: '2px 2px 0 0',
                  minHeight: '4px',
                  transition: 'all 0.3s ease'
                }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function StatItem({ label, value, color }: { label: string, value: string, color?: string }) {
  return (
    <div style={{
      background: 'var(--bg)',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      textAlign: 'center',
      border: '1px solid var(--border)'
    }}>
      <div style={{ fontSize: '1rem', fontWeight: '700', color: color || 'var(--text)' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '0.1rem' }}>
        {label}
      </div>
    </div>
  );
}
