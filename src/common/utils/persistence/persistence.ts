import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import moment from 'moment';

export interface PersistenceInterface<StorageFormat, ResponseFormat = any> {
    persist: (data: StorageFormat) => Promise<AxiosResponse<ResponseFormat>>;
    rehydrate: () => Promise<AxiosResponse<StorageFormat>>;
    purge: () => Promise<AxiosResponse>;
}

export interface PersistenceConfig {
    requestConfig: AxiosRequestConfig;
    url: string;
}

const isISODateString = (value: any): value is string => {
    if (value && typeof value === 'string') {
        const reg = /^\d{4}-\d{2}-\d{2}$/;
        const match: RegExpMatchArray | null = value.match(reg);
        return match !== null;
    } else {
        return false;
    }
};

export const dateStringToDateObjectMapper = (_key: string, value: string) => {
    if (isISODateString(value)) {
        return value;
    }
    if (!Array.isArray(value) && moment(value, [moment.HTML5_FMT.DATE, 'YYYY-MM-DDTHH:mm:ss.SSSZ'], true).isValid()) {
        return new Date(value);
    }
    return value;
};

const storageParser = (storageResponse: string) => {
    if (storageResponse) {
        return JSON.parse(storageResponse, dateStringToDateObjectMapper);
    }
};

function persistence<StorageFormat>({ requestConfig, url }: PersistenceConfig): PersistenceInterface<StorageFormat> {
    return {
        persist: (data: StorageFormat) => {
            return Axios.post(url, data, requestConfig);
        },
        rehydrate: () => {
            return Axios.get(url, { ...requestConfig, transformResponse: storageParser });
        },
        purge: () => {
            return Axios.delete(url, { ...requestConfig, data: {} });
        },
    };
}

export default persistence;
