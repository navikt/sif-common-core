import React from 'react';
import { default as NFCounsellorPanel, VeilederpanelProps } from 'nav-frontend-veilederpanel';
import Counsellor from '../counsellor/Counsellor';
import './counsellorPanel.less';

type Props = Pick<VeilederpanelProps, 'kompakt' | 'type' | 'fargetema'> & { children: React.ReactNode };

const CounsellorPanel = ({ children, kompakt = true, type = 'normal' }: Props) => (
    <NFCounsellorPanel type={type} kompakt={kompakt} svg={<Counsellor theme="light" />}>
        {children}
    </NFCounsellorPanel>
);

export default CounsellorPanel;
