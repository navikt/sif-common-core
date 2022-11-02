import React from 'react';
import { render, screen } from '@testing-library/react';

import Box from '../Box';

describe('<Box />', () => {
    test('renders a <div> with correct classname specified from props', () => {
        // let box = shallow(<Box margin="s">s</Box>);
        render(<Box margin="s">s</Box>);
        expect(screen.getByText('s')).toHaveClass('box--s');

        render(<Box margin="m">m</Box>);
        expect(screen.getByText('m')).toHaveClass('box--m');

        render(<Box margin="l">l</Box>);
        expect(screen.getByText('l')).toHaveClass('box--l');
    });

    it('renders children in a <div>', () => {
        const children = <span>Children</span>;
        const { container } = render(<Box margin="s">{children}</Box>);
        expect(container.firstChild).toHaveTextContent('Children');
    });
});
