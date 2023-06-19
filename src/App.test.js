import { render, screen } from '@testing-library/react';
import App from './App';
describe("this has a total test",()=>{
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/sign up/i);
  expect(linkElement).toBeInTheDocument();
});
})