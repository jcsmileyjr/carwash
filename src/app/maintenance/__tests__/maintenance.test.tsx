import {render, screen} from '@testing-library/react';
import Maintenance from '../page';

describe('Maintenance', () => {
    it('should render the maintenance page', () => {
        render(<Maintenance />);
        const maintenanceHeader = screen.getByText('Maintenance Wizard');
        expect(maintenanceHeader).toBeInTheDocument();
    });
    it('should render the AppHeader component on the maintenance page', () => {
        render(<Maintenance />);
        const appTitle = screen.getByText('S & F Maintenance Assistant');
        expect(appTitle).toBeInTheDocument();
    });
})