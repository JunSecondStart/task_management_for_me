import React, { useState, useEffect } from 'react';
import { item } from '../../../types';
import axios from 'axios';
import MockAdapter from "axios-mock-adapter";

// const Crud: React.FC<props>  = ( items:items ) => {
export const MockRead: React.FC = () => {
    const [buttonA, setButtonA] = useState(false);
    const [buttonB, setButtonB] = useState(false);
    const [buttonC, setButtonC] = useState(false);
    const [res, setRes] = useState<item[]>([
        {
            id: 999,
            name: "pochi",
            param1: 100,
            param2: 20,
            param3: 250
        }
    ]);
    const endpoint = "http://localhost:3000/mockread"

    const getAPISample = async (endpoint: string): Promise<any> => {
        const response = await fetch(endpoint);
        console.log("response:",response)
        if (!response.ok) {
          throw new Error('It is Bad, Network response was not ok');
        }
        const data = await response.json();
        console.log("data:",data)
        return data;
      };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response_mock = await fetch('./mockread');
            let res = await getAPISample(endpoint);
            console.log(res);
            if (!response_mock.ok) {
                throw new Error(`HTTP error! status: ${response_mock.status}`);
            }
            setRes(res);
          } catch (error) {
             console.error('Error fetching data:', error);
          }
        };
        fetchData();
        console.log("呼んでるよ")
      }, [buttonA]); 

    const get = () => {
        setButtonA(!buttonA);
    }

    const getB = () => {
        setButtonB(!buttonB);
    }

    const getC = () => {
        setButtonC(!buttonC);
        requestGet();
    }

    // mock
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
  
    useEffect(()=>{
    // 基本パターン
    mockAxios.onGet("./mockread",
    {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      }
    }).reply(200, dataAmount);
    console.log(dataAmount);
    console.log(mockAxios.onGet("./mockread").reply(200,dataAmount));
}, [buttonB]); 

const requestGet =()=> {
        axios.get("./mockread").then(response => {
            console.log(response.data); // dataAmountのデータがここで表示されるか確認
            setRes(response.data);      // resにデータを設定
          }).catch(error => {
            console.error("Error fetching mock data:", error);
          });
}

    return (
        <div className="App">
            <div>
                <button className="text-xl" onClick={get}>push!!</button>
            </div>
            <h1>Items Read From Mock</h1>
            <ul>
                {res.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.param1} {item.param2} {item.param3} 
                    </li>
                ))}
            </ul>
            <div>
                <button className="text-xl" onClick={getB}>push!!you can make mock. Next, push buttonC.</button>
            </div>
            <ul>
                {res.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.param1} {item.param2} {item.param3} 
                    </li>
                ))}
            </ul>
            <div>
                <button className="text-xl" onClick={getC}>push!!you can get mock</button>
            </div>
        </div>
    );
}
