# S & F Maintenance 

A maintenance list and log for a family owned car wash business. 

[Click to view: S & F Maintenance Assistant](https://sfmaintenance.netlify.app/)

## Features
1. Provide a menu of potential maintenance tasks that are selected via checkboxes.
2. Logs completed actions.
3. Provides a platform for documenting any issues discovered at the car wash.

### Testing
Component testing with Jest. Example below:
```
    it('should display the Pick Up trash checkbox and be able to check it on the maintenance page', async () => {
        render(<Maintenance />);
        const user = userEvent.setup();
        const checkbox = screen.getByRole('checkbox', { name: 'Pick up trash' });
        expect(checkbox).toBeInTheDocument();

        await user.click(checkbox);
        expect(checkbox).toBeChecked();
    })
```

## Built with
- **Next.js** is a frontend JavaScript framework used for displaying the user interface. 
- **TailwindCSS** is a CSS library utilized to quickly style the application. 
- **Jest** serves as a component testing framework. 
- **Netlify** is the hosting platform employed for hosting the application.
- **Sanity.io** is a backend as a service platform used for data retrieval and storage.

## Author
- Website - [JC Smiley](https://www.jcsmileyjr.com)
- Twitter - [@JCSmiley4](https://twitter.com/JCSmiley4)
- LinkedIn - [jcsmileyjr](https://www.linkedin.com/in/jcsmileyjr/)