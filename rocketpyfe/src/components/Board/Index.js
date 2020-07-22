import React,{useState} from 'react'
import produce from 'immer';

import {loadLists} from '../../services/api';

import BoardContext from './context'

import List from '../List/Index'

import {Container} from './styles';


const data = loadLists()

export default function Board(){
    const [lists,setList] = useState(data)

    function move(fromList,toList,from,to){
          setList(produce(lists, draft =>{

            const dragged =draft[fromList].cards[from];
            draft[fromList].cards.splice(from,1);
            draft[toList].cards.splice(to,0,dragged)
        }))
    }

    return(
        <BoardContext.Provider value={{lists,move}}>
        <Container>
            {lists.map((list,index) =>(
                <List key={list.title} index=
                {index} data={list}></List>
            ))}
        </Container>
        </BoardContext.Provider>
    )
}

