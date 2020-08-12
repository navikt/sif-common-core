import React, { ReactNode } from 'react';
import classnames from 'classnames';
import './knappelenke.less';

export type KnappeLenkeType = 'hoved' | 'standard' | 'fare';

interface Props {
    href: string;
    children: ReactNode;
    type?: KnappeLenkeType;
    center?: boolean;
}

const Knappelenke = ({ href, type, children, center }: Props) => {
    const knappeLenkeBody = (
        <>
            <a href={href} className={classnames('knapp', `knapp--${type || 'standard'}`, 'knappelenke')}>
                <span>{children}</span>
            </a>
        </>
    );
    return center ? <div className={'knappelenke-wrapper'}>{knappeLenkeBody}</div> : knappeLenkeBody;
};

export default Knappelenke;
