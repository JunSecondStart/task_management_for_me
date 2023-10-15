import React, { createContext, useContext, useState } from "react";
import { taskContext, taskState, taskContent } from "../types";
import _ from "lodash";

const TaskContext = createContext({} as taskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
    const [ task, setTask ] = useState<taskState>({
        id : Array(30)
        .fill(null)
        .map((_, i) => (0)),
        title : Array(30)
        .fill(null)
        .map((_, i) => ("")),
        taskContent : {
            id: Array(30).fill(null).map((_, i) => (0)),
            content: Array(30).fill(null).map((_, i) => ("")),
            title: Array(30).fill(null).map((_, i) => ("")),
            check: Array(30).fill(false).map((_, i) => (false)),
        },
        check : Array(30)
        .fill(false)
        .map((_, i) => (false)),
    });
    return <TaskContext.Provider value={{ ...task }}>{children}</TaskContext.Provider>
};