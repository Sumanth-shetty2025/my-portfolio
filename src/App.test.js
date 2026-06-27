import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders portfolio hero title', () => {
  render(<App />);
  const linkElement = screen.getByText(/AI\/ML Developer & Data Science Enthusiast/i);
  expect(linkElement).toBeInTheDocument();
});
