import {render, screen} from '@testing-library/react';
import Logs from '../logs';
import DummyIssues from '../../../lib/dummyIssues.json';

describe('Logs', () => {
    it('renders correctly', () => {
        render(<Logs maintenanceLogs={DummyIssues} />);
        expect(screen.getByText('Maintenance Logs')).toBeInTheDocument();
        expect(screen.getByText('2024-04-14')).toBeInTheDocument();
    });
})