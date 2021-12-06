import React from 'react'
import axios from "axios"

const url = '/v1/search/shop.json?query=test';
const headers= {
    'X-Naver-Client-Id': 'pttbjNcjRSb3O564LKDC',
    'X-Naver-Client-Secret': 'EEDwGdWxJX',
}

const todoApi = {
    get: async () => {
        const { data }  = await axios({
            method: 'GET',
            url,
            headers,
        });
        return data;
    }
}

const Test = () => {
    const a = todoApi.get();
    console.log(a);
    return (
        <div>
            
        </div>
    )
}

export default Test
