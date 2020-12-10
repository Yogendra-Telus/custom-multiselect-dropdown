import React, { Component } from "react";
import { Multiselect } from "./multiselect/multiselect.component";

function App() {
  return (
    <>
      <MultiSelectDropDown />
    </>
  );
}

export default App;

export class MultiSelectDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
      objectArray: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
        { key: "Option 3", cat: "Group 1" },
        { key: "Option 4", cat: "Group 2" },
        { key: "Option 5", cat: "Group 2" },
        { key: "Option 6", cat: "Group 2" },
        { key: "Option 7", cat: "Group 2" },
      ],
      selectedValues: [
        { key: "Option 1", cat: "Group 1" },
        { key: "Option 2", cat: "Group 1" },
      ],
    };
    this.style = {
      chips: {
        background: "red",
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px",
      },
      multiselectContainer: {
        color: "red",
      },
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
  }
  render() {
    const { plainArray, objectArray, selectedValues } = this.state;
    return (
      <Multiselect
        options={objectArray} // Options to display in the dropdown
        selectedValues={[]} // Preselected value to persist in dropdown
        showCheckbox={true}
        groupBy="cat"
        displayValue="key" // Property name to display in the dropdown options
        style={this.style}
        closeOnSelect={false}
      />
    );
  }
}
