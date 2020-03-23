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

const dateStringToDateObjectMapper = (_: string, value: string) => {
    if (moment(value, moment.ISO_8601).isValid()) {
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
        }
    };
}

export default persistence;
