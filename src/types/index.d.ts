import { VoidExpression } from "typescript";

export type taskContext = taskState & taskFunc;

export type taskState = {
    id : number;
    title : string;
    content : string;
    check: boolean;
};

export type taskFunc = {
    // openCells: (idx: number, status: CellStatusType) => void;
};