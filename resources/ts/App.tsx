import React from "react";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../sass/app.scss";
const App: React.VFC = () => {
    const queryClinent = new QueryClient({
        defaultOptions: {
            queries: {
                retry: false,
            },
            mutations: {
                retry: false,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClinent}>
            <Router />
            <ToastContainer hideProgressBar={true} />
        </QueryClientProvider>
    );
};

export default App;
