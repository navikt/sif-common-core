import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { default as NFCounsellorPanel, VeilederpanelProps } from 'nav-frontend-veilederpanel';
import bemUtils from '../../utils/bemUtils';
import Counsellor from '../counsellor/Counsellor';
import './counsellorPanel.less';

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
    const isNarrow = switchToPlakatOnSmallScreenSize
        ? useMediaQuery({
              query: `(max-width: ${switchToPlakatWidth}px)`,
          })
        : false;
    return (
        <div
            className={bem.classNames(
                bem.block,
                bem.modifierConditional('narrow', isNarrow),
                bem.modifier('egendefinertBorder')
            )}>
            <NFCounsellorPanel type={isNarrow ? 'plakat' : type} kompakt={kompakt} svg={<Counsellor theme="light" />}>
                {children}
            </NFCounsellorPanel>
        </div>
    );
};

export default CounsellorPanel;
