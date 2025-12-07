'use client';

export default function ExamSkeleton() {
  return (
    <div className="exam-page animate-pulse">
      {/* Header Skeleton */}
      <header className="exam-header">
        <div style={{ height: '24px', width: '150px', background: 'var(--border)', borderRadius: '4px' }}></div>
        <div style={{ height: '40px', width: '40px', borderRadius: '50%', background: 'var(--border)' }}></div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div style={{ height: '32px', width: '60px', background: 'var(--border)', borderRadius: '4px' }}></div>
        </div>
      </header>

      {/* Body Skeleton */}
      <main className="exam-body">
        <div>
          <div className="question-card">
            <div className="question-header">
              <div style={{ height: '20px', width: '80px', background: 'var(--border)', borderRadius: '4px' }}></div>
              <div style={{ height: '20px', width: '60px', background: 'var(--border)', borderRadius: '4px' }}></div>
            </div>
            
            <div style={{ height: '60px', width: '100%', background: 'var(--border)', borderRadius: '4px', margin: '1rem 0' }}></div>

            <div className="choices-container">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{
                  height: '50px',
                  width: '100%',
                  background: 'var(--border)',
                  borderRadius: '0.5rem',
                  opacity: 0.5
                }}></div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigator Skeleton */}
        <div className="question-navigator" style={{ height: '200px' }}>
           <div style={{ height: '20px', width: '100px', background: 'var(--border)', borderRadius: '4px', marginBottom: '1rem' }}></div>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.5rem' }}>
             {Array.from({ length: 20 }).map((_, i) => (
               <div key={i} style={{ height: '24px', background: 'var(--border)', borderRadius: '4px', opacity: 0.3 }}></div>
             ))}
           </div>
        </div>
      </main>
    </div>
  );
}
