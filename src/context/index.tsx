import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { storedtask, taskContext, TaskFunc, taskState } from "../types";
import _ from "lodash";

const TaskContext = createContext({} as taskContext);
export const useTask = () => useContext(TaskContext);

type Props = { children: React.ReactNode };
export const TaskFieldContextProvider: React.FC<Props> = ({ children }) => {
  const [task, setTask] = useState<taskState>({
    storedtasks: Array(1)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as storedtask)
      ),
  });

  // const [openModal, setopenModal] = useState<boolean>(false);

  // function contextReload(){
  //       setTask();
  // };

  const taskFunc: TaskFunc = {
    taskCreate: (title, content) => {
      setTask((prev) => {
        let id = 1;
        const latestTask = prev.storedtasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const newTask: storedtask = {
          id,
          title,
          content,
          check: false,
        };
        return { ...prev, storedtasks: [...prev.storedtasks, newTask] };
      });
    },
    taskComplete: (id, isComplete) => {
      setTask((prev) => {
        const updated = prev.storedtasks.map((task) =>
          task.id === id ? { ...task, check: isComplete } : task
        );
        return { ...prev, storedtasks: updated };
      });
    },
    deleteAll: () => {
      setTask((prev) => ({ ...prev, storedtasks: [] }));
    },
  };

  // filter

  return (
    <TaskContext.Provider value={{ ...task, ...taskFunc }}>
      {children}
    </TaskContext.Provider>
  );
};
