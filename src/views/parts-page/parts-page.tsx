import { useState, useEffect } from 'react';
import {
    Location,
    NavigateFunction,
    useLocation,
    useNavigate,
} from 'react-router-dom';
import { useGetParts } from '@/hooks';
import { LoadingSpinner } from '@/components/loading-animations/loading-spinner';
import { Table } from '@/components/table';
import { routesPath } from '@/routes';

const PartsPage: React.FC = () => {
    const location: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { error, data, execute } = useGetParts();
    console.log(data);
    useEffect(() => {
        if (!location.state) {
            setIsLoading(true);
            execute({});
        }
    }, [execute, location.state]);

    useEffect(() => {
        if (data.length > 0) setIsLoading(false);
    }, [data]);

    return (
        <section hidden={!!error} className="m-8">
            <header>
                <h1 className="text-4xl font-bold mb-8">Store Parts</h1>
                <section className="flex justify-end">
                    <button
                        type="button"
                        className="flex items-center gap-2 border border-blue-500 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => navigate(routesPath.MainPage)}
                    >
                        Main Page
                    </button>
                </section>
                <hr className="border-blue-800 mt-4 h-5"></hr>
            </header>
            <main>
                {isLoading ? (
                    <LoadingSpinner />
                ) : (
                    <Table data={location.state?.listBackup || data} />
                )}
            </main>
        </section>
    );
};

export default PartsPage;
