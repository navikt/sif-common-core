import React, { ReactNode } from 'react';
import classnames from 'classnames';
import './knappelenke.less';
import Lenke from 'nav-frontend-lenker';
import { Props as LenkeProps } from 'nav-frontend-lenker/lib/lenke';

export type KnappeLenkeType = 'hoved' | 'standard' | 'fare';

interface Props extends LenkeProps {
    href: string;
    children: ReactNode;
    type?: KnappeLenkeType;
    center?: boolean;
}

const Knappelenke = ({ href, type, children, center, ...restProps }: Props) => {
    const knappeLenkeBody = (
        <Lenke href={href}
               className={classnames('knapp', `knapp--${type || 'standard'}`, 'knappelenke')} {...restProps}>
            <span>{children}</span>
        </Lenke>
    );
    return center ? <div className={'knappelenke-wrapper'}>{knappeLenkeBody}</div> : knappeLenkeBody;
};

export default Knappelenke;
