import { useEffect } from "react";
import {
    BrowserRouter,
    Switch,
    Route,
    RouteProps,
    Redirect,
} from "react-router-dom";
import LoginPage from "./pages/login";
import Header from "./components/Header";
import NotFoundPage from "./pages/error";
import { useAuth } from "./hooke/AuthContext";
import { useUser } from "./queries/AuthQuery";
import SearchPage from "./pages/search";
import HomePage from "./pages/home";
import MyPage from "./pages/mypage/index";
import DetailPage from "./pages/detailPage";
import SingnUpPage from "./pages/signUp";
const Router = () => {
    const { isAuth, setIsAuth } = useAuth();
    const { data: authUser } = useUser();
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
                    <LoginRoute path="/login" component={LoginPage} />
                    <LoginRoute path="/singUp" component={SingnUpPage} />

                    <GuardRoute path="/mypage" component={MyPage} />
                    <GuardRoute
                        path="/detail-page/:id"
                        component={DetailPage}
                    />

                    <GuardRoute path="/search" component={SearchPage} />
                    <GuardRoute path="/" component={HomePage} />

                    <Route path="/mypage" component={MyPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default Router;
