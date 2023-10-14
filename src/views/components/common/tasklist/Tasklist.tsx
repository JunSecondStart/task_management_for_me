import { useTask } from "../../../../context";

const Tasklist:React.FC = () => {
    const Task = useTask();

    return (
        <>
            <div>
                <h4 className="text-cyan-300 bg-cyan-50 text-center py-10 text-2xl font-bold">Tasklist</h4>
            </div>
            <section>
                <ul>
                    <li className="text-lg pt-5">No.2552</li>
                    <li className="text-lg pt-5">No.2551</li>
                    <li className="text-lg pt-5">No.2549</li>
                    <li className="text-lg pt-5">{Task.id} {Task.title} {Task.content} {Task.check}</li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </>
    );
}

export default Tasklist;