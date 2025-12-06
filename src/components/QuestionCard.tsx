'use client';

import { Question } from '@/lib/questions';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: string | null;
  onAnswerSelect: (answer: string) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
}: QuestionCardProps) {
  const choiceLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="question-card">
      <div className="question-header">
        <span className="question-number">Question {questionNumber} of {totalQuestions}</span>
        <span className="question-section">{question.section.charAt(0).toUpperCase() + question.section.slice(1)}</span>
      </div>
      
      <div className="question-text">
        {question.questionText}
      </div>

      <div className="choices-container">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={`choice-button ${selectedAnswer === choice ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(choice)}
          >
            <span className="choice-label">{choiceLabels[index]}</span>
            <span className="choice-text">{choice}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
