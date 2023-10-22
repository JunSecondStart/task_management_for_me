import { useEffect, useState } from "react";
import { useTask } from "../../../../context";
import { storedtask } from "../../../../types";

type Props = { storedtask:storedtask, idx:number };
const Taskstore: React.FC<Props> = ({storedtask,idx}) => {
  /* ----- context ----- */
  const Task = useTask();
  const [checkbox,setcheckbox] = useState(false);

  const check=()=>{
    checkbox === false ? 
    setcheckbox(true):setcheckbox(false);
    console.log(checkbox);
  };

  // useEffect(()=>{

  // },[checkbox])

  return (
      <section>
        <div className="basis-2/3">
            <ul className="text-cyan-400 text-2xl font-bold">
            {/* <li>{Task.title.map((title,i)=>(title+" "))}</li> */}
            <li className="px-20">
                <div>
                  <div className="flex flex-row space-x-10 ">
                    <div className="w-sm">{storedtask.id}</div>
                    <div className="w-xl">{storedtask.title}</div>
                    <div className="w-3xl">{storedtask.content}</div>
                    <div className="w-sm">
                      <span>{checkbox===true ? "complete":"no clear"}</span>
                    </div>
                    <div className="w-sm">
                        <button type="button" onClick={()=>check()}>checkbox</button>
                    </div>
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
