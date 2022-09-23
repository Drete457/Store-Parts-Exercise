import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from './components/error-boundary';
import { LoadingSpinner } from './components/loading-animations/loading-spinner';
import { routes, routesPath } from './routes';

const Router: React.FC = () => {
    return (
        <ErrorBoundary>
            <Suspense key="suspense" fallback={<LoadingSpinner />}>
                <Routes>
                    {routes.map?.(page => {
                        const Component = page.component;

                        return (
                            <Route
                                key={page.name}
                                path={page.path}
                                element={
                                    <Component
                                        key={page.name}
                                        type={undefined}
                                        props={undefined}
                                    />
                                }
                            />
                        );
                    })}
                    <Route
                        key="redirect"
                        path={routesPath.home}
                        element={<Navigate to={routesPath.MainPage} />}
                    />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    );
};

export default Router;
