import React from "react";
interface Props {
    dataJa: any;
}
const DetailPageCast: React.VFC<Props> = ({ dataJa }) => {
    /**
     *@param {Any} credits クレジット、出演者などのデータ
     */
    const { credits } = dataJa;
    return (
        <div className="w-10/12 m-auto">
            <div className="font-bold text-xl ">主な出演者</div>

            <ul className="flex flex-row w-full overflow-x-scroll">
                {credits.cast.slice(0, 10).map((item: any) => {
                    return (
                        <li
                            key={item.id}
                            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 whitespace-wrap w-max"
                        >
                            {item.profile_path ? (
                                <img
                                    width={154}
                                    height={231}
                                    className="max-w-none rounded-t-lg m-auto"
                                    src={`https://image.tmdb.org/t/p/w154/${item.profile_path}`}
                                />
                            ) : (
                                <img
                                    width={154}
                                    height={231}
                                    className="max-w-none rounded-t-lg m-auto"
                                    src={"/images/no_images.png"}
                                />
                            )}
                            <div className="p-3 ">
                                <div className="font-bold">{item.name}</div>
                                <div>{item.character}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
export default DetailPageCast;
