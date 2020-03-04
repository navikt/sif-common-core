import * as React from 'react';
import Modal, { ModalProps } from '../../modal/Modal';
import './infoDialog.less';

const InfoDialog: React.FunctionComponent<ModalProps> = ({ children, ...props }) => (
    <Modal className={`infoDialog ${props.className}`} {...props}>
        {children}
    </Modal>
);

export default InfoDialog;
