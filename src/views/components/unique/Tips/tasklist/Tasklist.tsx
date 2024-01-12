import { useEffect, useState } from "react";
import { useTask } from "../../../../../context";
import Taskstore from "./Taskstore";
import { localState, localstoragetask, taskState } from "../../../../../types";

const Tasklist: React.FC = () => {
  /* ----- context ----- */
  const Task = useTask();
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");

  function create() {
    Task.taskCreateTips(editTitle, editContent);
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
    }
  }

  function localCheck() {
    Task.taskWriteTips();
    Read();
  }

  return (
    <section className="static bg-yellow-50 h-screen">
      <div>
        <h4 className="text-yellow-300 bg-yellow-50 text-center pt-4 text-xl font-bold">
          Tasklist
        </h4>
      </div>
      <section className="flex flex-row">
        <div className="basis-1/3">
          <ul className="absolute top-5/24 left-1/8 text-2xl h-1/6 w-3/12">
            <li className="mx-20">
              <div className="mx-10 text-center">title</div>
              <textarea
                className="mx-10 my-5 px-5 py-5 border-black rounded-xl w-full h-2/12"
                placeholder="title"
                value={editTitle}
                onChange={(e) => seteditTitle(e.target.value)}
              />
            </li>
            <li className="mx-20">
              <div className="mx-10 text-center">content</div>
              <textarea
                className="mx-10 my-5 px-5 py-20 border-black rounded-xl w-full h-4/12"
                placeholder="content"
                value={editContent}
                onChange={(e) => seteditContent(e.target.value)}
              />
            </li>
          </ul>
          <ul className="absolute top-5/24 left-1/4 m-4">
            <li className="text-center">
              <button
                className="bg-cyan-400 text-2xl text-white w-32 h-20"
                type="button"
                onClick={() => create()}
              >
                create
              </button>
            </li>
            <li>
              <button
                className="bg-green-300 text-white text-2xl w-32 h-20 my-24"
                type="button"
                onClick={() => localCheck()}
              >
                Save
              </button>
            </li>
            <li>
              <button
                className="bottom-0 bg-red-400 text-white text-2xl w-32 h-20"
                type="button"
                onClick={() => Task.deleteAllTips()}
              >
                delete
              </button>
            </li>
          </ul>
        </div>
        <div className="basis-2/3">
          <ul className="static text-cyan-400 text-2xl font-bold">
            <li className="px-20">
              <div>
                {Task.storedtasks_tips.map((storedtask_tips, i) => (
                  <Taskstore storedtask_tips={storedtask_tips} idx={i} />
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="flex"></section>
    </section>
  );
};

export default Tasklist;
