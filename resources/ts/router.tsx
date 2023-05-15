import React, { useEffect } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    RouteProps,
    Redirect,
} from "react-router-dom";
import TaskPage from "./pages/tasks";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import Header from "./components/Header";
import NotFoundPage from "./pages/error";
import { useAuth } from "./hooke/AuthContext";
import { useUser } from "./queries/AuthQuery";
// import { useLogout } from "./queries/AuthQuery";
const Router = () => {
    // const logOut = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const { isLoading, data: authUser } = useUser();
    useEffect(() => {
        if (authUser) {
            setIsAuth(true);
        }
    }, [authUser]);
    const GuardRoute = (props: RouteProps) => {
        if (!isAuth) return <Redirect to="/login" />;
        return <Route {...props} />;
    };
    const LoginRoute = (props: RouteProps) => {
        if (isAuth) return <Redirect to="/" />;
        return <Route {...props} />;
    };

    return (
        <BrowserRouter>
            <Header />
            <div>
                <Switch>
                    <LoginRoute path="/login">
                        <LoginPage />
                    </LoginRoute>
                    <GuardRoute exact path="/">
                        <HomePage />
                    </GuardRoute>
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
