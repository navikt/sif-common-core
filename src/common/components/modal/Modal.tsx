import React from 'react';
import { default as NFModal } from 'nav-frontend-modal';
import bemUtils from '../../utils/bemUtils';
import './modal.less';

export interface ModalProps {
    className?: string;
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel: string;
    children: React.ReactNode;
}

const bem = bemUtils('modal');
const Modal = ({ isOpen, onRequestClose, contentLabel, className, children }: ModalProps) => (
    <NFModal
        className={`${bem.block} ${className}`}
        isOpen={isOpen}
        contentLabel={contentLabel}
        onRequestClose={onRequestClose}>
        <article className={bem.element('content')}>{children}</article>
    </NFModal>
);

export default Modal;
