import { useState, useCallback } from 'react';

const getAllSoftware = async (set, setError) => {
    const url = URLS.getAll;

    get({ url })
        .then(res => set(res.data))
        .catch(err => setError(err.data));
};

const useGetAllSoftware = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error>();
    const [data, setData] = useState([]);

    const execute = async () => {
        try {
            setIsLoading(true);
            getAllSoftware(setData, setError);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        isLoading,
        error,
        data,
        execute: useCallback(execute, []),
    };
};

export default useGetAllSoftware;
