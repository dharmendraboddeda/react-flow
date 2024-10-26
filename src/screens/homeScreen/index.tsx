import React, { useState } from 'react';
import { ReactFlow, addEdge, Background, useNodesState, useEdgesState, MiniMap, Panel, Controls, NodeTypes, EdgeTypes, Node, Edge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { CiExport } from "react-icons/ci";
import { QuestionNode } from '@/components/QuestionNode';
import { NodesContainer } from '@/containers/NodesContainer';
import { MessageNode } from '@/components/MessageNode';
import { ConditionNode } from '@/components/ConditionNode';

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]); 
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]); 

const handleExport = () => {
  const data = {
    nodes,
    edges,
    flowNodes: nodes.map((node:Node) => ({
      id: node.id,
      flowNodeType: node.type,
      flowNodePosition: node.position,
      // flowReplies: node.replies || [],
      // isStartNode: node.isStartNode || false,
    })),
    flowEdges: edges.map((edge:Edge) => ({
      id: edge.id,
      sourceNodeId: edge.source,
      targetNodeId: edge.target,
    })),
    lastUpdated: new Date().toISOString(),
  };

  const json = JSON.stringify(data, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.json';
  a.click();
  URL.revokeObjectURL(url);
};



  return (
    <div className="h-screen flex flex-row">
      <NodesContainer className='text-white' setNodes={setNodes} />
      <div className="flex-grow h-[70%]">
        <div className=' flex p-10 w-[100%] flex-row-reverse'>
           <button onClick={handleExport} className="p-2 bg-blue-500 text-white">
              <CiExport />
          </button>
        </div>
        <ReactFlow 
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
          nodeTypes={{ question: QuestionNode, message:MessageNode, condition:ConditionNode }}
          fitView
        >
          <Background />
          <MiniMap />
          <Controls />
        </ReactFlow>
      </div>

    </div>
  );
}

export default App;
