import React, { useState } from "react";
import { Movie } from "../../../types/Movie";
import { useUpdateMovie, useDeleteMovie } from "../../../queries/MovieQuery";
import { toast } from "react-toastify";
type Props = {
    movie: Movie;
};
const MovieItem: React.VFC<Props> = ({ movie }) => {
    const [editTitle, setEditTitle] = useState<string | undefined>(undefined);
    const updateMovie = useUpdateMovie();
    const deletMovie = useDeleteMovie();
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value);
    };
    const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!editTitle) {
            toast.error("タイトルを入力してください。");
            return;
        }
        const newMovie = { ...movie };
        newMovie.title = editTitle;
        updateMovie.mutate({
            id: movie.id,
            movie: newMovie,
        });
        setEditTitle(undefined);
    };
    const handleToggleEdit = () => {
        setEditTitle(movie.title);
    };
    const handleOnKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (["Escape", "Tab"].includes(e.key)) {
            setEditTitle(undefined);
        }
    };
    const itemInput = () => {
        return (
            <>
                <form>
                    <input
                        defaultValue={editTitle}
                        className=" shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        onChange={handleInputChange}
                        onKeyDown={handleOnKey}
                    />
                    <button
                        onClick={handleUpdate}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        更新
                    </button>
                </form>
            </>
        );
    };
    const itemText = () => {
        return (
            <>
                <div>
                    <span onClick={handleToggleEdit}>{movie.title}</span>
                    <button
                        onClick={() => deletMovie.mutate(movie.id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        削除
                    </button>
                </div>
            </>
        );
    };
    return (
        <li className="mb-8" key={movie.id}>
            {/* {movie.title} */}
            {editTitle === undefined ? itemText() : itemInput()}
        </li>
    );
};

export default MovieItem;
