export type taskContext = taskState & storedtask & taskFunc;

export type taskState = {
    storedtasks : storedtask[];
};

// export type taskContent = {
//     id : number[];
//     title : string[];
//     content : string[];
//     check: boolean[];
// }

export type storedtask = {
    id?: number;
    title?: string;
    content?: string;
    check?: boolean;
    detailCheck?: boolean;
}

export type taskFunc = {
    // contextReload: () => void;
    // openCells: (idx: number, status: CellStatusType) => void;
};