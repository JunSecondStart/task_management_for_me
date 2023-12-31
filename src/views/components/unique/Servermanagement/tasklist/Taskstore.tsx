import { useEffect, useState } from "react";
import { useTask } from "../../../../../context";
import { storedtask_servermanagement } from "../../../../../types";
import TaskDetail from "./TaskDetail";

type Props = {
  storedtask_servermanagement: storedtask_servermanagement;
  idx: number;
};
const Taskstore: React.FC<Props> = ({ storedtask_servermanagement, idx }) => {
  /* ----- context ----- */
  const Task = useTask();
  const [style, setstyle] = useState("");
  const [detailCheck, setdetailCheck] = useState(
    (storedtask_servermanagement.detailCheck = storedtask_servermanagement.detailCheck)
  );
  const [detailStyle, setdetailStyle] = useState("");
  const [openModalStyle, setopenModalStyle] = useState("");

  useEffect(() => {
    storedtask_servermanagement.check === true
      ? setstyle("bg-yellow-200 text-red-400")
      : setstyle("text-cyan-400");
  }, [storedtask_servermanagement.check]);

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
              <div className="text-center py-2 w-16 md:w-full">
                <p>id</p>
                {idx}
              </div>
              <div
                className={`text-center w-32 py-1 md:w-full truncate ${openModalStyle}`}
              >
                <p>title</p>
                {storedtask_servermanagement.title}
              </div>
              <div
                className={`text-center w-32 py-1 md:w-full truncate ${openModalStyle}`}
              >
                <p>content</p>
                {storedtask_servermanagement.content}
              </div>
              <div className="text-center w-24 py-6 md:w-full">
                <span className="w-full">
                  {storedtask_servermanagement.check ? "complete" : "no clear"}
                </span>
              </div>
              <div className="text-center w-32">
                <TaskDetail storedtask_servermanagement={storedtask_servermanagement} idx={idx} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Taskstore;
