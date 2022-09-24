import { useState, useEffect, useCallback } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useGetParts, useGetTypes } from '@/hooks';
import { PartsProps, QueryParams } from '@/helpers/interface';
import { OrderDirectionImage } from '@/components/main-page';
import { LoadingSpinner } from '@/components/loading-animations/loading-spinner';
import { Table } from '@/components/table';
import { search } from '@/assets';
import { routesPath } from '@/routes';

const MainPage: React.FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [partName, setPartName] = useState<string>('');
    const [partType, setPartType] = useState<string>('');
    const [typeOfParts, setTypeOfParts] = useState<ReadonlyArray<string>>([]);
    const [orderDirection, setOrderDirection] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [listOfParts, setListOfParts] = useState<ReadonlyArray<PartsProps>>(
        [],
    );
    const [listBackup, setListBackup] = useState<ReadonlyArray<PartsProps>>([]);

    const { error, data, setData, execute } = useGetParts();
    const {
        error: errorTypes,
        data: dataTypes,
        execute: executeTypes,
    } = useGetTypes();

    const sortData = useCallback(
        (dataToSort: ReadonlyArray<PartsProps>) => {
            const sortedData = [...dataToSort].sort((a, b) => {
                const aPrice = Number(a.price.replace('$', ''));
                const bPrice = Number(b.price.replace('$', ''));

                if (aPrice > bPrice) return orderDirection ? 1 : -1;
                if (aPrice < bPrice) return orderDirection ? -1 : 1;

                return 0;
            });

            return sortedData;
        },
        [orderDirection],
    );

    useEffect(() => {
        executeTypes();
    }, [executeTypes]);

    useEffect(() => {
        if (!isLoading && data.length === 0) {
            const query: QueryParams = {};

            if (partName) query.name = partName;
            if (partType) query.type = partType;

            execute(query);
            setIsLoading(true);
        }
    }, [data, execute, isLoading, partName, partType]);

    useEffect(() => {
        if (dataTypes) {
            const uniqueTypes = [...new Set(dataTypes)];
            setTypeOfParts(uniqueTypes);
        }
    }, [dataTypes]);

    useEffect(() => {
        if (isLoading && data.length > 0) {
            if (listBackup.length === 0) setListBackup(data);

            setListOfParts(sortData(data));
            setIsLoading(false);
        }
    }, [data, isLoading, listBackup.length, sortData]);

    useEffect(() => {
        if (data.length > 0) {
            setListOfParts(sortData(data));
        }
    }, [data, sortData, orderDirection]);

    return (
        <section hidden={!!error} className="m-8">
            <header>
                <h1 className="text-4xl font-bold mb-8">Store Parts</h1>
                <section className="flex gap-4">
                    <label htmlFor="part-name" className="relative w-3/6">
                        <input
                            type="text"
                            className="border border-blue-500 bg-blue-500 hover:bg-blue-700 text-white placeholder-white font-bold py-2 px-4 rounded w-full"
                            placeholder="Search..."
                            value={partName}
                            onChange={e => {
                                setData([]);
                                setPartName(e.target.value);
                            }}
                        />

                        <img
                            src={search}
                            alt="Search"
                            className={`w-6 h-6 absolute right-2 top-2 ${
                                isLoading ? 'animate-spin' : 'block'
                            }`}
                        />
                    </label>
                    <select
                        className="w-44 border border-blue-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        value={partType}
                        onChange={e => {
                            setData([]);
                            setPartType(e.target.value);
                        }}
                        disabled={isLoading}
                        hidden={errorTypes !== undefined}
                    >
                        <option value="">All</option>
                        {typeOfParts.map(type => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                    <button
                        type="button"
                        className="flex items-center gap-2 border border-blue-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => setOrderDirection(!orderDirection)}
                        disabled={isLoading}
                    >
                        Price Order
                        <OrderDirectionImage orderDirection={orderDirection} />
                    </button>
                    <button
                        type="button"
                        className="flex items-center gap-2 border border-blue-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() =>
                            navigate(routesPath.PartsPage, {
                                state: { listBackup },
                            })
                        }
                    >
                        Parts Page
                    </button>
                </section>
                <hr className="border-blue-800 mt-4 h-5"></hr>
            </header>
            <main>
                {isLoading ? <LoadingSpinner /> : <Table data={listOfParts} />}
            </main>
        </section>
    );
};

export default MainPage;
