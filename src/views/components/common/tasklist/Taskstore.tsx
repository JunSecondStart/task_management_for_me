import e from "express";
import { on } from "process";
import { useEffect, useState } from "react";
import { storedtask } from "../../../../types";

type Props = { storedtask:storedtask, idx:number };
const Taskstore: React.FC<Props> = ({storedtask,idx}) => {
  /* ----- context ----- */
  const [checkbox,setcheckbox] = useState(storedtask.check=storedtask.check);
  const [style, setstyle] = useState("");

  const check=()=>{
    checkbox === false ? 
    setcheckbox(storedtask.check=true):
    setcheckbox(storedtask.check=false);
    console.log(checkbox);
  };

  useEffect(()=>{
    checkbox === true ? setstyle("bg-yellow-200 text-red-400"):setstyle("text-cyan-400");
  },[checkbox])

  return (
      <section className={`bg-white m-5 ${style}`}>
        <div>
            <ul className="text-2xl font-bold">
            {/* <li>{Task.title.map((title,i)=>(title+" "))}</li> */}
            <li>
                  <div className="flex flex-row space-x-10">
                    <div className="text-center w-16">
                      <p>id</p>
                      {idx}
                    </div>
                    <div className="text-center w-32 truncate"><p>title</p>{storedtask.title}</div>
                    <div className="text-center w-36 truncate"><p>content</p>{storedtask.content}</div>
                    <div className="text-center w-24">
                      <span className="w-full">{ storedtask.check ? "complete":"no clear"}</span>
                    </div>

                    <div className="text-center w-16">
                        <button className="w-full" type="button" onClick={()=>check()}>
                        { storedtask.check ?　"on" : "off" }
                        </button>
                    </div>
                {/* <div className="basis=7/12">{Task.taskContent.content.map((taskContent,i)=>(taskContent+" "))}</div>  */}
                </div>         
            </li>
            </ul>
        </div>
      </section>
  );
};

export default Taskstore;
