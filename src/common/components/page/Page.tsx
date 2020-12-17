import React from 'react';
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
}

class Page extends React.Component<PageProps> {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const intl = useIntl();
        const {
            id = 'pageMainContent',
            className,
            title,
            setMainRole = true,
            ariaLabel,
            topContentRenderer,
            children,
        } = this.props;

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
    }
}

export default Page;
