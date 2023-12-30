export type taskContext = taskState & localState & TaskFunc & TaskFuncCoding;

export type taskState = {
  storedtasks: storedtask[];
  storedtasks_coding: storedtask_coding[];
  storedtasks_plans: storedtask_plans[];
  storedtasks_servermanagement: storedtask_servermanagement[];
  storedtasks_slack: storedtask_slack[];
  storedtasks_tips: storedtask_tips[];
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

export type storedtask_coding = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_plans = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_servermanagement = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_slack = {
  id: number;
  title: string;
  content: string;
  check: boolean;
  detailCheck?: boolean;
};

export type storedtask_tips = {
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

export type selectTopic = {
  selectTopic: "" | "Coding" | "Kintone" | "Plans" | "Servermanagement" | "Slack" | "Tips";
};

export type TaskFunc = {
  taskCreate: (title: string, content: string) => void;
  taskComplete: (id: number, isComplete: boolean) => void;
  deleteAll: () => void;
  taskWrite: () => void;
  taskRead: () => void;
  loadLocal: () => void;
  selectPage: () => void;
};

export type TaskFuncCoding = {
  taskCreateCoding: (title: string, content: string) => void;
  taskCompleteCoding: (id: number, isCompleteCoding: boolean) => void;
  deleteAllCoding: () => void;
  taskWriteCoding: () => void;
  taskReadCoding: () => void;
  loadLocalCoding: () => void;
  selectPageCoding: () => void;
};

