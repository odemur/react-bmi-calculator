import { render, screen } from '@testing-library/react';
import App from './App';

test('Render React BMI Calculator', () => {
  render(<App />);
  const linkElement = screen.getByText(/BMI Calculator/i);
  expect(linkElement).toBeInTheDocument();
});
