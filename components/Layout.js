import Navbar from './Navbar';
import Footer from './Footer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';

const Layout = ({ children, override } = { children: null, override: false }) => (
    <>
        {!override && (
            <Head>
                <title>Ayush Chowdhury</title>
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Ayush Chowdhury" />
                <meta
                    data-n-head="ssr"
                    data-hid="og:title"
                    property="og:title"
                    content="Ayush Chowdhury - Enthusiastic developer"
                />
                <meta
                    data-n-head="ssr"
                    data-hid="og:description"
                    property="og:description"
                    content="Personal Blog with lots of amazing articles."
                />
                <meta
                    data-n-head="ssr"
                    data-hid="og:image"
                    property="og:image"
                    content="https://cdn.discordapp.com/attachments/739002420704706571/752844170208477285/Absolute_Fashion.png"
                />
                <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/png" />
                <meta data-n-head="ssr" data-hid="og:image:width" property="og:image:width" content="750" />
                <meta data-n-head="ssr" data-hid="og:image:height" property="og:image:height" content="750" />
                <meta data-n-head="ssr" data-hid="og:image:alt" property="og:image:alt" content="Ayush Chowdhury" />

                <meta name="theme-color" content="#B1A7F0" />
            </Head>
        )}
        <CssBaseline />
        <Navbar />
        {children}
        <Footer />
        <style jsx global>{`
            body {
                margin: 0;
            }
        `}</style>
    </>
);

export default Layout;
