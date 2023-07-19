import App from 'app/App';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { PageError } from 'widgets/PageError/ui/PageError';

import './shared/config/i18n/i18n';
import { Suspense } from 'react';

render(
    <BrowserRouter>
        <Suspense fallback="">
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </Suspense>
    </BrowserRouter>,
    document.getElementById('root'),
);
