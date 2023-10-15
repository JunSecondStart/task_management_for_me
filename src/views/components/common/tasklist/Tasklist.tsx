import { useEffect, useState } from "react";
import { useTask } from "../../../../context";

const Tasklist: React.FC = () => {
  /* ----- context ----- */
  const Task = useTask();
  const [pageReload, setpageReload] = useState(false);
  const [editTitle, seteditTitle] = useState("");
  const [editContent, seteditContent] = useState("");

  function create() {
    // Task.id = Task.id + 1;
    Task.title.push(editTitle);
    Task.content.push(editContent);
    Task.check.push(false);
    setpageReload(true);
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
      <ul className="flex flex-row text-2xl h-1/6">
        <li className="mx-20 basis-3/12">
          <div className="mx-10 text-center">title</div>
          <textarea
            className="mx-10 my-5 px-36 py-20 border-black rounded-xl w-full h-4/12"
            placeholder="title"
            value={editTitle}
            onChange={(e) => seteditTitle(e.target.value)}
          />
        </li>
        <li className="mx-20 basis-6/12">
          <div className="mx-10 text-center">content</div>
          <textarea
            className="mx-10 my-5 px-36 py-20 border-black rounded-xl w-full h-4/12"
            placeholder="content"
            value={editContent}
            onChange={(e) => seteditContent(e.target.value)}
          />
        </li>
      </ul>
      <button
        className="bg-cyan-400 text-2xl w-36 h-20"
        type="button"
        onClick={() => create()}
      >
        create
      </button>
      <section>
        <ul className="text-cyan-400 text-2xl font-bold">
          <li className="pt-5">
            {Task.title.map((title,i)=>(title))} {Task.content} {Task.check}
          </li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </section>
  );
};

export default Tasklist;
