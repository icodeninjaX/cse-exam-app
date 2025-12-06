'use client';

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Set<number>;
  bookmarkedQuestions?: Set<number>;
  onQuestionSelect: (index: number) => void;
}

export default function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  bookmarkedQuestions = new Set(),
  onQuestionSelect,
}: QuestionNavigatorProps) {
  const getButtonClass = (index: number) => {
    if (index === currentQuestion) return 'navigator-button current';
    if (answeredQuestions.has(index)) return 'navigator-button answered';
    return 'navigator-button unanswered';
  };

  return (
    <div className="question-navigator">
      <div className="navigator-header">
        <h3>Navigator</h3>
        <div className="navigator-legend">
          <span className="legend-item">
            <span className="legend-dot current"></span> Now
          </span>
          <span className="legend-item">
            <span className="legend-dot answered"></span> Done
          </span>
          <span className="legend-item">
            <span className="legend-dot unanswered"></span> Skip
          </span>
          {bookmarkedQuestions.size > 0 && (
            <span className="legend-item">
              <span style={{ fontSize: '0.6rem' }}>🚩</span> Flag
            </span>
          )}
        </div>
      </div>
      
      <div className="navigator-grid">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            className={getButtonClass(i)}
            onClick={() => onQuestionSelect(i)}
            style={bookmarkedQuestions.has(i) ? { 
              boxShadow: '0 0 0 2px var(--warning)',
              position: 'relative'
            } : undefined}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="navigator-stats">
        <strong>{answeredQuestions.size}</strong>/{totalQuestions}
        {bookmarkedQuestions.size > 0 && (
          <span style={{ marginLeft: '0.5rem', color: 'var(--warning)' }}>
            🚩{bookmarkedQuestions.size}
          </span>
        )}
      </div>
    </div>
  );
}
