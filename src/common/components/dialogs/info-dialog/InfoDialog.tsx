import { Normaltekst } from 'nav-frontend-typografi';
import React from 'react';
import Modal, { ModalProps } from '../../modal/Modal';
import './infoDialog.less';

const InfoDialog: React.FunctionComponent<ModalProps> = ({ children, ...props }) => (
    <Modal className={`infoDialog ${props.className}`} {...props}>
        <Normaltekst>{children}</Normaltekst>
    </Modal>
);

export default InfoDialog;
