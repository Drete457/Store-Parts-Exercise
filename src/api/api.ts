import axios, { AxiosInstance } from 'axios';
import { QueryParams } from '@/helpers/interface';

const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
const API = {
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
};
const axiosInstance = axios.create({
    headers: API.headers,
});
const axiosAdminInstance = axios.create({
    headers: { ...API.headers },
});

const requestHandler = async request => {
    if (request.data?.isAppJsonHeader) {
        delete request.data.isAppJsonHeader;
        request.headers['Content-Type'] = 'application/json';
    }

    if (request.isAppJsonHeader) {
        delete request.isAppJsonHeader;
        request.headers['Content-Type'] = 'application/json';
    }

    return request;
};

axiosInstance.interceptors.request.use(requestHandler);
axiosAdminInstance.interceptors.request.use(requestHandler);

const addQueryToUrl = (url: string, query: QueryParams) => {
    const queryKeys = Object.keys(query);

    return queryKeys.length > 0
        ? `${url}?${new URLSearchParams({ ...query }).toString()}`
        : url;
};

const get = async ({
    url,
    query = {},
    localAxiosInstance = axiosInstance,
}: {
    url: string;
    query?: QueryParams;
    localAxiosInstance?: AxiosInstance;
}) => {
    const uri = addQueryToUrl(url, query);

    try {
        const result = await localAxiosInstance.get(`${API.baseUrl}${uri}`, {
            responseType: `json`,
            headers: { ...API.headers },
        });
        return Promise.resolve(result);
    } catch (err) {
        return Promise.reject(err.response);
    }
};

export default get;
