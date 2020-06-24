import React from 'react';
import { useAppStatus, Status, StatusMessage } from '@navikt/appstatus-react';
import LoadWrapper from '../load-wrapper/LoadWrapper';

interface Props {
    applicationKey: string;
    sanityConfig: {
        projectId: string;
        dataset: string;
        token?: string;
    };
    contentRenderer: () => React.ReactNode;
    unavailableContentRenderer?: () => React.ReactNode;
}

const AppStatusWrapper = ({
    applicationKey,
    contentRenderer,
    sanityConfig,
    unavailableContentRenderer: disabledContentRenderer,
}: Props) => {
    const { status, message, isLoading } = useAppStatus(applicationKey, sanityConfig);

    const renderContent = () => {
        if (status === Status.unavailable && disabledContentRenderer !== undefined) {
            return disabledContentRenderer();
        }
        return contentRenderer();
    };
    return (
        <LoadWrapper
            isLoading={isLoading}
            contentRenderer={() => (
                <>
                    {message !== undefined && (
                        <div style={{ maxWidth: '704px', margin: '1rem auto' }}>
                            <StatusMessage message={message} />
                        </div>
                    )}
                    {renderContent()}
                </>
            )}
        />
    );
};

export default AppStatusWrapper;
