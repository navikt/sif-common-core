import React from 'react';
import PageIntro from './components/page-intro/PageIntro';
import ItemList from '../common/components/item-list/ItemList';

interface Props {}

interface Item {
    name: string;
    id: string;
}

const items: Item[] = [{ name: 'ABC', id: '1' }];

const Intro: React.FunctionComponent<Props> = (props) => (
    <>
        <PageIntro title="SIF-common guide">
            Dette er starten på en enkel guide til komponenter og konsepter i SIF-common, og som kan brukes i
            søknadsapplikasjonene til kapittel 9. Vi legger det vi trenger, etter hvert som vi ser at vi trenger det :)
        </PageIntro>
        <ItemList<Item>
            items={items}
            getItemId={(item) => item.id}
            getItemTitle={(item) => item.name}
            onDelete={() => null}
        />
    </>
);

export default Intro;
