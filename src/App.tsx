import Pages from "./views/pages";
import { Link } from "react-router-dom";
import { TaskFieldContextProvider } from "./context";

const App:React.FC = () => {
  return (
    <>
      <TaskFieldContextProvider>
        <div className="text-sky-300 bg-sky-100 text-center py-10 text-5xl font-bold">
          Task Management For Me
        </div>
        <section className="py-10 bg-cyan-50">
          <ul className="flex flex-row">
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/coding">Coding</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/plans">Plans</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/kintone">Kintone</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/slack">Slack</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/servermanagement">Servermanagement</Link></li>
            <li className="basis-1/6 text-3xl text-center text-cyan-300"><Link to="/tips">Tips</Link></li>
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
