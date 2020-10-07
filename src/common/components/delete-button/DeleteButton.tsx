import React from 'react';
import bemHelper from '../../utils/bemUtils';
import Trashcan from './TrashcanSvg';
import './deleteButton.less';
import ActionLink from '../action-link/ActionLink';

interface DeleteButtonProps {
    ariaLabel: string;
    useTrashcan?: boolean;
    onClick: (e?: React.SyntheticEvent) => void;
}

const bem = bemHelper('deleteButton');

const DeleteButton: React.FunctionComponent<DeleteButtonProps> = ({ ariaLabel, useTrashcan = true, onClick }) => {
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
            Fjern
        </ActionLink>
    );
};

export default DeleteButton;
