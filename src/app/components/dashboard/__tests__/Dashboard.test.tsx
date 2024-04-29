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
        const whatToDoHeader = screen.getByText('What To Do');
        expect(whatToDoHeader).toBeInTheDocument();
    });

    xit('should render the Logs component in the dashboard', () => {
        render(<Dashboard newIssue='' />);
        const logsHeader = screen.getByText('Maintenance Logs');
        expect(logsHeader).toBeInTheDocument();
    });
})