import React from 'react';
import HomePage from './pages/HomePage';
import HomeNursingPage from './pages/HomeNursingPage';
import AdoptionPage from './pages/AdoptionPage';
import CompanionshipPage from './pages/CompanionshipPage';
import AuthPage from './pages/AuthPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState<string>('home');

  // Simple client-side routing
  React.useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentPage('home');
      } else if (path === '/home-nursing') {
        setCurrentPage('home-nursing');
      } else if (path === '/adoption') {
        setCurrentPage('adoption');
      } else if (path === '/companionship') {
        setCurrentPage('companionship');
      } else if (path === '/login' || path === '/signup') {
        setCurrentPage('auth');
      } else if (path === '/payment') {
        setCurrentPage('payment');
      }
    };

    window.addEventListener('popstate', handleNavigation);
    handleNavigation();

    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);

  // Handle link clicks to avoid page reload
  React.useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        e.preventDefault();
        const href = anchor.getAttribute('href') || '/';
        window.history.pushState({}, '', href);
        
        // Trigger navigation handling
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        
        // Scroll to top
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleLinkClick);
    
    return () => {
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  // Render the appropriate page based on the current route
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'home-nursing':
        return <HomeNursingPage />;
      case 'adoption':
        return <AdoptionPage />;
      case 'companionship':
        return <CompanionshipPage />;
      case 'auth':
        return <AuthPage />;
      case 'payment':
        return <PaymentPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;