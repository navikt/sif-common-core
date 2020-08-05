import React from 'react';
import MessagesPreview from '../../common/dev-utils/intl/messages-preview/MessagesPreview';
import { allCommonMessages } from '../../common/i18n/allCommonMessages';
import Intro from '../Intro';
import PictureScanningGuideView from '../pages/PictureScanningGuideView';

export interface RouteConfig {
    path: string;
    title: string;
    renderContent: () => React.ReactNode;
}

export const routes: RouteConfig[] = [
    {
        path: 'frontpage',
        title: 'Forside',
        renderContent: () => <Intro />,
    },
    {
        path: 'pictureScanningGuide',
        title: 'Picture Scanning Guide',
        renderContent: () => <PictureScanningGuideView />,
    },
    {
        path: 'messages',
        title: 'Tekster',
        renderContent: () => (
            <MessagesPreview messages={allCommonMessages} title="Common texts" showExplanation={false} />
        ),
    },
];

export const getRouteConfig = (pathname: string): RouteConfig | undefined => {
    return routes.find((f) => {
        return isActiveRoute(f.path, pathname);
    });
};

export const isActiveRoute = (path: string, pathname: string): boolean => {
    return pathname.indexOf(path) >= 0;
};
