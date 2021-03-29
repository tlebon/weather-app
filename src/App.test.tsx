import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main window', () => {
	render(<App />);
	const weatherElement = screen.getByText(/Weather To Go/i);
	expect(weatherElement).toBeInTheDocument();
});
