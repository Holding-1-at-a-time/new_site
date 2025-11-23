import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import OptimizedImage from '../src/components/ui/OptimizedImage';

// Mock Next.js Image component
vi.mock('next/image', () => ({
  default: (props: any) => {
    return <img {...props} data-testid="next-image" />;
  },
}));

describe('OptimizedImage Component', () => {
  const mockProps = {
    src: '/test-image.jpg',
    alt: 'Test image',
    caption: 'Test caption',
    localSEO: {
      city: 'San Antonio',
      state: 'TX',
      serviceType: 'Paint Correction',
      keywords: ['professional', 'car detailing']
    }
  };

  it('renders with proper SEO alt text', () => {
    render(<OptimizedImage {...mockProps} />);
    
    const image = screen.getByTestId('next-image');
    expect(image).toHaveAttribute('alt', expect.stringContaining('San Antonio'));
    expect(image).toHaveAttribute('alt', expect.stringContaining('Paint Correction'));
  });

  it('displays image caption', () => {
    render(<OptimizedImage {...mockProps} />);
    
    expect(screen.getByText('Test caption')).toBeInTheDocument();
  });

  it('applies local SEO context in caption', () => {
    render(<OptimizedImage {...mockProps} />);
    
    expect(screen.getByText(/Professional paint correction services in San Antonio, TX/)).toBeInTheDocument();
  });
});