import React from 'react';

import DocumentTitle from '../document-title/DocumentTitle';

import './page.less';

interface PageProps {
    className?: string;
    title: string;
    id?: string;
    topContentRenderer?: () => React.ReactElement<any>;
}

class Page extends React.Component<PageProps> {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { className, title, id = 'pageMainContent', topContentRenderer, children } = this.props;
        return (
            <DocumentTitle title={title}>
                <div role="main" aria-label={title} id={id}>
                    {topContentRenderer && topContentRenderer()}
                    <div className={`page ${className}`}>{children}</div>
                </div>
            </DocumentTitle>
        );
    }
}

export default Page;
