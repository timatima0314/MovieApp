import React from "react";
import { useForm } from "react-hook-form";
import { useSingUp, useLogin } from "../../queries/AuthQuery";
import { NavLink } from "react-router-dom";
import { SingUp } from "../../types/User";

const SingnUpPage: React.VFC = () => {
    const singUp = useSingUp();
    const login = useLogin();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SingUp>({
        reValidateMode: "onSubmit",
        criteriaMode: "all",
    });
    const onSubmit = (data: SingUp) => {
        const { email, password, name } = data;
        singUp.mutate(
            { email, password, name },
            {
                onSuccess: () => {
                    login.mutate({ email, password });
                },
            }
        );
    };

    return (
        <main className="bg-green-50 flex justify-center items-center h-screen">
            <div className="w-full max-w-xs">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h1 className="titleHeading text-center text-xl font-bold mb-4">
                        Movie Love or Hate
                    </h1>
                    <NavLink to={`/login`}>
                        <h2 className="text-center  text-blue-500 hover:underline mb-4">
                            ログインはこちらから
                        </h2>
                    </NavLink>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            名前
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="name"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "入力が必須の項目です。",
                                },
                            })}
                        />
                        {errors.name?.message && (
                            <div className="text-red-400">
                                {errors.name.message}
                            </div>
                        )}

                        <label
                            htmlFor="email"
                            className="block text-gray-700 text-sm font-bold mb-2 mt-2"
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
                            パスワード(4文字以上入力しましょう)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        新規登録する
                    </button>
                </form>
            </div>
        </main>
    );
};

export default SingnUpPage;
