import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

    it('should render an input field to add the date on the foundIssue page', async () => {
        render(<FoundIssue />);
        const user = userEvent.setup();
        const dateInput = await screen.getByTestId('date');
        expect(dateInput).toBeInTheDocument();

        await user.click(dateInput);
        await user.clear(dateInput);
        await user.type(dateInput, '2024-02-15');
        expect(dateInput).toHaveValue('2024-02-15');
    });

    it('should display the textarea for content on the foundIssue page', async () => {
        render(<FoundIssue />);
        const user = userEvent.setup();
        const contentInput = await screen.getByTestId('content');
        expect(contentInput).toBeInTheDocument(); 

        await user.clear(contentInput);
        await user.type(contentInput, 'test content');
        expect(contentInput).toHaveValue('test content');
    });

    it('should render the Save link on the foundIssue page', () => {
        render(<FoundIssue />);
        const saveLink = screen.getByRole('link', { name: "Save" });
        expect(saveLink).toBeInTheDocument();
    });

    it('should render the Go Back link on the foundIssue page', () => {
        render(<FoundIssue />);
        const goBackLink = screen.getByRole('link', { name: "Don't Save, Go Back" });
        expect(goBackLink).toHaveAttribute('href', '/');
    })
})