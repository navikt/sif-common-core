import React from 'react';
import Veilederpanel from 'nav-frontend-veilederpanel';
import LegeerklæringIcon from '../legeerklæring-icon/LegeerklæringWithArmIcon';
import './legeerklæringInformationPanel.less';

interface Props {
    text: string;
}

const LegeerklæringInformationPanel = ({ text }: Props) => (
    <Veilederpanel svg={<LegeerklæringIcon />} kompakt={true}>
        {text}
    </Veilederpanel>
);

export default LegeerklæringInformationPanel;
