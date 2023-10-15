import { useEffect, useState } from "react";
import { useTask } from "../../../../context";

const Tasklist: React.FC = () => {
  /* ----- context ----- */
  const Task = useTask();
  const [pageReload, setpageReload] = useState(false);
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");
  const localStorageTask = "";

  function create() {
    // Task.id = Task.id + 1;
    Task.title.push(editTitle);
    Task.content.push(editContent);
    Task.check.push(false);
    setpageReload(true);
    localStorage.setItem(localStorageTask,editContent);
  }

  useEffect(() => {
    setpageReload(false);
  }, [pageReload]);

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
              className="mx-10 my-5 px-36 py-5 border-black rounded-xl w-full h-2/12"
              placeholder="title"
              value="title:"
              onChange={(e) => seteditTitle(e.target.value)}
            />
          </li>
          <li className="mx-20">
            <div className="mx-10 text-center">content</div>
            <textarea
              className="mx-10 my-5 px-36 py-20 border-black rounded-xl w-full h-4/12"
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
          </li>
        </ul>
      </div>
      <div className="basis-2/3">
        <ul className="text-cyan-400 text-2xl font-bold">
          <li className="pt-5">
            {Task.title.map((title,i)=>(title+" "))} {Task.content.map((content,i)=>(content+" "))} {Task.check}
          </li>
          <li></li>
          <li></li>
        </ul>
      </div>
      </section>
    </section>
  );
};

export default Tasklist;
