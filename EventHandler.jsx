import React from 'react';

export class EventHandler extends React.Component {

  onDragOver = (e) => {
    let event = e ;
    event.stopPropagation();
  }

  onDragEnter = (e) => {
    let event = e ;
    event.stopPropagation();
  }

  onFileDrop = (e) => {
    let event = e ;
    event.stopPropagation();

    console.log("onFileDrop");
    alert("dropped")
  }

  render() {
    return (
      <div
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDrop={this.onFileDrop}>
        Drag and drop file here
      </div>)
  }
}