'use client';

import { useState } from 'react';
import { Question } from '@/lib/questions';

interface StudyCardProps {
  question: Question;
  questionNumber: number;
}

export default function StudyCard({ question, questionNumber }: StudyCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const choiceLabels = ['A', 'B', 'C', 'D'];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const showExplanation = showAnswer || (selectedAnswer !== null);

  const handleSelect = (choice: string) => {
    if (showAnswer) return; // Prevent changing after revealing
    setSelectedAnswer(choice);
  };

  const getChoiceClass = (choice: string) => {
    let classes = 'choice-button';
    if (showAnswer || selectedAnswer !== null) {
      if (choice === question.correctAnswer) classes += ' correct';
      else if (selectedAnswer === choice && choice !== question.correctAnswer) classes += ' wrong';
    } else if (selectedAnswer === choice) {
      classes += ' selected';
    }
    return classes;
  };

  return (
    <div className="study-card" style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border)',
      borderRadius: '0.5rem',
      padding: '1.5rem',
      marginBottom: '1.5rem'
    }}>
      <div className="question-header" style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: '700', color: 'var(--primary)' }}>Question {questionNumber}</span>
        <span className="question-section" style={{ 
          fontSize: '0.7rem', 
          background: 'var(--primary)', 
          color: 'white', 
          padding: '2px 8px', 
          borderRadius: '12px' 
        }}>
          {question.section}
        </span>
      </div>

      <div style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
        {question.questionText}
      </div>

      <div className="choices-container" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={getChoiceClass(choice)}
            onClick={() => handleSelect(choice)}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              padding: '1rem', 
              textAlign: 'left',
              border: '2px solid var(--border)',
              borderRadius: '0.5rem',
              background: 'var(--bg)',
              cursor: (showAnswer || selectedAnswer) ? 'default' : 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
            disabled={showAnswer || selectedAnswer !== null}
          >
            <span className="choice-label" style={{
              width: '24px', height: '24px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', flexShrink: 0
            }}>
              {choiceLabels[index]}
            </span>
            <span style={{ flex: 1 }}>{choice}</span>
            {((showAnswer || selectedAnswer !== null) && choice === question.correctAnswer) && (
              <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>✓ Correct</span>
            )}
             {((showAnswer || selectedAnswer !== null) && selectedAnswer === choice && choice !== question.correctAnswer) && (
              <span style={{ color: 'var(--danger)', fontWeight: 'bold' }}>✗ Your Answer</span>
            )}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {!showAnswer && selectedAnswer === null && (
          <button 
            onClick={() => setShowAnswer(true)}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              background: 'transparent',
              borderRadius: '0.375rem',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            👁️ Reveal Answer
          </button>
        )}
      </div>

      {showExplanation && (
        <div style={{
          marginTop: '1.5rem',
          padding: '1rem',
          background: 'rgba(37, 99, 235, 0.05)',
          borderLeft: '4px solid var(--primary)',
          borderRadius: '0 0.5rem 0.5rem 0'
        }}>
          <div style={{ fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>
            💡 Explanation
          </div>
          <div style={{ lineHeight: '1.6' }}>
            {question.explanation || "No explanation available for this question."}
          </div>
        </div>
      )}
    </div>
  );
}
