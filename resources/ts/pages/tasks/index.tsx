import React from "react";

const TaskPage: React.VFC = () => {
    return (
        <>
            <h1 className="text-blue-400 text-4xl">Task Page</h1>
            <form className="">
                <input type="text" placeholder="titleを入力" defaultValue="" />
            </form>
        </>
    );
};

export default TaskPage;
