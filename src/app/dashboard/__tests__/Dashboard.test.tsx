import {render, screen} from '@testing-library/react';
import Dashboard from '../page';

describe('Dashboard', () => {
    it('should render the CTAGroup component in the dashboard', () => {
        render(<Dashboard />);
        const maintenanceWizardButton = screen.getByText('Maintenance Wizard');
        expect(maintenanceWizardButton).toBeInTheDocument();
    });

    it('should render the WhatToDo component in the dashboard', () => {
        render(<Dashboard />);
        const whatToDoButton = screen.getByText('What To Do');
        expect(whatToDoButton).toBeInTheDocument();
    });

    it('should render the Logs component in the dashboard', () => {
        render(<Dashboard />);
        const logsButton = screen.getByText('Maintenance Logs');
        expect(logsButton).toBeInTheDocument();
    });
})