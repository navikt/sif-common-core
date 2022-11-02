import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../LoadingSpinner';

describe('<LoadingSpinner />', () => {
    test('renders a <Spinner /> component with the specified size', () => {
        render(<LoadingSpinner type="XXL" />);
        expect(screen.getAllByTestId('spinner-element')).toHaveLength(1);
        expect(screen.getByTestId('spinner-element')).toHaveClass('spinner spinner--xxl');
    });
});
