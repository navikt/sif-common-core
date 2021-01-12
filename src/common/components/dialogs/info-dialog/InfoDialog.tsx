import React from 'react';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal, { ModalProps } from '../../modal/Modal';
import './infoDialog.less';

type Props = { children: React.ReactNode } & ModalProps;

const InfoDialog = ({ children, ...props }: Props) => (
    <Modal className={`infoDialog ${props.className}`} {...props}>
        <Normaltekst tag="div">{children}</Normaltekst>
    </Modal>
);

export default InfoDialog;
