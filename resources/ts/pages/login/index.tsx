import React, { useState } from "react";
import { useLogin } from "../../queries/AuthQuery";
const LoginPage: React.VFC = () => {
    const login = useLogin();
    const [email, setEmail] = useState("admin@example.com");
    const [password, setPassword] = useState("123456789");

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login.mutate({ email, password });
    };
    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label>メールアドレス</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>パスワード</label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">ログイン</button>
            </form>
        </>
    );
};

export default LoginPage;
