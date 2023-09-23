import React from "react";
import { createRoot } from "react-dom/client"
import './main.css'

function Popup() {
    return (
        <div className="bg-yellow-500 w-full h-full">
            <h1 className="text-red-600 ">BONJOUR</h1>
            <h2>hey</h2>
            <h2>hey</h2>
            <h2 className=" font-black text-6xl">hey</h2>
            <h2>hey</h2>
            <h2>hey</h2>
            <h2>hey</h2>
        </div>
    )

}

const root = createRoot(document.getElementById('root'));
root.render(<Popup />)