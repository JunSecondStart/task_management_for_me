import React, { createContext, useContext, useState } from "react";
import { taskContext, taskState } from "../types";
import _ from "lodash";

const TaskContext = createContext({} as taskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
    const [ task, setTask ] = useState<taskState>({
        id : Array(255)
        .fill(null)
        .map((_, i) => (0)),
        title : Array(255)
        .fill(null)
        .map((_, i) => ("")),
        content : Array(255)
        .fill(null)
        .map((_, i) => ("")),
        check : Array(255)
        .fill(false)
        .map((_, i) => (false)),
    });
    return <TaskContext.Provider value={{ ...task }}>{children}</TaskContext.Provider>
};