import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "../../queries/AuthQuery";
import { NavLink } from "react-router-dom";
import { Login } from "../../types/User";
import {} from "react-hook-form";
const LoginPage: React.VFC = () => {
    const login = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Login>({
        reValidateMode: "onSubmit",
        criteriaMode: "all",
    });
    const onSubmit = (data: Login) => {
        const { email, password } = data;
        login.mutate({ email, password });
    };
    return (
        <main className="bg-blue-50 flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h1 className="text-center text-xl font-bold mb-4 titleHeading">
                        Movie Love or Hate
                    </h1>
                    <NavLink to={`/singUp`}>
                        <h2 className="text-center text-blue-500 hover:underline mb-4">
                            新規登録はこちらから
                        </h2>
                    </NavLink>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            メールアドレス
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "入力が必須の項目です。",
                                },
                            })}
                        />
                        {errors.email?.message && (
                            <div className="text-red-400">
                                {errors.email.message}
                            </div>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            パスワード
                        </label>
                        <input
                            className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "入力が必須の項目です。",
                                },
                                minLength: {
                                    value: 4,
                                    message: "4文字以上入力してください。",
                                },
                            })}
                        />
                        {errors.password?.message && (
                            <div className="text-red-400">
                                {errors.password.message}
                            </div>
                        )}
                    </div>
                    <button
                        className="w-full mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        ログイン
                    </button>
                </form>
            </div>
        </main>
    );
};

export default LoginPage;
