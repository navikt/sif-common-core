import React from 'react';
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
];

export const getRouteConfig = (pathname: string): RouteConfig | undefined => {
    return routes.find((f) => {
        return isActiveRoute(f.path, pathname);
    });
};

export const isActiveRoute = (path: string, pathname: string): boolean => {
    return pathname.indexOf(path) >= 0;
};
