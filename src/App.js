import React from 'react';
import Graphin, {Behaviors, Components} from '@antv/graphin';
import {ContextMenu} from '@antv/graphin-components';
import {faPenToSquare, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import ShowPath from "./components/ShowPath"
import {HandleData} from "./handleData/HandleData";

const data = HandleData();
const {Menu} = ContextMenu;
const {MiniMap, Tooltip} = Components;
const {Hoverable, ActivateRelations} = Behaviors;

const App = () => {
  //Tooltip get data => content
  const getData = (data)=>{
    let content = "";
    for (const dataKey in data) {
      if (dataKey!=="relationship"&&dataKey!=="type"&&dataKey!=="LOs"){
        content+=`\n${dataKey.toUpperCase()}: ${data[dataKey]}\n`
      }
    }
    return content;
  }


  return (
    <div style={{height: "100vh"}}>
      <Graphin data={data} layout={{type: "graphin-force"}} theme={{mode: "dark"}}>
        <Hoverable bindType="node"/>
        <Hoverable bindType="edge"/>

        <ActivateRelations trigger="click"/>
        <ShowPath/>
        <ContextMenu bindType="node" style={{width: 200}}>
          <Menu bindType="node"
                options={[
                  {
                    key: 'expand',
                    icon: <FontAwesomeIcon icon={faPlus} size={"sm"}/>,
                    name: 'expand',
                  },
                  {
                    key: 'edit',
                    icon: <FontAwesomeIcon icon={faPenToSquare} size={"sm"}/>,
                    name: 'edit',
                  },
                  {
                    key: 'delete',
                    icon: <FontAwesomeIcon icon={faTrashCan} size={"sm"}/>,
                    name: 'Delete',
                  },
                ]}
            // onChange={handleChange}
          />
        </ContextMenu>
        <MiniMap/>
        <Tooltip bindType="node" placement={"right"}
                 style={{width: "200px", color: "#fff", backgroundColor: "black"}}>
          {(value) => {
            if (value.model) {
              const {model} = value;
              return (
                <div>
                  <p>ID: {model.id}</p>
                  {getData(model.data)}
                </div>
              );
            }
            return null;
          }}
        </Tooltip>
      </Graphin>
    </div>
  );
};

export default App;