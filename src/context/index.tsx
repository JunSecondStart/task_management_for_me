import React, { createContext, useContext, useState } from "react";
import { storedtask, taskContext, taskState } from "../types";
import _ from "lodash";

const TaskContext = createContext({} as taskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
    const [ task, setTask ] = useState<taskState>({
        storedtasks : Array(30)
        .fill(null)
        .map((_,i)=>({
            id: 0,
            content: "",
            title: "",
            check: false,
        } as storedtask)),
    });
    return <TaskContext.Provider value={{ ...task }}>{children}</TaskContext.Provider>
};