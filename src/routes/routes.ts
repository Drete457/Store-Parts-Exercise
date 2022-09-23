import { lazy } from 'react';

/* A way to lazy load the components and routing the application. */
const MainPageView = lazy(() =>
    import('@/views/main-page').then(({ MainPage }) => ({
        default: MainPage,
    })),
);

const PartsPageView = lazy(() =>
    import('@/views/parts-page').then(({ PartsPage }) => ({
        default: PartsPage,
    })),
);

const ErrorPageView = lazy(() =>
    import('@/views/error-page').then(({ ErrorPage }) => ({
        default: ErrorPage,
    })),
);

interface RouteProps {
    path: string;
    name: string;
    component: React.ComponentType<JSX.Element>;
}

const routes: ReadonlyArray<RouteProps> = [
    {
        path: '/main-page',
        name: 'MainPage',
        component: MainPageView,
    },
    {
        path: '/parts-page',
        name: 'PartsPage',
        component: PartsPageView,
    },
    {
        path: '*',
        name: 'ErrorPage',
        component: ErrorPageView,
    },
];

export default routes;
