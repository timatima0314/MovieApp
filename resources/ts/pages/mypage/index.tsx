import React from "react";

const MyPage: React.VFC = (props:any) => {
    console.log(props)
    const id = props.match.params.id;
    // console.log(id)
    return (
        <>
            <h1 className="text-red-400 text-4xl">MyPage</h1>
        </>
    );
};

export default MyPage