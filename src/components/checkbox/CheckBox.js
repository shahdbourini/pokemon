import React, { useState } from "react";
// import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import MultiSelect from "react-multi-select-component";
import './style_check.css';

// const options = [
//   { label: 'Thing 1', value: 1},
//   { label: 'Thing 2', value: 2},
// ];

export default function Check() {
  // const [selectedOption, setSelectedOption] = useState(options);
  const options = [
    { label: "Fire", value: "Fire" },
    { label: "Normal", value: "Normal" },
    { label: "Electric ", value: "Electric" },
    { label: "Water ", value: "Water" },
  ];

    const options2=[
    { label: "Fire2 ", value: "Fire2" },
    { label: "Normal2 ", value: "Normal2" },
    { label: "Electric2 ", value: "Electric2" },
    { label: "Water2 ", value: "Water2" },
    
  ];

  const options3=[
    { label: "Fire3", value: "Fire3" },
    { label: "Normal3 ", value: "Normal3" },
    { label: "Electric3 ", value: "Electric3" },
    { label: "Water3 ", value: "Water3" },
    
  ];

  
 
  const [selected, setSelected] = useState([]);
  const [selected2, setSelected2] = useState([]);
  const [selected3, setSelected3] = useState([]);
  
  return (
    <>

<div className="row check">

    <div class="col-auto my-1 select">
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Tipo"}
        hasSelectAll={false}
        disableSearch={true}
      />
</div>

   <div class="col-auto my-1 select">
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options2}
        value={selected2}
        onChange={setSelected2}
        labelledBy={"Ataque"}
        hasSelectAll={false}
        disableSearch={true}
      />
</div>

<div class="col-auto my-1 select ">
      {/* <pre>{JSON.stringify(selected)}</pre> */}
      <MultiSelect
        options={options3}
        value={selected3}
        onChange={setSelected3}
        labelledBy={"Experiencia"}
        hasSelectAll={false}
        disableSearch={true}
       
      />
</div>


      </div>

    </>
  );
}