import Tasklist from "./common/tasklist/Tasklist";
import React from "react";

const Kintone: React.FC = () => {
  return (
    <>
      <section>
        <Tasklist />
      </section>
      <section>
        <h4 className="text-sky-300 bg-sky-100 text-center py-10 text-2xl font-bold">
          Kintone
        </h4>
      </section>
    </>
  );
};

export default Kintone;
