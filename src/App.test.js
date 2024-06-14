import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<BookingForm />);
  const linkElement = screen.getByText('Choose time');
  expect(linkElement).toBeInTheDocument();
});
