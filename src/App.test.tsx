import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra hola mundo', () => {
  render(<App />);
  const linkElement = screen.getByText(/hola, mundo/i);
  expect(linkElement).toBeInTheDocument();
});
