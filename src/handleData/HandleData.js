import React from 'react';

import {faPenToSquare, faPlus, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

//suppose each one have diff collection
//or we should save them in one collection,and give a "type" property?
import {entities, programmes, categories, courses} from "./InputData"

const nodeStyle = {
  entity: {
    keyshape: {
      size:50,
      fill:"#f38c49",
      fillOpacity:1,
      stroke:"#f38c49",
    },
    icon:{
      type:"font",
      value:`\u{1F602}`,
    }
  },
  programme: {
    keyshape: {
      size:30,
      fill:"#36c794",
      fillOpacity:1,
      stroke:"#36c794",
    },
    icon:{
      type:"font",
      value:"P",
    }
  },
  category: {
    keyshape: {
      size:30,
      fill:"rgba(101,171,7,0.66)",
      fillOpacity:1,
      stroke:"rgba(101,171,7,0.66)",
    },
    icon:{
      type:"font",
      value:"Ctg"
    }},
  course: {
    keyshape: {
      size:20,
      fill:"#c7c036",
      fillOpacity:1,
      stroke:"#c7c036",
    },
    icon:{
      type:"font",
      value:"C"
    }},
}

const edgeStyle = {
  parent: {
    keyshape:{
      stroke:"#fff",
    }
  },
  mapping: {
    keyshape:{
      stroke:"#e14fef",
    }
  },
  category: {
    keyshape:{
      stroke:"#71bd1c",
    }
  },
  course: {
    keyshape:{
      stroke:"#c7c036",
    }
  },
}


export const HandleData = () => {
  const nodes = [];
  const edges = [];

  const dataHandler = (collection, type) => {
    collection.map((originalData) => {
      //initial node structure
      const node = {
        id: originalData.id,
        data: {
          type: type,//entity||programme||category||course
        },
        style: {
          ...nodeStyle[type],
          label: {
            value: originalData.code || originalData.id,
          },
        }
      };

      for (const nodeKey in originalData) {
        //copy properties to node
        if (nodeKey !== "id") {
          node.data[nodeKey] = originalData[nodeKey];
        }
        //relationship handler => edge
        if (nodeKey === "relationship") {
          for (const nodeKey2 in originalData["relationship"]) {
            const push = (edge) => {
              edges.push({
                id: `${originalData.id}-${edge.target}`,
                source: originalData.id,
                target: edge.target,
                data:{
                  type:nodeKey2
                },
                style:{
                  // ...edgeStyle[nodeKey2],
                  keyshape:{
                    lineWidth:2,
                    stroke:edgeStyle[nodeKey2].keyshape.stroke,
                  },
                }
              });
            }
            Array.isArray(originalData["relationship"][nodeKey2]) ?
              originalData["relationship"][nodeKey2]//if it is an array
                .forEach((edge) => {push(edge)})
              :
              push(originalData["relationship"][nodeKey2]);//if it is an object
          }
        }
      }
      nodes.push(node);
    })
  }

  dataHandler(entities, "entity")
  dataHandler(courses, "course")
  dataHandler(categories, "category")
  dataHandler(programmes, "programme")
  console.log({nodes, edges})
  return {nodes, edges}
};




