import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HelloWorld from '../components/HelloWorld'

/**
 * Test suite for HelloWorld component
 * Tests the basic Hello World display functionality (US-001)
 */
describe('HelloWorld Component', () => {
  it('should render Hello World greeting', () => {
    render(<HelloWorld />)
    
    const helloWorldElement = screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()
  })

  it('should have appropriate semantic structure for accessibility', () => {
    render(<HelloWorld />)
    
    const heading = screen.getByRole('heading', { name: 'Hello World' })
    expect(heading).toBeInTheDocument()
  })

  it('should have a data-testid for testing purposes', () => {
    render(<HelloWorld />)
    
    const component = screen.getByTestId('hello-world')
    expect(component).toBeInTheDocument()
  })
})
