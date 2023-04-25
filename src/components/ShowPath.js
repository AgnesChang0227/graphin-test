import React, {useContext} from "react";
import {GraphinContext} from "@antv/graphin";

const color = {
  parent:"#fff",
  mapping:"#e14fef",
  category:"#71bd1c",
  course:"#c7c036",
}
const ShowPaths = () => {
  const { graph } = useContext(GraphinContext);
  const nodes = graph.getNodes();
  const edges = graph.getEdges();
  const paths = pathsHandler();

  function pathsHandler (){
    const path = [];// {type:"",edges:[],nodes:[]}
    edges.map((edge)=>{
      const edgeData = edge.getModel();
      const type =edgeData.data.type;

      let pathIndex =path.findIndex((item)=>item.type===type);
      if (pathIndex===-1){
        path.push({type:type,edges:[],nodes:[]});
        pathIndex=path.length-1;
      }

      const push=(arr,item)=>{
        if (!arr.includes(item)){
          arr.push(item);
        }
      }
      push(path[pathIndex].edges,edgeData.id);
      push(path[pathIndex].nodes,edgeData.source);
      push(path[pathIndex].nodes,edgeData.target);
    })
    // console.log(path);
    return path;
  }

  function handleShowPath(path) {
    nodes.forEach(node => {
      const model = node.getModel();
      if (!path.nodes.includes(model.id)) {
        graph.setItemState(node, 'inactive', true);
      }
    });
    edges.forEach(edge => {
      const model = edge.getModel();
      if (!path.edges.includes(model.id)) {
        graph.setItemState(edge, 'inactive', true);
      } else {
        graph.setItemState(edge, 'active', true);
      }
    });
  }
  function handleClear(path) {
    nodes.forEach(node => {
      const model = node.getModel();
      if (!path.nodes.includes(model.id)) {
        graph.setItemState(node, 'inactive', false);
      }
    });
    edges.forEach(edge => {
      const model = edge.getModel();
      if (!path.edges.includes(model.id)) {
        graph.setItemState(edge, 'inactive', false);
      } else {
        graph.setItemState(edge, 'active', false);
      }
    });
  }

  return (
    <div style={{ position: 'absolute', top: 5,color:"#fff"}}>
      <ul className="status-ul">
        <h3>Show Paths:</h3>

        {paths.map((path, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li key={index} onMouseEnter={() => handleShowPath(path)} onMouseLeave={() => handleClear(path)}
              style={{color:color[path.type]}}>
              {path.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowPaths;