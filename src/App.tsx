import Pages from "./views/pages";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="text-cyan-300 bg-cyan-50 text-center py-10 text-5xl font-bold">
        Task Management For Me
      </div>
      <section className="my-10">
        <ul className="flex flex-row">
          <li className="basis-1/3 text-3xl text-center text-sky-500"><Link to="/coding">Coding</Link></li>
          <li className="basis-1/3 text-3xl text-center text-sky-500"><Link to="/plans">Plans</Link></li>
          <li className="basis-1/3 text-3xl text-center text-sky-500"><Link to="/kintone">Kintone</Link></li>
          <li className="basis-1/3 text-3xl text-center text-sky-500"><Link to="/slack">Slack</Link></li>
          <li className="basis-1/3 text-3xl text-center text-sky-500"><Link to="/servermanagement">Servermanagement</Link></li>
          <li className="basis-1/3 text-3xl text-center text-sky-500"><Link to="/tips">Tips</Link></li>
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
    </>
  );
};

export default App;
