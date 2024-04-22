import {render, screen} from '@testing-library/react';
import CTAGroup from '../ctaGroup';

describe('CTAGroup', () => {
    it('renders correctly', () => {
        render(<CTAGroup />);
        expect(screen.getByText('Record Maintenance')).toBeInTheDocument();
        expect(screen.getByText('Log an Issue')).toBeInTheDocument();
    });
});