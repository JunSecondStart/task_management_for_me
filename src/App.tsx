import Pages from "./views/pages";
import { Link } from "react-router-dom";
import { TaskFieldContextProvider } from "./context";
import { useTask } from "./context";
import { selectTopic } from "./types";
import { useState,useEffect } from "react";

const App:React.FC = () => {
  const Task = useTask();
  const [pageTitle, setPageTitle] = useState<selectTopic>({ selectTopic: ""});

  // function movePage(){
  //   switch(pageTitle){
  //     case "Coding": "Coding";
  //   }
  //   if(pageTitle.selectTopic!==""){
  //   const url = window.location;
  //   window.location.replace({url}+"/"+pageTitle);
  //   }
  // }

  useEffect(()=>{
    // movePage();
  },[pageTitle])

  return (
    <>
      <TaskFieldContextProvider>
        <div className="text-sky-300 bg-sky-100 text-center py-10 text-5xl font-bold">
          Task Management For Me
        </div>
        <section className="py-10 bg-cyan-50">
          <ul className="flex flex-row">
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/coding" onClick={()=>setPageTitle({selectTopic: "Coding"})}>Coding</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/plans" onClick={()=>setPageTitle({selectTopic: "Plans"})}>Plans</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/kintone" onClick={()=>setPageTitle({selectTopic: "Kintone"})}>Kintone</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/slack" onClick={()=>setPageTitle({selectTopic: "Slack"})}>Slack</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/servermanagement" onClick={()=>setPageTitle({selectTopic: "Servermanagement"})}>Servermanagement</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/tips" onClick={()=>setPageTitle({selectTopic: "Tips"})}>Tips</Link></li>
          </ul>
        </section>
        <section>
          <Pages />
        </section>
        {/* <footer>
          <ul className="flex flex-row">
            <li className="basis-1/3 text-5xl"><Link to="/">must do within a today</Link></li>
            <li className="basis-1/3 text-5xl"><Link to="/">must do within a week</Link></li>
            <li className="basis-1/3 text-5xl"><Link to="/">must do within a month</Link></li>
          </ul>
        </footer> */}
      </TaskFieldContextProvider>
    </>
  );
};

export default App;
