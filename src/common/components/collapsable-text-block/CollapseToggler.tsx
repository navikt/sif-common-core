import React from 'react';
import NavFrontendChevron from 'nav-frontend-chevron';
import bemUtils from '../../utils/bemUtils';
import './collapseToggler.less';

interface Props {
    contentId: string;
    children: React.ReactNode;
    onToggle: () => void;
    isOpen?: boolean;
}

const bem = bemUtils('collapseToggler');

const CollapseToggler = ({ isOpen = false, children, onToggle, contentId }: Props) => {
    return (
        <button
            className={bem.block}
            onClick={(evt: React.MouseEvent<HTMLButtonElement>) => {
                evt.stopPropagation();
                evt.preventDefault();
                onToggle();
            }}
            aria-expanded={isOpen}
            aria-controls={contentId}>
            <span className={bem.element('content')}>
                <span className={bem.element('label')}>{children}</span>
                <span className={bem.element('chevron')}>
                    <NavFrontendChevron type={isOpen ? 'opp' : 'ned'} />
                </span>
            </span>
        </button>
    );
};
export default CollapseToggler;
