import { Button, Modal } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useTask } from "../../../context";
import { storedtask } from '../../../types';

type Props = { storedtask: storedtask; idx: number };
const TaskDetail: React.FC<Props> = ( { storedtask, idx } ) => {
  const Task = useTask();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const props = { openModal, setOpenModal };
  const [checkbox, setcheckbox] = useState(
    (storedtask.check = storedtask.check)
  );
  const [style, setstyle] = useState("");



  const check = () => {
    checkbox === false
      ? setcheckbox((storedtask.check = true))
      : setcheckbox((storedtask.check = false));
  };

  useEffect(() => {

    console.log(checkbox);

  }, [checkbox]);



  return (
    <>
      <Button onClick={() => { props.setOpenModal(true);}}>Task Detail</Button>
      <Modal show={props.openModal === true } onClose={() => {props.setOpenModal(false);}}>
        <Modal.Header>{}</Modal.Header>
        <Modal.Body>
          <div className="flex flex-row space-x-10">
                <div className="text-center py-2 w-16">
                  <p>id</p>
                  {idx}
                </div>
                <div className="text-center py-2 w-16">
                  <p>title</p>
                  {storedtask.title}
                </div>
                <div className="text-center py-2 w-16">
                  <p>content</p>
                  {storedtask.content}
                </div>
                <div className="text-center w-24 py-6">
                  <span className="w-full">
                    {storedtask.check ? "complete" : "no clear"}
                  </span>
                </div>
                <div className="text-center w-16  py-6">
                  <button
                    className="w-full"
                    type="button"
                    onClick={() => check()}
                  >
                    {storedtask.check ? "on" : "off"}
                  </button>
                </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {props.setOpenModal(false);}}>I accept</Button>
          <Button color="gray" onClick={() => {props.setOpenModal(false); }} >
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskDetail;