import React, {Component,useRef,useState,useEffect} from "react";
import styles from '../css/receipt.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWifiStrong } from "@fortawesome/free-solid-svg-icons";
import { faSimCard } from "@fortawesome/free-solid-svg-icons";
import masterCardLogo from '../css/mastercard.png'


export const Receipt=(props)=>{


    return(
        <div className="receipt" id="receipt">

            <section className="receipt_section">
                <div className="section_1">
                    <FontAwesomeIcon icon={faSimCard}  style={{height:"28px", color:'#6b705c'}}/>
                    <FontAwesomeIcon icon={faWifiStrong} style={{height:"28px",color:'#6b705c'}}/>
                </div>
                <div className="section_1">
                    <p>Jonathan Michael</p>
                    <p>.... {props.data.card_number}</p>
                </div>

                <div className="section_1">
                    <p>{props.data.exp_data}</p>
                    <img src={masterCardLogo} alt="" />
                </div>


            </section>


            <section className="receipt_section">

                <div className="payment_details">
                    <p>Company <span><strong>Apple</strong></span></p>
                    <p>Order Number <span><strong>1266210</strong></span></p>
                    <p>Product <span><strong>MacBook Air</strong></span></p>
                    <p>VAT(20%) <span><strong>Apple</strong></span></p>
                </div>
                <div className="payment_details">
                    <p>you have to pay <br /><h1>549.<small>99<span> USD</span></small></h1></p>
                </div>
            </section>
        </div>
    )
}