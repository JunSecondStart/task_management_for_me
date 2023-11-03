import { useState } from "react";
import { useTask } from "../../../../context";
import Taskstore from "./Taskstore";
import { read } from "fs";

const Tasklist: React.FC = () => {
  /* ----- context ----- */
  const Task = useTask();
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");
  const [readTasksArrayForDisplay, setreadTasksArrayForDisplay] = useState([]);

  function create() {
    Task.taskCreate(editTitle, editContent);
  }

  function read() {
    const getLocalstorage = localStorage.getItem("localStorageTask");
    if (getLocalstorage) {
      const jsonTasklist = JSON.parse(getLocalstorage);
      console.log(jsonTasklist);
    }
  }

  // function destroy() {
  //   localStorage.clear();
  // }

  return (
    <section className="bg-cyan-50">
      <div>
        <h4 className="text-cyan-300 bg-cyan-50 text-center py-10 text-2xl font-bold">
          Tasklist
        </h4>
      </div>
      <section className="flex flex-row">
        <div className="basis-1/3">
          <ul className="text-2xl h-1/6">
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
            <li className="text-center">
              <button
                className="bg-cyan-400 text-2xl w-36 h-20"
                type="button"
                onClick={() => create()}
              >
                create
              </button>
              <button
                className="bg-red-400 text-2xl w-36 h-20"
                type="button"
                onClick={() => Task.deleteAll()}
              >
                delete
              </button>
              <button
                className="bg-green-300 text-2xl w-36 h-20"
                type="button"
                onClick={() => read()}
              >
                read
              </button>
            </li>
          </ul>
        </div>
        <div className="basis-2/3">
          <ul className="text-cyan-400 text-2xl font-bold">
            {/* <li>{Task.title.map((title,i)=>(title+" "))}</li> */}
            <li className="px-20">
              <div>
                {Task.storedtasks.map((storedtask, i) => (
                  <Taskstore storedtask={storedtask} idx={i} />
                ))}
              </div>
              {/* <div className="basis=7/12">{Task.taskContent.content.map((taskContent,i)=>(taskContent+" "))}</div>  */}
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
};

export default Tasklist;
