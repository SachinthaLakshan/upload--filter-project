import React, { useState } from 'react';

import ReactFlow, {
  removeElements,
  addEdge,
} from 'react-flow-renderer';
import {getFlowTypes,getFlow,getProcessDetails} from '../service';


const initialElements = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },
  {
    id: '2',
    data: { label: 'Another Node' },
    position: { x: 100, y: 125 },
  },
];


const OverviewFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  var elements1 = [];
  const [flowTypeId,setFlowTypeId]=useState(1);
  
  var flowElemets = getFlow(flowTypeId);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  flowElemets.forEach((item) => {
    elements1.push(
      {
        id: `from-${item.fromProcessId}`,
        type: "input",
        data: {
          label: (
            <div>
              <h3>{getProcessDetails(item.fromProcessId)?.name}</h3>
              <h4>{getProcessDetails(item.fromProcessId)?.description}</h4>
              <p>Duration:{getProcessDetails(item.fromProcessId)?.avgDuration}</p>
            </div>
          ),
        },
        position: {
          x: randomIntFromInterval(25, 300),
          y: randomIntFromInterval(25, 300),
        },
      },
      {
        id: `to-${item.toProcessId}`,
        type: "output",
        data: {
          label: (
            <div>
              <h3>{getProcessDetails(item.toProcessId)?.name}</h3>
              <h4>{getProcessDetails(item.toProcessId)?.description}</h4>
              <p>Duration:{getProcessDetails(item.toProcessId)?.avgDuration}</p>
            </div>
          ),
        },
        position: {
          x: randomIntFromInterval(25, 300),
          y: randomIntFromInterval(25, 300),
        },
      },
      {
        id: `e-${randomIntFromInterval(25, 300)}`,
        source: `from-${item.fromProcessId}`,
        target: `to-${item.toProcessId}`,
        animated: true
      
      }
    );
  });
  setElements(elements1);
  const flowButtonClickHandler = (data) => {
    setFlowTypeId(data);
  };
const getFloyTYpeById=(id)=>{
  var flowType;
  const flowTypes=getFlowTypes();
  flowType=flowTypes[id-1].name;
  return flowType;
}

  return (
    <div className="card">
      <table>
        <tr>
          <th style={{ color: "#fff" }}>Selected Flow : {getFloyTYpeById(flowTypeId)} </th>
        </tr>
        {getFlowTypes().map((flow_type) => {
          return (
            <tr key={flow_type.id}>
              <td className={flowTypeId===flow_type.id?"selected123":""} onClick={() => flowButtonClickHandler(flow_type.id)}>
                {flow_type.name}
              </td>
            </tr>
          );
        })}
      </table>
      <div style={{ height: 1000 }}>
        <ReactFlow elements={elements}
        onElementsRemove={onElementsRemove}
        onConnect={onConnect}
        deleteKeyCode={46} /* 'delete'-key */ />
      </div>
    </div>
  );
};

export default OverviewFlow;