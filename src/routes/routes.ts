import { lazy } from 'react';

/* A way to lazy load the components and routing the application. */
const HomeView = lazy(() =>
    import('@/example').then(({ Home }) => ({
        default: Home,
    })),
);


interface RouteProps {
    path: string;
    name: string;
    component: React.ComponentType<JSX.Element>;
}

const routes: ReadonlyArray<RouteProps> = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
];

export default routes;
