import {render, screen} from '@testing-library/react';
import Dashboard from '../page';

describe('Dashboard', () => {
    it('should render the dashboard', () => {
        render(<Dashboard />);
        const dashboardElement = screen.getByText('Dashboard');
        expect(dashboardElement).toBeInTheDocument();
    });
})