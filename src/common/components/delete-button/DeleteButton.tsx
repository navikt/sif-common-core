import * as React from 'react';
import bemHelper from '../../utils/bemUtils';
import Trashcan from './TrashcanSvg';
import './deleteButton.less';

interface DeleteButtonProps {
    ariaLabel: string;
    onClick: (e: React.SyntheticEvent) => void;
}

const bem = bemHelper('deleteButton');

const DeleteButton: React.FunctionComponent<DeleteButtonProps> = ({ ariaLabel, onClick }) => (
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
);

export default DeleteButton;
