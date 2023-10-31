import Tasklist from "./common/tasklist/Tasklist";
import React from "react";
import { taskContext } from "../../types";
import Modal from "./common/Modal"
import TaskDetail from "./common/TaskDetail"

const Kintone: React.FC = () => {
    return (
        <>
            {/* <section>
                <ul>
                    <li className="text-lg pt-5">No.2552</li>
                    <li className="text-lg pt-5">No.2551</li>
                    <li className="text-lg pt-5">No.2549</li>
                    <li className="text-lg pt-5"></li>
                    <li></li>
                    <li></li>
                </ul>
            </section> */}
            <section>
                <Tasklist />
            </section>
            <section>
                <h4 className="text-sky-300 bg-sky-100 text-center py-10 text-2xl font-bold">Kintone</h4>
            </section>
        </>
    );
}

export default Kintone;