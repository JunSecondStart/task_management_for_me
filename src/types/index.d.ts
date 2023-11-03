export type taskContext = taskState & TaskFunc;

export type taskState = {
  storedtasks: storedtask[];
  localstoragetasks: localstoragetask[];
};

// export type taskContent = {
//     id : number[];
//     title : string[];
//     content : string[];
//     check: boolean[];
// }

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
  // contextReload: () => void;
  // openCells: (idx: number, status: CellStatusType) => void;
};
