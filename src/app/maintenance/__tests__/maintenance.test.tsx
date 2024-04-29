import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Maintenance from '../page';

describe('Maintenance', () => {
    it('should render the maintenance page', () => {
        render(<Maintenance />);
        const maintenanceHeader = screen.getByText('Record Maintenance');
        expect(maintenanceHeader).toBeInTheDocument();
    });
    
    it('should render the AppHeader component on the maintenance page', () => {
        render(<Maintenance />);
        const appTitle = screen.getByText('S & F Maintenance Assistant');
        expect(appTitle).toBeInTheDocument();
    });

    it('should render an input field to add the date on the maintenance page', async () => {
        render(<Maintenance />);
        const user = userEvent.setup();
        const dateInput = await screen.getByTestId('date');
        expect(dateInput).toBeInTheDocument();

        await user.click(dateInput);
        await user.clear(dateInput);
        await user.type(dateInput, '2024-02-15');
        expect(dateInput).toHaveValue('2024-02-15');
    });

    it('should display the Pick Up trash checkbox and be able to check it on the maintenance page', async () => {
        render(<Maintenance />);
        // expect(screen.getByText('Pick up trash')).toBeInTheDocument();
        const user = userEvent.setup();
        const checkbox = screen.getByRole('checkbox', { name: 'Pick up trash' });
        expect(checkbox).toBeInTheDocument();

        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    })

    it('should render the Go Back link on the maintenance page', () => {
        render(<Maintenance />); 
        const goBackLink = screen.getByRole('link', { name: "Don't Save, Go Back" });
        expect(goBackLink).toHaveAttribute('href', '/');
    })

})