import {render, screen} from '@testing-library/react';
import PageTitle from '../pageTitle';

describe('PageTitle', () => {
    it('renders correctly', () => {
        render(<PageTitle content="Test" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
})