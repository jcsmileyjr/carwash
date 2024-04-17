import {render, screen} from '@testing-library/react';
import Issues from '../issues';
import WhatToDoIssue from '../../../lib/whatToDoIssue.json';

const expandIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
expandIssue.pickTrash.checked = true;

describe('Issues', () => {
    it('renders correctly', () => {
        render(<Issues issue={expandIssue} imageType="lightbulb" />);
        expect(screen.getByText('Pick up trash')).toBeInTheDocument();
    });
})