import React from 'react';
import { Route } from 'react-router-dom';
import FullscreenContainer from '../../fullscreenContainer/FullscreenContainer';
import MessagesPreview from './MessagesPreview';
import { MessageFileFormat } from '../devIntlUtils';

interface Props {
    messages: MessageFileFormat;
}

const MessagesRoute = ({ messages }: Props) => (
    <Route path="*/dev/tekster">
        <FullscreenContainer>
            <MessagesPreview
                title="Søknad pleiepenger"
                showMissingTextSummary={false}
                showExplanation={false}
                messages={messages}
            />
        </FullscreenContainer>
    </Route>
);

export default MessagesRoute;
