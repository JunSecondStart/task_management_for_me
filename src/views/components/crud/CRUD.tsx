import React, { useState, useEffect, FormEvent } from 'react';
import { getEnvironmentData } from 'worker_threads';
import { read_items, create_item, update_item, delete_item } from '../../../api';
import { taskContext, taskState, apiContext, endpoint } from '../../../types';
import App from "./../../../App";
import { getAPI } from "../../../api/get";
import { item } from '../../../types';
import { isModifierLike } from 'typescript';

// const Crud: React.FC<props>  = ( items:items ) => {
export const CRUD: React.FC = () => {
    const [buttonA, setButtonA] = useState(false);
    const [res, setRes] = useState<item[]>([
        {
            id: 0,
            name: "ghost",
            param1: 0,
            param2: 0,
            param3: 9999
        }
    ]);
    // const endpoint = "http://localhost:8001/items/"
    const endpoint = "http://127.0.0.1:8888/fastAPI_sample/items/"
    // const [data, setData] = useState(null);

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
      
      
    // useEffect(() => {
    //     const fetchData = async () => {
    //         let res = await getAPI(endpointGet);
    //         console.log(res)
    //     }
    //     fetchData();
    // },[buttonA])

    useEffect(() => {
        const fetchData = async () => {
        //   try {
            let res = await getAPISample(endpoint);
            console.log(res);
            setRes(res);
            // setData(res);
        //   } catch (error) {
        //      console.error('Error fetching data:', error);
        //   }
        };
        fetchData();
        console.log("呼んでるよ")
      }, [buttonA]); 

    const get = () => {
        setButtonA(!buttonA);
    }

    const [get_items, setItems] = useState([
        {
            id:1,
            param1:100,
            param2:50,
            param3:0,
            name: "mono"
        },
    ]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');



    useEffect(() => {
        fetchItems();
    }, [buttonA]);

    const fetchItems = async () => {
        const response = await read_items();
        setItems(response.data);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await create_item();
        fetchItems();
        setName('');
        setDescription('');
    };

    const handleDelete = async (id:number) => {
        await delete_item(id);
        fetchItems();
    };

    return (
        <div className="App">
            <div>
                <button className="text-xl" onClick={get}>getAPI</button>
            </div>
            <h1>Items</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Item</button>
            </form>
            <ul>
                {get_items.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.param1} {item.param2} {item.param3} 
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <h1>App Component</h1>
                <button onClick={() => setButtonA(!buttonA)}>push!!you can look all data.</button>
                {/* {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
            </div>
            <ul>
                {res.map(item => (
                    <li key={item.id}>
                        {item.name}: {item.param1} {item.param2} {item.param3} 
                    </li>
                ))}
            </ul>
        </div>
    );
}
