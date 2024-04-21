import {render, screen} from '@testing-library/react';
import BackButton from '../backButton'; 

describe('BackButton', () => {
    it('renders correctly', () => {
        render(<BackButton content="Test" route='/' />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
})