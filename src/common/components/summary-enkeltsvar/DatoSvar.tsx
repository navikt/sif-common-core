import React from 'react';
import { ApiStringDate } from '../../types/ApiStringDate';
import { apiStringDateToDate, prettifyDate } from '../../utils/dateUtils';

interface Props {
    apiDato: ApiStringDate;
}
export const prettifyApiDate = (apiDato: ApiStringDate): string => prettifyDate(apiStringDateToDate(apiDato));

const DatoSvar = ({ apiDato }: Props) => <>{prettifyApiDate(apiDato)}</>;

export default DatoSvar;
