import React, { createContext, useContext, useState, useEffect } from 'react';

type ViewMode = 'mobile' | 'pc';

interface ViewModeContextType {
  viewMode: ViewMode;
  toggleViewMode: () => void;
  setViewMode: (mode: ViewMode) => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>('mobile');

  useEffect(() => {
    // Always default to mobile on fresh load
    setViewModeState('mobile');
    applyViewMode('mobile');
  }, []);

  const applyViewMode = (mode: ViewMode) => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      if (mode === 'pc') {
        viewport.setAttribute('content', 'width=1200, initial-scale=0.3, maximum-scale=2.0, user-scalable=yes');
        document.documentElement.style.minWidth = '1200px';
        document.documentElement.style.overflowX = 'auto';
      } else {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes');
        document.documentElement.style.minWidth = '';
        document.documentElement.style.overflowX = '';
      }
    }
  };

  const setViewMode = (mode: ViewMode) => {
    setViewModeState(mode);
    applyViewMode(mode);
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'mobile' ? 'pc' : 'mobile');
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, toggleViewMode, setViewMode }}>
      <div 
        id="view-mode-wrapper"
        className={viewMode === 'pc' ? 'min-w-[1200px] w-full' : 'w-full'}
      >
        {children}
      </div>
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (context === undefined) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }
  return context;
}
