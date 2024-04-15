import {render, screen } from '@testing-library/react';
import AppHeader from '../appHeader';

describe('AppHeader', () => {
    it('renders correctly', () => {
        render(<AppHeader />);
        expect(screen.getByText('S & F Maintenance Assistant')).toBeInTheDocument();
    });
})