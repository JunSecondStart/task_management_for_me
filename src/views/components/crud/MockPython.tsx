import MockAdapter from "axios-mock-adapter";
import { item } from "../../../types";
import axios from "axios";

export const MockPython = () => {
  const mockAxios = new MockAdapter(axios);

  const dataAmount:item[] = [{
    id: 4,
    name: "chatGPT4",
    param1: 10,
    param2: 50,
    param3: 9999
  },{
    id: 5,
    name: "copilot",
    param1: 10,
    param2: 50,
    param3: 99999
  },{
    id: 6,
    name: "claude",
    param1: 10,
    param2: 50,
    param3: 999999
  }];

  // 基本パターン
  mockAxios.onGet("./mockread",
  {
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': '0',
    }
  }).reply(200, dataAmount);
};