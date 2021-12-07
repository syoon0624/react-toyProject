import React, { useEffect, useState } from 'react'
import axios from "axios"

const Test = () => {
    const [list, setList] = useState([]);
    const [query, setQuery] = useState('');

    const todoApi = {
        get: async () => {
            const { data }  = await axios({
                method: 'GET',
                url: `/navers?query=${query}`
            });
            setList(data.items);
            return data;
        }
    }
    const searchList = async () => {
        await todoApi.get();
    }
    // useEffect(() => {
    //     todoApi.get();
    // },[])
    
    return (
        <div>
            <input onChange={e => {
                setQuery(e.target.value);
            }}/>
            <button onClick={() => searchList()}>검색</button>
            <br />
            {list ? list.map(ele => {
                return ele.title
            }) : '검색결과 x' }
        </div>
    )
}

export default Test
