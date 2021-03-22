import React from 'react';
import { default as NFCounsellorPanel, VeilederpanelProps } from 'nav-frontend-veilederpanel';
import Counsellor from '../counsellor/Counsellor';
import './counsellorPanel.less';
import useMedia from 'use-media';

type Props = Pick<VeilederpanelProps, 'kompakt' | 'type' | 'fargetema'> & {
    children: React.ReactNode;
    /** Endrer til plakat visning dersom under switchToPlakatWidth */
    switchToPlakatOnSmallScreenSize?: boolean;
    /** Default 500 */
    switchToPlakatWidth?: number;
};

const CounsellorPanel = ({
    children,
    kompakt = true,
    type = 'normal',
    switchToPlakatOnSmallScreenSize,
    switchToPlakatWidth = 450,
}: Props) => {
    const isNarrow = switchToPlakatOnSmallScreenSize ? useMedia({ maxWidth: `${switchToPlakatWidth}px` }) : false;
    return (
        <NFCounsellorPanel type={isNarrow ? 'plakat' : type} kompakt={kompakt} svg={<Counsellor theme="light" />}>
            {children}
        </NFCounsellorPanel>
    );
};

export default CounsellorPanel;
