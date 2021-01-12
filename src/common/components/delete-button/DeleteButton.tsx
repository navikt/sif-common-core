import React from 'react';
import bemHelper from '../../utils/bemUtils';
import ActionLink from '../action-link/ActionLink';
import Trashcan from './TrashcanSvg';
import './deleteButton.less';

interface Props {
    ariaLabel: string;
    useTrashcan?: boolean;
    children?: React.ReactNode;
    onClick: (e?: React.SyntheticEvent) => void;
}

const bem = bemHelper('deleteButton');

const DeleteButton = ({ ariaLabel, useTrashcan = true, onClick, children }: Props) => {
    return useTrashcan ? (
        <button
            type="button"
            className={bem.block}
            aria-label={ariaLabel}
            onClick={(e) => {
                e.stopPropagation();
                onClick(e);
            }}>
            <Trashcan size={20} />
        </button>
    ) : (
        <ActionLink onClick={onClick} ariaLabel={ariaLabel}>
            {children || ' Fjern'}
        </ActionLink>
    );
};

export default DeleteButton;
