import { get, URLS } from '@/api';
import { useState, useCallback } from 'react';

const getTypes = async (setData, setError) => {
    const url = URLS.partsTypes;

    get({ url })
        .then(res => setData(res.data))
        .catch(err => setError(err.data));
};

const useGetTypes = () => {
    const [error, setError] = useState<Error>();
    const [data, setData] = useState<ReadonlyArray<string>>([]);

    const execute = async () => {
        await getTypes(setData, setError);
    };

    return {
        error,
        data,
        execute: useCallback(execute, []),
    };
};

export default useGetTypes;
