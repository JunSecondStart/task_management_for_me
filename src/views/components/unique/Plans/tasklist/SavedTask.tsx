import { useEffect, useState } from "react";
import { useTask } from "../../../../../context";
import { localstoragetask } from "../../../../../types";
import TaskDetail from "./TaskDetail";

type Props = { localstoragetask: localstoragetask; idx: number };
const Taskstore: React.FC<Props> = ({ localstoragetask, idx }) => {
  /* ----- context ----- */
  const Task = useTask();
  const [style, setstyle] = useState("");
  const [detailCheck, setdetailCheck] = useState(
    (localstoragetask.detailCheck = localstoragetask.detailCheck)
  );
  const [detailStyle, setdetailStyle] = useState("");
  const [openModalStyle, setopenModalStyle] = useState("");



  useEffect(() => {
    localstoragetask.check === true
      ? setstyle("bg-yellow-200 text-red-400")
      : setstyle("text-cyan-400");
  }, [localstoragetask.check]);

  useEffect(() => {
    if (detailCheck === false) {
      setdetailStyle("!bg-blue-200 !text-red-500");
      setopenModalStyle("truncate");
    } else {
      setdetailStyle("text-cyan-400 py-2");
      setopenModalStyle("");
    }
  }, [detailCheck]);


  useEffect(() => {
    detailCheck === false
      ? setdetailStyle("!bg-white !text-red-400  px-2 pb-1")
      : setdetailStyle("bg-cyan-400 text-white px-2 pb-1");
  }, [detailCheck]);

  return (
    <section className={`bg-white m-5 ${style}`}>
      <div>
        <ul className="text-2xl font-bold">
          <li className="h-20">
            <div className="flex flex-row space-x-10">
              <div className="text-center py-2 w-16">
                <p>id</p>
                {idx}
              </div>
              <div
                className={`text-center w-32 py-1 truncate ${openModalStyle}`}
              >
                <p>title</p>
                {localstoragetask.title}
              </div>
              <div
                className={`text-center w-32 py-1 truncate ${openModalStyle}`}
              >
                <p>content</p>
                {localstoragetask.content}
              </div>
              <div className="text-center w-24 py-6">
                <span className="w-full">
                  {localstoragetask.check ? "complete" : "no clear"}
                </span>
              </div>
              <div className="text-center w-32 p-2">
                <TaskDetail storedtask_plans={localstoragetask} idx={idx} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Taskstore;
