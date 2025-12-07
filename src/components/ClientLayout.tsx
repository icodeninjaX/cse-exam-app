'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Hide on active exam pages (except results)
  const isExamPage = pathname?.startsWith('/exam/') && !pathname?.endsWith('/results');
  
  if (isExamPage) {
    return <>{children}</>;
  }

  const navItems = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/study', label: 'Study', icon: '📖' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <nav className="main-nav">
        <div className="nav-container">
          <div className="nav-logo desktop-only">
            🇵🇭 CSE Simulator
          </div>
          
          <div className="nav-links">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={`nav-item ${isActive(item.href) ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper with Spacers */}
      <div className="content-wrapper">
        {children}
      </div>

      <style jsx>{`
        .main-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--bg-card);
          border-top: 1px solid var(--border);
          padding: 0.5rem 1rem;
          z-index: 50;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
        }

        .content-wrapper {
          padding-bottom: 70px; /* Space for mobile bottom nav */
        }

        .nav-container {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          width: 100%;
          justify-content: space-around;
        }

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          transition: all 0.2s;
          padding: 0.5rem;
          border-radius: 0.5rem;
        }

        .nav-item:hover {
          color: var(--primary);
          background: rgba(37, 99, 235, 0.05);
        }

        .nav-item.active {
          color: var(--primary);
          font-weight: 600;
        }

        .nav-icon {
          font-size: 1.5rem;
          margin-bottom: 0.2rem;
        }
        
        .desktop-only { display: none; }

        @media (min-width: 768px) {
          .main-nav {
            top: 0;
            bottom: auto;
            border-top: none;
            border-bottom: 1px solid var(--border);
            padding: 0.75rem 2rem;
          }

          .content-wrapper {
            padding-bottom: 0;
            padding-top: 70px; /* Space for desktop top nav */
          }

          .nav-container {
            justify-content: space-between;
            padding: 0;
          }

          .nav-links {
            width: auto;
            gap: 2rem;
            justify-content: flex-end;
          }

          .nav-item {
            flex-direction: row;
            gap: 0.5rem;
            font-size: 0.9rem;
          }

          .nav-icon {
            font-size: 1.1rem;
            margin-bottom: 0;
          }

          .desktop-only { display: block; }
        }
      `}</style>
    </>
  );
}
