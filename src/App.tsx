import React from 'react';
import HelloWorld from './components/HelloWorld';
import './App.css';

/**
 * Main App component that serves as the root of the application.
 * 
 * @returns The main application component with HelloWorld
 * 
 * This component implements:
 * - US-001: Basic Hello World Display (by rendering HelloWorld component)
 * - US-002: Responsive Design (through CSS and proper HTML structure)
 * - US-003: Fast Loading (lightweight component structure)
 */
const App: React.FC = () => {
  return (
    <div className="app-container" data-testid="app-container">
      <main role="main" className="main-content">
        <HelloWorld />
      </main>
    </div>
  );
};

export default App;
