import React from "react";
import Router from "./router";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../sass/app.scss";
import { AuthProvider } from "./hooke/AuthContext";
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
        <AuthProvider>
            <QueryClientProvider client={queryClinent}>
                <Router />
                <ToastContainer hideProgressBar={true} />
            </QueryClientProvider>
        </AuthProvider>
    );
};

export default App;
