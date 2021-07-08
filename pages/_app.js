import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'prism-themes/themes/prism-dracula.css';
import '../styles/index.css';
import { ThemeProvider } from '@material-ui/core';
import { useStickyState } from '../lib/hooks';
import { theme } from '../lib/theme';
import { ThemeContext } from '../context/theme';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    const [mode, setTheme] = useStickyState('light', 'theme');

    return (
        <>
            <ThemeContext.Provider
                value={{
                    mode,
                    setTheme: () => setTheme(mode === 'dark' ? 'light' : 'dark')
                }}
            >
                <ThemeProvider theme={theme(mode ?? 'light')}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ThemeContext.Provider>
        </>
    );
}

export default MyApp;
