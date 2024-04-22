import {render, screen} from '@testing-library/react';
import FoundIssue from '../page';

describe ('FoundIssue', () => {
    it('should render the foundIssue page', () => {
        render(<FoundIssue />);
        const foundIssueHeader = screen.getByText('Log an Issue');
        expect(foundIssueHeader).toBeInTheDocument();
    });
    it('should render the AppHeader component on the foundIssue page', () => {
        render(<FoundIssue />);
        const appTitle = screen.getByText('S & F Maintenance Assistant');
        expect(appTitle).toBeInTheDocument();
    });
})