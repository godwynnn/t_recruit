import React,{useEffect,useContext,useState, createContext, useRef} from "react";
import { Receipt } from "./receipt";
import { Payment } from "./payment";
import styles from "../css/root.css"


export function Root({children}){

    const PaymentContext=createContext()
    const [cardData,setCardData]=useState({
                                    card_number:'',
                                    cvv_number:'',
                                    exp_data:'',
                                    password:''
                                })

    const card_input=useRef()
    const cvv=useRef()
    const exp1=useRef()
    const exp2=useRef()

    const pw=useRef()
    
    
    function MakePayment(e){
        // e.target.classList.add('active')
        document.getElementById('receipt').classList.add('active')
        console.log(cardData)
    }

    function cardInput(){
        const card_num=card_input.current.value.split('-')
        const exp=exp1.current.value+'/'+exp2.current.value

        
        console.log(cvv.current.value)
        setCardData({
            card_number:card_num[card_num.length-1],
            cvv_number:cvv.current.value,
            exp_data:exp,
            password:pw.current.value

        })
        


        
    }

    return(
        <>

            <main >
                <div className='root' >
                        <Payment makepayment={(e)=>MakePayment(e)} 
                        cd_input={card_input}
                        cvv={cvv}
                        exp1={exp1}
                        exp2={exp2}
                        pw={pw} 
                        cardInput={cardInput}
                        data={cardData}
                        />
                        <Receipt
                        data={cardData}
                        
                        />
                        <p className="close">x</p>
                    </div>
            </main>

            
        
        </>
    )
}