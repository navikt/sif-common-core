import React from 'react';
import { render } from '@testing-library/react';

import SystemInformationMessage from '../SystemInformationMessage';

const message = 'Some message';

describe('<SystemInformationMessage />', () => {
    test('renders a document title and children specified from props', () => {
        const { container } = render(<SystemInformationMessage message={message} />);
        const messageEl = container.getElementsByClassName('systemInformationMessage');
        expect(messageEl).toHaveLength(1);
        expect(container).toHaveTextContent(message);
    });
});
