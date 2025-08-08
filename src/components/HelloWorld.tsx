import React from 'react';
import './HelloWorld.css';

/**
 * HelloWorld component that displays a simple greeting message.
 * 
 * @returns A heading element containing "Hello World" text
 * 
 * This component implements US-001: Basic Hello World Display
 * - Displays "Hello World" greeting on the page
 * - Uses semantic HTML for accessibility
 * - Includes proper data attributes for testing
 */
const HelloWorld: React.FC = () => {
  return (
    <div className="hello-world-container" data-testid="hello-world">
      <h1 className="hello-world-heading">Hello World</h1>
    </div>
  );
};

export default HelloWorld;
