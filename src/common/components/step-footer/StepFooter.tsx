import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import bemUtils from '../../utils/bemUtils';
import ActionLink from '../action-link/ActionLink';
import AvbrytSoknadDialog from '../dialogs/avbrytSøknadDialog/AvbrytSøknadDialog';
import FortsettSoknadSenereDialog from '../dialogs/fortsettSøknadSenereDialog/FortsettSøknadSenereDialog';
import './stepFooter.less';

interface Props {
    onAvbrytOgFortsettSenere: () => void;
    onAvbrytOgSlett: () => void;
}

function StepFooter({ onAvbrytOgFortsettSenere, onAvbrytOgSlett }: Props) {
    const [visAvbrytDialog, setVisAvbrytDialog] = React.useState<boolean>(false);
    const [visFortsettSenereDialog, setVisFortsettSenereDialog] = React.useState<boolean>(false);

    const bem = bemUtils('stepFooter');
    return (
        <>
            <div className={bem.block}>
                <div className={bem.element('divider')} />
                <div className={bem.element('links')}>
                    <ActionLink onClick={() => setVisFortsettSenereDialog(true)}>
                        <FormattedMessage id="steg.footer.fortsettSenere" />
                    </ActionLink>
                    <span className={bem.element('dot')} aria-hidden={true} />
                    <ActionLink className={bem.element('avbrytSoknadLenke')} onClick={() => setVisAvbrytDialog(true)}>
                        <FormattedMessage id="steg.footer.avbryt" />
                    </ActionLink>
                </div>
            </div>
            <FortsettSoknadSenereDialog
                synlig={visFortsettSenereDialog}
                onFortsettSøknadSenere={onAvbrytOgFortsettSenere}
                onFortsettSøknad={() => setVisFortsettSenereDialog(false)}
            />
            <AvbrytSoknadDialog
                synlig={visAvbrytDialog}
                onAvbrytSøknad={onAvbrytOgSlett}
                onFortsettSøknad={() => setVisAvbrytDialog(false)}
            />
        </>
    );
}

export default StepFooter;
