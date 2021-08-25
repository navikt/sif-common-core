import { AlertStripeFeil } from 'nav-frontend-alertstriper';
import React from 'react';
import Box from '../../common/components/box/Box';
import ContentWithHeader from '../../common/components/content-with-header/ContentWithHeader';
import CounsellorPanel from '../../common/components/counsellor-panel/CounsellorPanel';
import Guide from '../../common/components/guide/Guide';
import Knappelenke from '../../common/components/knappelenke/Knappelenke';
import Page from '../../common/components/page/Page';
import StepBanner from '../../common/components/step-banner/StepBanner';
import VeilederSVG from '../../common/components/veileder-svg/VeilederSVG';

const ComponentsView = () => {
    return (
        <Page title={'Components'}>
            <ContentWithHeader header={'Banner'}>
                <Box margin={'l'} padBottom={'xl'}>
                    <StepBanner text={'Sykdom i familien - SIF-Common'} />
                </Box>
            </ContentWithHeader>
            <AlertStripeFeil title="ABC">
                Innhold som skal gå over flere linjer og som jaja, kan inneholdelangeordsomerutfordrende
            </AlertStripeFeil>

            <CounsellorPanel switchToPlakatOnSmallScreenSize={true}>Whoa Wha</CounsellorPanel>
            <Guide kompakt={true} type="normal" svg={<VeilederSVG />}>
                ABC
            </Guide>

            <ContentWithHeader header={'En lenke som ser ut som en Knapp'}>
                <Box margin={'l'} padBottom={'xl'}>
                    <Knappelenke href={'#'} type={'hoved'}>
                        Knappelenke som returnerer style&apos;et Lenke
                    </Knappelenke>
                </Box>
            </ContentWithHeader>
        </Page>
    );
};

export default ComponentsView;
