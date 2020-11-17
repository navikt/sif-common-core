import React from 'react';

import DocumentTitle from '../document-title/DocumentTitle';

import './page.less';

interface PageProps {
    className?: string;
    title: string;
    mainAriaLabel?: string;
    id?: string;
    topContentRenderer?: () => React.ReactElement<any>;
}

class Page extends React.Component<PageProps> {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { className, title, mainAriaLabel, id = 'pageMainContent', topContentRenderer, children } = this.props;
        return (
            <DocumentTitle title={title}>
                <div role={mainAriaLabel ? 'main' : undefined} aria-label={mainAriaLabel} id={id}>
                    {topContentRenderer && topContentRenderer()}
                    <div className={`page ${className}`}>{children}</div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Page;
