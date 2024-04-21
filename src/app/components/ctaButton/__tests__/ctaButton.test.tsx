import {render, screen} from '@testing-library/react'
import CTAButton from '../ctaButton';

describe('CTAButton', () => {
    it('renders correctly', () => {
        render(<CTAButton content="Test" route="maintenance" />);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
});