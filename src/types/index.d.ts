export type taskContext = taskState & localState & TaskFunc & TaskFuncCoding & TaskFuncPlans & TaskFuncServermanagement & TaskFuncSlack & TaskFuncTips;

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

export type TaskFuncPlans = {
  taskCreatePlans: (title: string, content: string) => void;
  taskCompletePlans: (id: number, isCompletePlans: boolean) => void;
  deleteAllPlans: () => void;
  taskWritePlans: () => void;
  taskReadPlans: () => void;
  loadLocalPlans: () => void;
  selectPagePlans: () => void;
};

export type TaskFuncSlack = {
  taskCreateSlack: (title: string, content: string) => void;
  taskCompleteSlack: (id: number, isCompleteSlacks: boolean) => void;
  deleteAllSlack: () => void;
  taskWriteSlack: () => void;
  taskReadSlack: () => void;
  loadLocalSlack: () => void;
  selectPageSlack: () => void;
};

export type TaskFuncServermanagement = {
  taskCreateServermanagement: (title: string, content: string) => void;
  taskCompleteServermanagement: (id: number, isCompleteServermanagement: boolean) => void;
  deleteAllServermanagement: () => void;
  taskWriteServermanagement: () => void;
  taskReadServermanagement: () => void;
  loadLocalServermanagement: () => void;
  selectPageServermanagement: () => void;
};

export type TaskFuncTips = {
  taskCreateTips: (title: string, content: string) => void;
  taskCompleteTips: (id: number, isCompleteTips: boolean) => void;
  deleteAllTips: () => void;
  taskWriteTips: () => void;
  taskReadTips: () => void;
  loadLocalTips: () => void;
  selectPageTips: () => void;
};