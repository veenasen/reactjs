import React from "react";

function OnDoubleClick() {
	const onDoubleClickCaptureHandler = () => {
		alert("You have Clicked Twice");
	};
	return (
		<div className="App">
			<h1> ON DOUBLE CLICK</h1>
			<button onDoubleClickCapture={
					onDoubleClickCaptureHandler
				}>
				Double Click Me!
			</button>
		</div>
	);
}

export default OnDoubleClick;
