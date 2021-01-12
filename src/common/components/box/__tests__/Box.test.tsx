import React from 'react';

import { shallow } from 'enzyme';

import Box from '../Box';

describe('<Box />', () => {
    it('renders a <div> with correct classname specified from props', () => {
        let box = shallow(<Box margin="s">s</Box>);
        expect(box.find('div.box').hasClass('box--s')).toBe(true);
        box = shallow(<Box margin="m">m</Box>);
        expect(box.find('div.box').hasClass('box--m')).toBe(true);
        box = shallow(<Box margin="l">l</Box>);
        expect(box.find('div.box').hasClass('box--l')).toBe(true);
    });

    it('renders children in a <div>', () => {
        const children = <span>Children</span>;
        const box = shallow(<Box margin="s">{children}</Box>);
        expect(box.find('div.box').contains(children)).toBe(true);
    });
});
