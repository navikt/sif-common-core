import React from 'react';
import { default as NFCounsellorPanel } from 'nav-frontend-veilederpanel';
import bemUtils from '../../utils/bemUtils';
import InformationIcon from '../information-icon/InformationIcon';
import './informationPoster.less';

interface Props {
    children: React.ReactNode;
}
const bem = bemUtils('informationPoster');

const InformationPoster = ({ children }: Props) => (
    <div className={bem.block}>
        <NFCounsellorPanel svg={<InformationIcon />} type="plakat" kompakt={true}>
            {children}
        </NFCounsellorPanel>
    </div>
);

export default InformationPoster;
