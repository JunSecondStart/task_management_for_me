import React, { createContext, useContext, useState } from "react";
import {
  localstoragetask,
  storedtask,
  taskContext,
  TaskFunc,
  taskState,
  localState,
} from "../types";
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

  const [localTasklist, setlocalTasklist] = useState<localState>({
    localstoragetasks: Array(0)
      .fill(null)
      .map(
        (_, i) =>
          ({
            id: 1,
            content: "content",
            title: "title",
            check: false,
            detailCheck: true,
          } as localstoragetask)
      ),
  });

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

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
      window.location.reload();
    },
    taskWrite: () => {
      const localStorageTask = JSON.stringify(task.storedtasks);
      localStorage.setItem("localStorageTask", localStorageTask);
    },
    taskRead: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };

        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
    saveClear: () => {
      setlocalTasklist((prev) => {
        let id = 1;
        const latestTask = prev.localstoragetasks.at(-1);
        if (latestTask) {
          id = latestTask.id + 1;
        }
        const getLocalstorage = localStorage.getItem("localStorageTask");
        if (getLocalstorage) {
          const jsonTasklist = JSON.parse(getLocalstorage);
          console.log(jsonTasklist);
          for (let j of jsonTasklist) {
            console.log(j.id);
            console.log(j.title);
            console.log(j.content);
            console.log(j.check);
            setTitle(j.title);
            setContent(j.content);
          }
          // console.log(jsonTasklist.map((title) => {title.title}));
        }
        const copyTask: localstoragetask = {
          id,
          title: title,
          content: content,
          check: false,
        };

        return {
          ...prev,
          localstoragetasks: [...prev.localstoragetasks, copyTask],
        };
      });
    },
  };

  // filter

  return (
    <TaskContext.Provider value={{ ...task, ...localTasklist, ...taskFunc }}>
      {children}
    </TaskContext.Provider>
  );
};
