import React from "react";
import './SortBox.css';
const SortBox = (props) => {
  return (
    <div>
      <select className="sortBox" defaultValue={'DEFAULT'} onChange={props.onSortInputChangeHandler}>
        <option value="DEFAULT" >All Movies</option>
        <option value="ByYear">Sort By Year</option>
      </select>
    </div>
  );
};
export default SortBox;
