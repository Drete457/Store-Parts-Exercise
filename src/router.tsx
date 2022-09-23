import React, {
    Suspense,
} from 'react';
import {
    Location,
    NavigateFunction,
    useLocation,
    useNavigate,
    matchPath,
} from 'react-router-dom';

/* The main router of the application. */
const Router: React.FC = () => {

    return (
        <Suspense key="suspense" fallback={<AnimateLogo />}>
            <p>first page</p>
        </Suspense>
    );
};

export default Router;
