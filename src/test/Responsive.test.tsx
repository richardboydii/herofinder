import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach } from 'vitest'
import App from '../App'

/**
 * Test suite for responsive design functionality
 * Tests that the application works properly across different device sizes (US-002, US-003)
 */
describe('Responsive Design Tests', () => {
  beforeEach(() => {
    // Reset viewport before each test
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    })
    Object.defineProperty(window, 'innerHeight', {
      writable: true,
      configurable: true,
      value: 768,
    })
  })

  it('should render properly on desktop viewport (1024px)', () => {
    window.innerWidth = 1024
    render(<App />)
    
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()
  })

  it('should render properly on tablet viewport (768px)', () => {
    window.innerWidth = 768
    render(<App />)
    
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()
  })

  it('should render properly on mobile viewport (375px)', () => {
    window.innerWidth = 375
    render(<App />)
    
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()
  })

  it('should have CSS classes for responsive styling', () => {
    render(<App />)
    
    const appContainer = screen.getByTestId('app-container')
    expect(appContainer).toHaveClass('app-container')
  })
})
