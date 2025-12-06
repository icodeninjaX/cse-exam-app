'use client';

import { Question } from '@/lib/questions';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
  isBookmarked?: boolean;
  onToggleBookmark?: () => void;
  showCorrectAnswer?: boolean;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  isBookmarked = false,
  onToggleBookmark,
  showCorrectAnswer = false,
}: QuestionCardProps) {
  const choiceLabels = ['A', 'B', 'C', 'D'];

  const getChoiceClass = (choice: string) => {
    let classes = 'choice-button';
    if (selectedAnswer === choice) classes += ' selected';
    if (showCorrectAnswer) {
      if (choice === question.correctAnswer) classes += ' correct';
      else if (selectedAnswer === choice) classes += ' wrong';
    }
    return classes;
  };

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">Q{questionNumber}/{totalQuestions}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="question-section">{question.section}</span>
          {onToggleBookmark && (
            <button
              onClick={(e) => { e.stopPropagation(); onToggleBookmark(); }}
              style={{
                background: isBookmarked ? 'var(--warning)' : 'var(--border)',
                border: 'none',
                borderRadius: '0.25rem',
                padding: '0.2rem 0.4rem',
                cursor: 'pointer',
                fontSize: '0.7rem',
                transition: 'all 0.15s'
              }}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark this question'}
            >
              🚩
            </button>
          )}
        </div>
      </div>
      
      <div className="question-text">
        {question.questionText}
      </div>

      <div className="choices-container">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={getChoiceClass(choice)}
            onClick={() => onAnswerSelect(choice)}
          >
            <span className="choice-label">{choiceLabels[index]}</span>
            <span className="choice-text">{choice}</span>
            {showCorrectAnswer && choice === question.correctAnswer && (
              <span style={{ marginLeft: 'auto', color: 'var(--accent)' }}>✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
