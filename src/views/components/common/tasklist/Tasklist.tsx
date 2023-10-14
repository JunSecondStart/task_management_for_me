import Tasks from "./Tasks";

const Tasklist = () => {
    return (
        <>
            <div>
                <h4 className="text-cyan-300 bg-cyan-50 text-center py-10 text-2xl font-bold">Tasklist</h4>
            </div>
            <section>
                <Tasks />
            </section>
        </>
    );
}

export default Tasklist;