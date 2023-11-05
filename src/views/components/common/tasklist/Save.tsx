import { useEffect, useState } from "react";
import { useTask } from "../../../../context";
import Taskstore from "./Taskstore";
import { localState, localstoragetask, taskState } from "../../../../types";

const Save: React.FC = () => {
  /* ----- context ----- */
  const Task = useTask();
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");

  function create() {
    Task.taskCreate(editTitle, editContent);
  }

  function Read() {
    const getLocalstorage = localStorage.getItem("localStorageTask");
    if (getLocalstorage) {
      const jsonparselist = JSON.parse(getLocalstorage);
      for (let k of jsonparselist) {
        Task.localstoragetasks.push({
          id: k.id,
          content: k.content,
          title: k.title,
          check: k.check,
          detailCheck: k.detailCheck,
        } as localstoragetask);
      }
      localStorage.clear();
    }
  }

  function localCheck() {
    Task.taskWrite();
    Read();
  }

  return (
    <section className="bg-green-50">
      <div>
        <h4 className="text-green-300 bg-green-50 text-center py-10 text-2xl font-bold">
          Save
        </h4>
      </div>
      <section className="flex flex-row">
        <div className="basis-1/3"></div>
        <div className="basis-1/3">
          <ul className="text-green-400 text-2xl font-bold">
            <li className="px-20">
              <div>
                {Task.localstoragetasks.map((storedtask, i) => (
                  <Taskstore storedtask={storedtask} idx={i} />
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="basis-1/3"></div>
      </section>
    </section>
  );
};

export default Save;
