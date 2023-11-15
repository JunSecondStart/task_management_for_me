import { useTask } from "../../../../../context";
import SavedTask from "./SavedTask";

const Save: React.FC = () => {
  /* ----- context ----- */
  const Task = useTask();

  function localDelete() {
    localStorage.clear();
  }

  return (
    <section className="bg-green-50">
      <div>
        <h4 className="text-green-300 bg-green-50 text-center py-10 text-2xl font-bold">
          Save
        </h4>
      </div>
      <section className="flex flex-row w-40">
        <div className="basis-1/3 mx-40 h-96">
          <button
            className="bg-yellow-200 text-white text-2xl w-36 h-20 mb-8"
            type="button"
            onClick={() => Task.loadLocal()}
          >
            Load
          </button>
          <button
            className="bg-pink-400 text-white text-2xl w-36 h-20"
            type="button"
            onClick={() => localDelete()}
          >
            Cache Clear
          </button>
        </div>
        <div className="basis-1/3">
          <ul className="text-green-400 text-2xl font-bold">
            <li className="px-20">
              <div>
                {Task.localstoragetasks.map((localstoragetask, i) => (
                  <SavedTask localstoragetask={localstoragetask} idx={i} />
                ))}
              </div>
            </li>
          </ul>
        </div>
        <div className="basis-1/3"></div>
      </section>
    </section>
  );
};

export default Save;
