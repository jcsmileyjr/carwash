import {render, screen} from '@testing-library/react';
import CTAGroup from '../ctaGroup';

describe('CTAGroup', () => {
    it('renders correctly', () => {
        render(<CTAGroup />);
        expect(screen.getByText('Maintenance Wizard')).toBeInTheDocument();
        expect(screen.getByText('Found Issues Wizard')).toBeInTheDocument();
    });
});