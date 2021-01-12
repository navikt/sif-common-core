import React from 'react';
import { useIntl } from 'react-intl';
import { getCountryName } from '../../utils/countryUtils';

interface Props {
    countryCode: string;
}

const CountryName = ({ countryCode }: Props) => {
    const intl = useIntl();
    return <>{getCountryName(countryCode, intl.locale)}</>;
};

export default CountryName;
