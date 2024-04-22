import {render, screen} from '@testing-library/react';
import Dashboard from '../dashboard';

xdescribe('Dashboard', () => {
    xit('should render the CTAGroup component in the dashboard', () => {
        render(<Dashboard newIssue='' />);
        const maintenanceWizardButton = screen.getByText('Record Maintenance');
        expect(maintenanceWizardButton).toBeInTheDocument();
    });

    xit('should render the WhatToDo component in the dashboard', () => {
        render(<Dashboard newIssue='' />);
        const whatToDoButton = screen.getByText('What To Do');
        expect(whatToDoButton).toBeInTheDocument();
    });

    xit('should render the Logs component in the dashboard', () => {
        render(<Dashboard newIssue='' />);
        const logsButton = screen.getByText('Maintenance Logs');
        expect(logsButton).toBeInTheDocument();
    });
})