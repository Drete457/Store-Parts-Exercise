import { NavigateFunction, useNavigate } from 'react-router-dom';
import '@/styles/error-page.css';

/* A React component that is used to display a 404 page. */
const ErrorPage: React.FC = () => {
    const navigation: NavigateFunction = useNavigate();

    return (
        <section className="rounded bg-gray-200 p-8 text-center h-[51.5em] overflow-hidden">
            <code className="text-center font-bold">
                <span>:+Error 404+:</span>
            </code>
            <button
                type="button"
                className="text-white bg-purple-600 hover:bg-violet-900 font-bold py-2 px-4 rounded-full"
                onClick={() => navigation('/', { replace: true })}
            >
                Return Main Page
            </button>
        </section>
    );
};

export default ErrorPage;
