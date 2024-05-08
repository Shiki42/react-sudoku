/* eslint-disable react/prop-types */
import { useState } from 'react';

export default function Tabs({items}) {
  const [value,setValue] = useState(items[0].value);

  return (
    <div>
      {items.map(({label, value:itemValue})=>{
        const active = itemValue === value;
        return <button 
        key = {label}
        className = {[active && 'active-tab'].
        filter(Boolean).join(' ')}
        onClick = {()=>{setValue(itemValue)}}>
        {label}
        </button>
        
      })}
      {value}
      {items.map(({panel, value:itemValue})=>{
        return <div key = {itemValue} hidden = {value !== itemValue}>
         {panel} {value}
        </div>
      })}
    </div>
  );
}
