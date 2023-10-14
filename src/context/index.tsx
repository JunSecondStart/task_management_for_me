import React, { createContext, useContext, useState } from "react";
import { taskContext, taskState } from "../types";

const TaskContext = createContext({} as taskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
    const [ task, setTask ] = useState<taskState>({
        id : 1,
        title : "first task!",
        content : "I must do it by tomorrow",
        check : false,
    });
    return <TaskContext.Provider value={{ ...task }}>{children}</TaskContext.Provider>
};