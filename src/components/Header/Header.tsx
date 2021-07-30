import React from "react";
import './header.css';

//icos
import { FiPlus } from "react-icons/fi";

export default function Header(prop: any)  {

    return (
        <header className="header">
            <span>Tarvos - Shorten links</span>
            <div className="show-all">
            <FiPlus />
            </div>
        </header>
    );
}