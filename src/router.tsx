import React, { Suspense } from 'react';
import {
    Location,
    NavigateFunction,
    useLocation,
    useNavigate,
} from 'react-router-dom';

/* The main router of the application. */
const Router: React.FC = () => {
    return (
        <Suspense key="suspense" fallback={<p>...loading</p>}>
            <p className="text-sm">first page</p>
        </Suspense>
    );
};

export default Router;
