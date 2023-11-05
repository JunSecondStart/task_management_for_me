export type taskContext = taskState & localState & TaskFunc;

export type taskState = {
  storedtasks: storedtask[];
};

export type localState = {
  localstoragetasks: localstoragetask[];
};

export type storedtask = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type localstoragetask = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type TaskFunc = {
  taskCreate: (title: string, content: string) => void;
  taskComplete: (id: number, isComplete: boolean) => void;
  deleteAll: () => void;
  taskWrite: () => void;
  taskRead: () => void;
  saveClear: () => void;
  // contextReload: () => void;
  // openCells: (idx: number, status: CellStatusType) => void;
};
