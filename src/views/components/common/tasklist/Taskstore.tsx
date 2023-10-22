import e from "express";
import { on } from "process";
import { useEffect, useState } from "react";
import { storedtask } from "../../../../types";

type Props = { storedtask: storedtask; idx: number };
const Taskstore: React.FC<Props> = ({ storedtask, idx }) => {
  /* ----- context ----- */
  const [checkbox, setcheckbox] = useState(
    (storedtask.check = storedtask.check)
  );
  const [style, setstyle] = useState("");
  const [detailCheck, setdetailCheck]= useState(storedtask.detailCheck = storedtask.detailCheck );
  const [detailStyle, setdetailStyle]= useState("");
  const [dropWindow,setdropWindow] = useState(storedtask.dropWindow = storedtask.dropWindow);
  const [dropWindowStyle, setdropWindowStyle]= useState("");

  const check = () => {
    checkbox === false
      ? setcheckbox((storedtask.check = true))
      : setcheckbox((storedtask.check = false));
  };

  useEffect(() => {
    checkbox === true
      ? setstyle("bg-yellow-200 text-red-400")
      : setstyle("text-cyan-400");
  }, [checkbox]);

  const detail = () => {
    if(detailCheck===false){
      setdetailCheck(storedtask.detailCheck = true);
      setdropWindow(storedtask.dropWindow = true);
  }else{
      setdetailCheck(storedtask.detailCheck = false);
      setdropWindow(storedtask.dropWindow = false);
    };
    console.log(dropWindow);
  }

  useEffect(() => {
    if(detailCheck === false){
      setdetailStyle("!bg-blue-200 !text-red-500");
      setdropWindowStyle("truncate");
    }else{
      setdetailStyle("text-cyan-400 py-2");
      setdropWindowStyle("");
    }
  }, [detailCheck]);


  const drop = () => {
    detailCheck===false ? setdetailCheck(storedtask.detailCheck = true): setdetailCheck(storedtask.detailCheck = false);
    console.log(detailCheck);
  }

  useEffect(() => {
    detailCheck === false
      ? setdetailStyle("!bg-blue-200 !text-red-500")
      : setdetailStyle("text-cyan-400 py-2");
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
              <div className={`text-center w-32 py-1 ${dropWindowStyle}`}>
                <p>title</p>
                {storedtask.title}
              </div>
              <div className={`text-center w-32 py-1 ${dropWindowStyle}`}>
                <p>content</p>
                {storedtask.content}
              </div>
              <div className="text-center w-24 py-6">
                <span className="w-full">
                  {storedtask.check ? "complete" : "no clear"}
                </span>
              </div>

              <div className="text-center w-16  py-6">
                <button
                  className="w-full"
                  type="button"
                  onClick={() => check()}
                >
                  {storedtask.check ? "on" : "off"}
                </button>
              </div>
              {/* <div className="basis=7/12">{Task.taskContent.content.map((taskContent,i)=>(taskContent+" "))}</div>  */}

              <div className={`text-center w-32 p-2 ${detailStyle}`}>
                <button
                  className="w-full"
                  type="button"
                  onClick={() => detail()}
                >
                  {detailCheck ? "see detail" : "stop seeing it"}
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Taskstore;
