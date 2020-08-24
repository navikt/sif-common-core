import * as React from 'react';
import FormBlock from '../../common/components/form-block/FormBlock';
import PictureScanningGuide from '../../common/components/picture-scanning-guide/PictureScanningGuide';

const PictureScanningGuideView: React.FC = () => {
    return (
        <div>
            <FormBlock>
                <PictureScanningGuide />
            </FormBlock>
        </div>
    );
};

export default PictureScanningGuideView;
