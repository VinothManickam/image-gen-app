import { render, screen, fireEvent } from '@testing-library/react';
import PromptForm from '../components/PromptForm';

describe('PromptForm', () => {
  const setImageUrl = jest.fn();
  const setStatus = jest.fn();

  it('renders input and button', () => {
    render(<PromptForm setImageUrl={setImageUrl} setStatus={setStatus} />);
    expect(screen.getByPlaceholderText(/Enter a prompt/)).toBeInTheDocument();
    expect(screen.getByText('Generate Image')).toBeInTheDocument();
  });

  it('updates input value on change', () => {
    render(<PromptForm setImageUrl={setImageUrl} setStatus={setStatus} />);
    const input = screen.getByPlaceholderText(/Enter a prompt/);
    fireEvent.change(input, { target: { value: 'Test prompt' } });
    expect(input).toHaveValue('Test prompt');
  });
});