import React from 'react';

interface Props {
    children: React.ReactNode;
}

const FullscreenContainer = ({ children }: Props) => <div className={'fullscreenContainer'}>{children}</div>;

export default FullscreenContainer;
