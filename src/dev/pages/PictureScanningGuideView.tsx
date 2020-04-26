import * as React from 'react';
import FormBlock from '../../common/components/form-block/FormBlock';
import HelperTextPanel from '../../common/components/helper-text-panel/HelperTextPanel';
import PictureScanningGuide from '../../common/components/picture-scanning-guide/PictureScanningGuide';

const PictureScanningGuideView: React.FC = () => {
    return (
        <div>
            Generelt Dokument
            <FormBlock>
                <HelperTextPanel>
                    <PictureScanningGuide type='dokument'/>
                </HelperTextPanel>
            </FormBlock>

            <br/>
            Legeerklæring
            <FormBlock>
                <HelperTextPanel>
                    <PictureScanningGuide />
                </HelperTextPanel>
            </FormBlock>
        </div>
    );
};

export default PictureScanningGuideView;