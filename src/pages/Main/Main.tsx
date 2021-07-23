import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import api from '../../services/api';
import './main.css';

//components
import Header from '../../components/Header/Header';

//interrfaces
import { IShorten } from '../../interfaces /Interfaces'; 


export default function Calendar(props: any) {

    const [url, setUrl] = useState<IShorten>();

    /**
     * Metodo que recupera o valor de um input
     * @param e 
     */
    const handlerInput = (e: any) => {
            const { value } = e.target;
            setUrl(value);
    }

    /**
     * Metodo que faz a inserção da url na api
     * @param e 
     */
    const handlerSubmit = (e: any) => {
        e.preventDefault();
       
    }

    console.log(url);
    
    return (
        <main className="main-container">

            <Header />

            <div className="content-main">
                <main className="box-main">
                    <div className="box-inputs">
                    <span className="box-span"><b>Shorten your links, Speed up results!</b></span>
                        <div className="input-group">
                            <input className="input-short" type="text" placeholder="Enter your URL" name="url" id="url" onChange={handlerInput} />
                            <input className="input-submit" type="submit" value="Shorten" onClick={handlerSubmit} />
                        </div>
                    </div>
                </main>
            </div>


        </main>
    );

}