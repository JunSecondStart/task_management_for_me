import Tasklist from "./common/tasklist/Tasklist";
import React from "react";

const Kintone: React.FC = () => {
    return (
        <>
            <section>

            </section>
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
                <h4 className="text-cyan-300 bg-cyan-50 text-center py-10 text-2xl font-bold">Kintone</h4>
            </section>
        </>
    );
}

export default Kintone;