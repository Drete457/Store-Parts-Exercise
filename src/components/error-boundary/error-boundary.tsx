import { Component, lazy } from 'react';

interface Props {
    readonly children: JSX.Element;
}

interface State {
    readonly hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    private static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(): void {
        this.setState({ hasError: true });
    }

    public render(): JSX.Element {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
            const ErrorPageView = lazy(() =>
                import('@/views/error-page').then(({ ErrorPage }) => ({
                    default: ErrorPage,
                })),
            );

            return <ErrorPageView />;
        }

        return children;
    }
}

export default ErrorBoundary;
