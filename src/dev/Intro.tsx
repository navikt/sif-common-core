import React from 'react';
import PageIntro from './components/page-intro/PageIntro';
import ItemList from '../common/components/item-list/ItemList';
import CounsellorPanel from '../common/components/counsellor-panel/CounsellorPanel';
import FrontPageBanner from '../common/components/front-page-banner/FrontPageBanner';
import Kvittering from '../common/components/kvittering/Kvittering';
interface Item {
    name: string;
    id: string;
}

const items: Item[] = [{ name: 'ABC', id: '1' }];

const Intro = () => (
    <>
        <FrontPageBanner
            bannerSize="large"
            counsellorWithSpeechBubbleProps={{
                strongText: 'Hei',
                normalText: 'Jeg vil hjelpe deg med å fylle ut meldingen, slik at du kan dele omsorgsdager',
            }}
        />

        <PageIntro title="SIF-common guide">
            Dette er starten på en enkel guide til komponenter og konsepter i SIF-common, og som kan brukes i
            søknadsapplikasjonene til kapittel 9. Vi legger det vi trenger, etter hvert som vi ser at vi trenger det :)
        </PageIntro>

        <Kvittering
            tittel="Hey"
            liste={{
                tittel: 'Whoa',
                punkter: [
                    <>
                        Dette er starten på en enkel guide til komponenter og konsepter i SIF-common, og som kan brukes
                        i søknadsapplikasjonene til kapittel 9. Vi legger det vi trenger, etter hvert som vi ser at vi
                        trenger det :)
                    </>,
                ],
            }}></Kvittering>
        <ItemList<Item>
            items={items}
            getItemId={(item) => item.id}
            getItemTitle={(item) => item.name}
            onDelete={() => null}
        />
        <CounsellorPanel switchToPlakatOnSmallScreenSize={true} switchToPlakatWidth={1200}>
            Dette er starten på en enkel guide til komponenter og konsepter i SIF-common, og som kan brukes i
            søknadsapplikasjo
        </CounsellorPanel>
    </>
);

export default Intro;
