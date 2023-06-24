import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../queries/AuthQuery";
import { useAuth } from "../hooke/AuthContext";
const Header: React.VFC = () => {
    const logOut = useLogout();
    const { isAuth, setIsAuth } = useAuth();
    const navigation = (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="headering">Movie Love or Hate</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <Link
                                    to="/"
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    ホーム
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <Link
                                    to="/mypage"
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    マイページ
                                </Link>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                <Link
                                    to="/search"
                                    className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                                    aria-current="page"
                                >
                                    検索
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={() => logOut.mutate()}
                        className="text-white cursor-pointer"
                    >
                        logout
                    </div>
                </div>
            </div>
        </nav>
    );
    const loginNavigation = (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <h1 className="titleHeading">Movie Love or Hate</h1>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link
                                    to="/login"
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                                >
                                    login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
    return <>{isAuth ? navigation : loginNavigation}</>;
};

export default Header;
