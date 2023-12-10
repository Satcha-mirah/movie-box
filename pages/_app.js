// _app.js
import Head from "next/head";
import "../app/globals.css";
import { Provider } from "react-redux";
import { store } from "@/store/store";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>MovieBox</title>
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    );
}

export default MyApp;
