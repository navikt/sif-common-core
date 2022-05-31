import React from 'react';
import AppStatusWrapper from '../../common/components/app-status-wrapper/AppStatusWrapper';
import Page from '../../common/components/page/Page';

const ComponentsView = () => {
    return (
        <Page title={'Components'}>
            <AppStatusWrapper
                applicationKey={'pleiepengesoknad'}
                sanityConfig={{ projectId: 'ryujtq87', dataset: 'staging' }}
                contentRenderer={() => <>All good</>}
                unavailableContentRenderer={() => <>Not available</>}
            />
        </Page>
    );
};

export default ComponentsView;
