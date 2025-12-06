'use client';

interface QuestionNavigatorProps {
  totalQuestions: number;
  currentQuestion: number;
  answeredQuestions: Set<number>;
  onQuestionSelect: (index: number) => void;
}

export default function QuestionNavigator({
  totalQuestions,
  currentQuestion,
  answeredQuestions,
  onQuestionSelect,
}: QuestionNavigatorProps) {
  return (
    <div className="question-navigator">
      <div className="navigator-header">
        <h3>Question Navigator</h3>
        <div className="navigator-legend">
          <span className="legend-item">
            <span className="legend-dot current"></span> Current
          </span>
          <span className="legend-item">
            <span className="legend-dot answered"></span> Answered
          </span>
          <span className="legend-item">
            <span className="legend-dot unanswered"></span> Unanswered
          </span>
        </div>
      </div>
      
      <div className="navigator-grid">
        {Array.from({ length: totalQuestions }, (_, i) => (
          <button
            key={i}
            className={`navigator-button ${
              i === currentQuestion
                ? 'current'
                : answeredQuestions.has(i)
                ? 'answered'
                : 'unanswered'
            }`}
            onClick={() => onQuestionSelect(i)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="navigator-stats">
        <span className="stat">
          <strong>{answeredQuestions.size}</strong> / {totalQuestions} answered
        </span>
      </div>
    </div>
  );
}
