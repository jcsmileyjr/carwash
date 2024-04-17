import {render, screen} from '@testing-library/react';
import MaintenanceToggle from '../maintenanceToggle';
import WhatToDoIssue from '../../../lib/whatToDoIssue.json';

const expandIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
expandIssue.pickTrash.checked = true;

describe('MaintenanceToggle', () => {
    it('renders correctly', () => {
        render(<MaintenanceToggle issue={expandIssue} />);
        expect(screen.getByText('Pick up trash')).toBeInTheDocument();
    });
})