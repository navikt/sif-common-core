import React from 'react';
import bemUtils from '../../utils/bemUtils';
import HelperTextIcon from '../helper-text-icon/HelperTextIcon';
import './helperTextButton.less';

const bem = bemUtils('helperTextButton');

interface Props {
    onClick: () => void;
    ariaLabel: string;
    ariaPressed: boolean;
}

const HelperTextButton = ({ onClick, ariaLabel, ariaPressed }: Props) => (
    <button
        type="button"
        className={bem.block}
        onClick={onClick}
        aria-label={ariaLabel}
        title={ariaLabel}
        aria-pressed={ariaPressed}>
        <HelperTextIcon />
    </button>
);

export default HelperTextButton;
