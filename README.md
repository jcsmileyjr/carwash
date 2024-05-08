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
- Nextjs - Frontend JavaScript framework
- TailwindCSS - CSS library
-  Jest - Testing framework
- Netlify - Web service to host the app
- Sanity.io - Backend service to 

## Author
- Website - [JC Smiley](https://www.jcsmileyjr.com)
- Twitter - [@JCSmiley4](https://twitter.com/JCSmiley4)
- LinkedIn - [jcsmileyjr](https://www.linkedin.com/in/jcsmileyjr/)