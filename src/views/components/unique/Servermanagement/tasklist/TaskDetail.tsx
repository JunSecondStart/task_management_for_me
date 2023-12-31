import { Button, Modal } from "flowbite-react";
import { useState, useEffect } from "react";
import { useTask } from "../../../../../context";
import { storedtask_servermanagement } from "../../../../../types";

type Props = { storedtask_servermanagement: storedtask_servermanagement; idx: number };
const TaskDetail: React.FC<Props> = ({ storedtask_servermanagement, idx }) => {
  const Task = useTask();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const props = { openModal, setOpenModal };
  const [style, setstyle] = useState("");

  const check = () => {
    Task.taskComplete(storedtask_servermanagement.id, !storedtask_servermanagement.check);
  };

  return (
    <>
      <Button
        className="m-4 w-28 h-12"
        onClick={() => {
          props.setOpenModal(true);
        }}
      >
        Task Detail
      </Button>
      <Modal
        show={props.openModal === true}
        onClose={() => {
          props.setOpenModal(false);
        }}
      >
        <Modal.Header>
          {}
          <div className="flex">
            <div className="text-center w-32 py-2 mx-8">
              <span className="mr-8">id</span>
              {idx}
            </div>
            <div className="text-center w-full py-2 mx-8">
              <span className="mr-8">title</span>
              {storedtask_servermanagement.title}
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-row space-x-10">
            <div className="text-center py-2 w-full">
              <p>content</p>
              {storedtask_servermanagement.content}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="text-center w-1/2">
            <span className="w-full">Could you do this?</span>
          </div>
          <div className="text-center w-1/2  py-6">
            <span className="w-full">
              {storedtask_servermanagement.check ? "complete" : "no clear"}
            </span>
            <button className="w-full" type="button" onClick={() => check()}>
              {storedtask_servermanagement.check ? "on" : "off"}
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskDetail;
