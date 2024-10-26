import React from 'react'
import { CreateNodeCard } from '@/components/CreateNodeCard';
import { AiFillMessage } from "react-icons/ai";
import { BsQuestionSquare } from "react-icons/bs";
import { CiBacon } from "react-icons/ci";
import { nanoid } from 'nanoid';
import { Node } from '@xyflow/react';

interface INodesContainer{
  className?: string;
  setNodes: any;
}

export const NodesContainer = ({className, setNodes}:INodesContainer) => {
  

  const addNode = (nodeType:string, data?:string) => {
    const id = nanoid();
    const newNode = {
      id,
      type: nodeType  ,
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: data || '',
    };
    setNodes((prevNodes:Node[]) => [...prevNodes, newNode]);
  };
  return (
    <div className={`p-4 flex flex-col space-y-4 bg-gray-100 ${className}`}>
        <CreateNodeCard onClick={()=>addNode('message') }  className='bg-red-400'  icon={AiFillMessage}  title='Send a message' content='with no response required from visitor'/>
        <CreateNodeCard onClick={()=>addNode('question') }  className='bg-orange-400' icon={BsQuestionSquare} title='Ask a question' content='Ask question and store user input in variable'  />
        <CreateNodeCard onClick={()=>addNode('condition') } className='bg-blue-400' icon={CiBacon} title='Set a condition' content='Send message(s) based on logical condition(s)' />
    </div>
  )
}

