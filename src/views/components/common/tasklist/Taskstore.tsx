import { useEffect, useState } from "react";
import { useTask } from "../../../../context";
import { storedtask } from "../../../../types";
import TaskDetail from "../../common/TaskDetail";

type Props = {
  storedtask: storedtask;
  idx: number;
};
const Taskstore: React.FC<Props> = ({ storedtask, idx }) => {
  /* ----- context ----- */
  // const [checkbox, setcheckbox] = useState(
  //   (storedtask.check = storedtask.check)
  // );
  const Task = useTask();
  const [style, setstyle] = useState("");
  const [detailCheck, setdetailCheck] = useState(
    (storedtask.detailCheck = storedtask.detailCheck)
  );
  const [detailStyle, setdetailStyle] = useState("");
  const [openModalStyle, setopenModalStyle] = useState("");

  // const check = () => {
  //   checkbox === false
  //     ? setcheckbox((storedtask.check = true))
  //     : setcheckbox((storedtask.check = false));
  // };
  // console.log(Task.openModal);

  useEffect(() => {
    storedtask.check === true
      ? setstyle("bg-yellow-200 text-red-400")
      : setstyle("text-cyan-400");
  }, [storedtask.check]);

  useEffect(() => {
    if (detailCheck === false) {
      setdetailStyle("!bg-blue-200 !text-red-500");
      setopenModalStyle("truncate");
    } else {
      setdetailStyle("text-cyan-400 py-2");
      setopenModalStyle("");
    }
  }, [detailCheck]);

  // Task.openModal? console.log(Task.openModal):(
  //   // useEffect(()=>{
  //     console.log(Task.openModal)

  //   // },[])
  // );

  const drop = () => {
    detailCheck === false
      ? setdetailCheck((storedtask.detailCheck = true))
      : setdetailCheck((storedtask.detailCheck = false));
    // console.log(detailCheck);
  };

  useEffect(() => {
    detailCheck === false
      ? setdetailStyle("!bg-white !text-red-400  px-2 pb-1")
      : setdetailStyle("bg-cyan-400 text-white px-2 pb-1");
  }, [detailCheck]);

  return (
    <section className={`bg-white m-5 ${style}`}>
      <div>
        <ul className="text-2xl font-bold">
          {/* <li>{Task.title.map((title,i)=>(title+" "))}</li> */}
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
                {storedtask.title}
              </div>
              <div
                className={`text-center w-32 py-1 truncate ${openModalStyle}`}
              >
                <p>content</p>
                {storedtask.content}
              </div>
              <div className="text-center w-24 py-6">
                <span className="w-full">
                  {storedtask.check ? "complete" : "no clear"}
                </span>
              </div>

              {/* <div className="text-center w-16  py-6">
                  <button
                    className="w-full"
                    type="button"
                    onClick={() => check()}
                  >
                    {storedtask.check ? "on" : "off"}
                  </button>
                </div> */}

              <div className="text-center w-32 p-2">
                {/* <button
                    className={`w-full ${detailStyle}`}
                    type="button"
                    onClick={() => detail()}
                  >
                    {detailCheck ? "see detail" : "stop seeing it"}
                  </button> */}
                <TaskDetail storedtask={storedtask} idx={idx} />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Taskstore;
