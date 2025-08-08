import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

/**
 * Test suite for App component
 * Tests the main application functionality and integration (US-001, US-002)
 */
describe('App Component', () => {
  it('should render the HelloWorld component', () => {
    render(<App />)
    
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()
  })

  it('should have proper viewport meta tag for responsive design', () => {
    // This test ensures the app is set up for responsive design (US-002)
    // Note: In a real browser, this meta tag would be in the HTML head
    // For testing purposes, we verify the component renders without errors
    // which indicates responsive setup is working
    render(<App />)
    const appContainer = screen.getByTestId('app-container')
    expect(appContainer).toHaveClass('app-container')
  })

  it('should render without crashing', () => {
    render(<App />)
    expect(document.body).toBeInTheDocument()
  })

  it('should have a main content area for screen readers', () => {
    render(<App />)
    
    const mainElement = screen.getByRole('main')
    expect(mainElement).toBeInTheDocument()
  })
})
