import React, { useState } from "react";
import { useLogin } from "../../queries/AuthQuery";
import { NavLink } from "react-router-dom";
import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
const SingnUpPage: React.VFC = () => {
    // const login = useLogin();
    const [name, setName] = useState<any>("takagi");
    const [email, setEmail] = useState("test@example.com");
    const [password, setPassword] = useState("43433434");

    const singUp = async () => {
        const { data } = await axios.post("/api/singUp", {
            name: name,
            email: email,
            password: password,
        });
        return data;
    };
    // const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     login.mutate({ email, password });
    // };
    return (
        <main className="bg-green-50 flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form
                    // onSubmit={handleLogin}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h1 className="text-center text-xl font-bold mb-4">
                        仮タイトル
                    </h1>
                    <NavLink to={`/login`}>
                        <h2 className="text-center mb-4">
                            ログインはこちらから
                        </h2>
                    </NavLink>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            名前
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            メールアドレス
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            パスワード
                        </label>
                        <input
                            className=" mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </form>
                <button
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    onClick={() => singUp()}
                >
                    新規登録する
                </button>
            </div>
        </main>
    );
};

export default SingnUpPage;
