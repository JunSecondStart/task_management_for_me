import React, { useState, useEffect, FormEvent } from 'react';
import { getEnvironmentData } from 'worker_threads';
import { read_items, create_item, update_item, delete_item } from '../../../api';
import { item,taskContext, taskState, apiContext, endpoint } from '../../../types';
import App from "../../../App";
import { getAPI } from "../../../api/get";
import axios,{ AxiosResponse } from 'axios';
import { response } from 'express';

// const Crud: React.FC<props>  = ( items:items ) => {
export const AxiosGet: React.FC = () => {
    const [axiosFlg, setAxiosFlg] = useState<boolean>(false);
    const [items, setItems] = useState<item[]>([{
        id: 0,
        name: "",
        param1: 0,
        param2: 0,
        param3: 0
    }]);

    useEffect(()=>{
        // 指定された ID のユーザーに対してリクエストを行う
        axios.get('http://127.0.0.1:8008/fastAPI_sample/items/')
        .then(function (response: AxiosResponse) {
            // 処理が成功した場合
            setItems(response.data);
            console.log("items:",items);
        })
        .catch(function (error:AxiosResponse) {
            // エラー処理
            console.log(error);
            return error;
        })
        .then(function () {
            // 常に実行
        });
    },[axiosFlg])

    const axios_get =()=> {
        setAxiosFlg(!axiosFlg);
        console.log(axiosFlg)
    }

    return (
        <div className="App">
            <div>axios</div>
            <div><button onClick={()=>axios_get()}>右クリック→検証→コンソール→押す</button></div>
            <div>aaa
                {items.map((a,i)=>(<div>No{i}:{a.id}:{a.name}:{a.param1}:{a.param2}:{a.param3}</div>))}
            </div>
        </div>
    );
}
