import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import { useTask } from "../../../context";
import { storedtask } from '../../../types';

type Props = { storedtask: storedtask; idx: number };
const TaskDetail: React.FC<Props> = ( { storedtask, idx } ) => {
  const Task = useTask();
  const [openModal, setOpenModal] = useState<string | undefined>();
  const props = { openModal, setOpenModal };

  return (
    <>
      <Button onClick={() => props.setOpenModal('default')}>Task Detail</Button>
      <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
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
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setOpenModal(undefined)}>I accept</Button>
          <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default TaskDetail;