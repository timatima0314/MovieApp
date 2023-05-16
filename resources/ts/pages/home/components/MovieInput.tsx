import React, { useState } from "react";
import { useCreateMovie } from "../../../queries/MovieQuery";
const MoiveInput: React.VFC = () => {
    const creatMovie = useCreateMovie();
    const [title, setTitle] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        creatMovie.mutate(title);
        setTitle("");
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                className=" shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="タイトルを入力してください。"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    登録
                </button>
            </form>
        </>
    );
};

export default MoiveInput;
