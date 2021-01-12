import React from 'react';

import Lenke from 'nav-frontend-lenker';

interface Props {
    className?: string;
    onClick: () => void;
    ariaLabel?: string;
    children: React.ReactNode;
}

const stopClickEvent = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.stopPropagation();
    evt.preventDefault();
};

const ActionLink = ({ onClick, children, className, ariaLabel }: Props) => {
    return (
        <Lenke
            className={className}
            href="#"
            aria-label={ariaLabel}
            onClick={(evt) => {
                stopClickEvent(evt);
                onClick();
            }}>
            {children}
        </Lenke>
    );
};

export default ActionLink;
