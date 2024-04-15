import {render, screen} from '@testing-library/react';
import Dashboard from '../page';

describe('Dashboard', () => {
    it('should render the CTAGroup component in the dashboard', () => {
        render(<Dashboard />);
        const maintenanceWizardButton = screen.getByText('Maintenance Wizard');
        expect(maintenanceWizardButton).toBeInTheDocument();
    });
})