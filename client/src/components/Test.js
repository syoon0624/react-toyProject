import React, { useEffect, useState } from 'react'
import axios from "axios"
import Product from './Product';
import styled from 'styled-components'


const Listwrap = styled.div`
    display: flex;
    flex-direction: column;
`;

const Test = () => {
    //무한 스크롤 구현
    const [target, setTarget] = useState(null);

    const [list, setList] = useState([]);
    const [query, setQuery] = useState('');
    const [page, setPage] = useState(1);


    const onIntersect = async ([entry], observer) => {
        console.log("?")
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await searchList();
          observer.observe(entry.target);
        }
      };
    
      useEffect(() => {
        let observer;
        if (target) {
          observer = new IntersectionObserver(onIntersect, {
            threshold: 0.4,
          });
          observer.observe(target);
        }
        return () => observer && observer.disconnect();
      }, [target]);



    const todoApi = {
        get: async () => {
            const { data }  = await axios({
                method: 'GET',
                url: `/navers?query=${query}&start=${page}`
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
        <Listwrap>
            <input onChange={e => {
                setQuery(e.target.value);
            }} onKeyPress={e => {
                if(e.key === "Enter") {
                    searchList();
                }
            }}/>
            <button onClick={() => searchList()}>검색</button>
            <br />
            {list ? list.map(ele => {
                
                return <Product items = {ele}/>
            }) : '검색결과 x' }
            <div ref = {setTarget} >??</div>
        </Listwrap>
    )
}

export default Test
