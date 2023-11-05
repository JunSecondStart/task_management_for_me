import Tasklist from "./common/tasklist/Tasklist";
import Save from "./common/tasklist/Save";
import React, { useState } from "react";

const Kintone: React.FC = () => {
  const [mode, setmode] = useState<string>("Tasklist");
  function toggle() {
    mode === "Tasklist" ? setmode("Save") : setmode("Tasklist");
  }
  return (
    <>
      <section className="text-center">
        <button onClick={() => toggle()}>切り替え用ボタン</button>
      </section>
      <section>{mode === "Tasklist" ? <Tasklist /> : <Save />}</section>
      <section>
        <h4 className="text-sky-300 bg-sky-100 text-center py-10 text-2xl font-bold">
          Kintone
        </h4>
      </section>
    </>
  );
};

export default Kintone;
