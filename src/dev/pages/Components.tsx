import React from 'react';
import Box from '../../common/components/box/Box';
import ContentWithHeader from '../../common/components/content-with-header/ContentWithHeader';
import Knappelenke from '../../common/components/knappelenke/Knappelenke';
import Page from '../../common/components/page/Page';
import StepBanner from '../../common/components/step-banner/StepBanner';

const ComponentsView = () => {
    return (
        <Page title={'Components'}>
            <ContentWithHeader header={'Banner'}>
                <Box margin={'l'} padBottom={'xl'}>
                    <StepBanner text={'Sykdom i familien - SIF-Common'} />
                </Box>
            </ContentWithHeader>
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
