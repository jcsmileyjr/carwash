import {render, screen} from '@testing-library/react';
import WhatToDo from '../whatToDo';

describe('WhatToDo', () => {
    it('renders correctly', () => {
        render(<WhatToDo />);
        expect(screen.getByText('What To Do')).toBeInTheDocument();
        expect(screen.getByText('Pick up trash')).toBeInTheDocument();
    });
})