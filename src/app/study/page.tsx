'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { getQuestionsForExam, CLERICAL_QUESTIONS, Question } from '@/lib/questions';
import { SECTION_NAMES } from '@/lib/examConfig';
import StudyCard from '@/components/StudyCard';
import ExamSkeleton from '@/components/ExamSkeleton';

export default function StudyPage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function loadAllQuestions() {
      try {
        // Load professional questions (includes Verbal, Numerical, Analytical, General)
        const profQuestions = await getQuestionsForExam('professional');
        
        // Add clerical questions
        const allQuestions = [...profQuestions, ...CLERICAL_QUESTIONS];
        
        // Remove duplicates if any (based on ID)
        const uniqueQuestions = Array.from(new Map(allQuestions.map(q => [q.id, q])).values());
        
        setQuestions(uniqueQuestions);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load questions", error);
        setLoading(false);
      }
    }
    loadAllQuestions();
  }, []);

  const filteredQuestions = useMemo(() => {
    if (activeSection === 'all') return questions;
    return questions.filter(q => q.section === activeSection);
  }, [questions, activeSection]);

  const totalPages = Math.ceil(filteredQuestions.length / itemsPerPage);
  const currentQuestions = filteredQuestions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeSection]);

  if (loading) return <ExamSkeleton />;

  const sections = ['all', 'verbal', 'numerical', 'analytical', 'general', 'clerical'];

  return (
    <div className="study-page" style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', paddingBottom: '4rem' }}>
      {/* Header */}
      <header style={{ marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
          <Link href="/" style={{ textDecoration: 'none', fontSize: '1.2rem' }}>🏠</Link>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '800', margin: 0 }}>Study Mode</h1>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Browse {questions.length} questions with explanations. No timer, no pressure.
        </p>
      </header>

      {/* Section Filter */}
      <div style={{ 
        display: 'flex', 
        gap: '0.5rem', 
        overflowX: 'auto', 
        paddingBottom: '0.5rem',
        marginBottom: '1.5rem',
        scrollbarWidth: 'none'
      }}>
        {sections.map(section => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              border: activeSection === section ? '2px solid var(--primary)' : '1px solid var(--border)',
              background: activeSection === section ? 'var(--primary)' : 'var(--bg-card)',
              color: activeSection === section ? 'white' : 'var(--text)',
              fontSize: '0.85rem',
              fontWeight: '600',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {section === 'all' ? 'All Questions' : SECTION_NAMES[section] || section.charAt(0).toUpperCase() + section.slice(1)} ({
              section === 'all' 
                ? questions.length 
                : questions.filter(q => q.section === section).length
            })
          </button>
        ))}
      </div>

      {/* Scroll to top helper */}
      <div id="top-anchor" />

      {/* Questions List */}
      <div className="study-list">
        {currentQuestions.map((q, i) => (
          <StudyCard 
            key={q.id} 
            question={q} 
            questionNumber={(currentPage - 1) * itemsPerPage + i + 1} 
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '1rem', 
          marginTop: '2rem' 
        }}>
          <button
            onClick={() => {
              setCurrentPage(p => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === 1}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '0.375rem',
              background: 'var(--bg-card)',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              opacity: currentPage === 1 ? 0.5 : 1
            }}
          >
            Previous
          </button>
          
          <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Page {currentPage} of {totalPages}
          </span>
          
          <button
             onClick={() => {
              setCurrentPage(p => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.5rem 1rem',
              border: '1px solid var(--border)',
              borderRadius: '0.375rem',
              background: 'var(--bg-card)',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              opacity: currentPage === totalPages ? 0.5 : 1
            }}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
