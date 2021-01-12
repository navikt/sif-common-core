import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import Undertittel from 'nav-frontend-typografi/lib/undertittel';

import intlHelper from '../../../utils/intlUtils';
import BekreftDialog from '../bekreft-dialog/BekreftDialog';

export interface Props {
    synlig: boolean;
    onFortsettSøknadSenere: () => void;
    onFortsettSøknad: () => void;
}

const FortsettSøknadSenereDialog = (props: Props) => {
    const intl = useIntl();
    const { synlig, onFortsettSøknad, onFortsettSøknadSenere } = props;
    return (
        <BekreftDialog
            isOpen={synlig}
            bekreftLabel={intlHelper(intl, 'fortsettSøknadSenereDialog.avbrytSøknadLabel')}
            avbrytLabel={intlHelper(intl, 'fortsettSøknadSenereDialog.fortsettSøknadLabel')}
            closeButton={false}
            contentLabel={intlHelper(intl, 'fortsettSøknadSenereDialog.tittel')}
            onBekreft={onFortsettSøknadSenere}
            størrelse="30"
            onRequestClose={onFortsettSøknad}>
            <Undertittel tag="h1">
                <FormattedMessage id="fortsettSøknadSenereDialog.tittel" />
            </Undertittel>
            <p>
                <FormattedMessage id="fortsettSøknadSenereDialog.intro" />
            </p>
            <p>
                <FormattedMessage id="fortsettSøknadSenereDialog.spørsmål" />
            </p>
        </BekreftDialog>
    );
};
export default FortsettSøknadSenereDialog;
