import React, { useState, useEffect} from "react";

function WidthHeight (){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setheight] = useState(window.innerHeight);

    useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTNER ADDED");

    return () => {
        window.removeEventListener("resize", handleResize);
        console.log("EVENT LISTNER REMOVED");
    }
}, []);

useEffect (() => {
    document.title = `Size: ${width} x ${height}`;
}, [width, height]);

    function handleResize (){
        setWidth(window.innerWidth);
        setheight(window.innerHeight);
    }

    return(
    <>
    <p>Window Width: {width}px</p>
    <p>Window Height: {height}</p>
    </>
    );
}

export default WidthHeight