import { get, URLS } from '@/api';
import { PartsProps, QueryParams } from '@/helpers/interface';
import { useState, useCallback } from 'react';

const getParts = async (query, setData, setError) => {
    const url = URLS.parts;

    get({ url, query })
        .then(res => setData(res.data))
        .catch(err => setError(err.data));
};

const useGetParts = () => {
    const [error, setError] = useState<Error>();
    const [data, setData] = useState<ReadonlyArray<PartsProps>>([]);

    const execute = async (query: QueryParams) => {
        await getParts(query, setData, setError);
    };

    return {
        error,
        data,
        setData,
        execute: useCallback(execute, []),
    };
};

export default useGetParts;
