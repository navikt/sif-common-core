import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import intlHelper from '../../utils/intlUtils';

import DocumentTitle from '../document-title/DocumentTitle';

import './page.less';

interface PageProps {
    className?: string;
    title: string;
    id?: string;
    setMainRole?: boolean;
    ariaLabel?: string;
    topContentRenderer?: () => React.ReactElement<any>;
    children: React.ReactNode;
}

const Page = ({
    id = 'pageMainContent',
    className,
    title,
    setMainRole = true,
    ariaLabel,
    topContentRenderer,
    children,
}: PageProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const intl = useIntl();
    const role = setMainRole === true || ariaLabel !== undefined ? 'main' : undefined;
    const ariaLabelToUse =
        ariaLabel || setMainRole === true ? intlHelper(intl, 'page.defaultMainRoleLabel') : undefined;

    return (
        <DocumentTitle title={title}>
            <div role={role} aria-label={ariaLabelToUse} id={id}>
                {topContentRenderer && topContentRenderer()}
                <div className={`page ${className}`}>{children}</div>
            </div>
        </DocumentTitle>
    );
};

export default Page;
