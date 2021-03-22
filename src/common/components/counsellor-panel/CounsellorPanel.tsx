import React from 'react';
import { default as NFCounsellorPanel, VeilederpanelProps } from 'nav-frontend-veilederpanel';
import Counsellor from '../counsellor/Counsellor';
import './counsellorPanel.less';
import useMedia from 'use-media';
import bemUtils from '../../utils/bemUtils';

type Props = Pick<VeilederpanelProps, 'kompakt' | 'type' | 'fargetema'> & {
    children: React.ReactNode;
    /** Endrer til plakat visning dersom under switchToPlakatWidth */
    switchToPlakatOnSmallScreenSize?: boolean;
    /** Default 500 */
    switchToPlakatWidth?: number;
};

const bem = bemUtils('counsellorPanel');

const CounsellorPanel = ({
    children,
    kompakt = true,
    type = 'normal',
    switchToPlakatOnSmallScreenSize,
    switchToPlakatWidth = 450,
}: Props) => {
    const isNarrow = switchToPlakatOnSmallScreenSize ? useMedia({ maxWidth: `${switchToPlakatWidth}px` }) : false;
    return (
        <div className={bem.classNames(bem.block, bem.modifierConditional('narrow', isNarrow))}>
            <NFCounsellorPanel type={isNarrow ? 'plakat' : type} kompakt={kompakt} svg={<Counsellor theme="light" />}>
                {children}
            </NFCounsellorPanel>
        </div>
    );
};

export default CounsellorPanel;
