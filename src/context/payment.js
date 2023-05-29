import React, {Component,useRef,useState,useEffect} from "react";
import styles from "../css/payment.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputMask from 'react-input-mask'
import masterCardLogo from '../css/mastercard.png'

export const Payment=(props)=>{



    

    

    return(
        <div className='payment_holder'>
            <header>
                <div className="logo">
                    
                   <h2>L</h2>
                </div>

                <div className="timer">
                    <div className="time"><p>0</p><p>1</p></div><span> : </span><div className="time"><p>1</p><p>9</p></div>
                </div>
            </header>

            
        <form action="">

        
        

        <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
            noValidate autoComplete="off">

            <section>
                
                    <div className="info_text">
                        
                        <p><h2>Card Number</h2>Enter the 16-digit card number on the card</p>

                        <div className="icons">
                            G
                        </div>
                    </div>

                    <div className="input_holder">
                        <div className="icons">
                            <img src={masterCardLogo} alt=""  className="input_ms_icon"/>
                        </div>
                    

                        <InputMask 
                        mask='9999 - 9999 - 9999 - 9999'
                        placeholder="0000 - 0000 - 0000 - 0000"
                        className="cardInput"
                        id='cardInput'
                        ref={props.cd_input}
                        onChange={props.cardInput}
                        // value={props.data.card_number}
                        >
                        </InputMask>


                        <div className="icons">
                            I
                        </div>

                    </div>
                
                
            </section>

            





            <section className="info"><br />
                
                    <div className="info_text">
                        <h4>CVV Number</h4>
                        <p>Enter the 3 or 4 digit number on the card</p>
                    </div>



                    <div className="input_holder">
                        <TextField
                        
                        
                        style={{width:'70%'}}
                        onChange={props.cardInput}
                        inputRef={props.cvv}
                        sx={{border: 'none', "& fieldset": { border: 'none' },input: {textAlign: "center"}}}
                        />
                        <div className="icons">
                            I
                        </div>
                    </div>
                    
                    
            </section>







            <section>
                    <div className="info_text_3">
                        <h4>Expiry Date</h4>
                        <p>Enter the expiration date of the card</p>
                    </div>



                <div>

                    <TextField
                        
                        className="expiry_data"
                        style={{width:'42%', textAlign:'center'}}
                        sx={{input: {textAlign: "center"}}}
                        inputRef={props.exp1}
                        onChange={props.cardInput}
                        />

                            <h2>/</h2>
                        <TextField
                        
                        className="expiry_data"
                        style={{width:'42%',textAlign:"center"}}
                        sx={{input: {textAlign: "center"}}}
                        inputRef={props.exp2}
                        onChange={props.cardInput}
                        />

                </div>
                   
            </section>





            <section>
                    <div className="info_text_4">
                        <h3>Password</h3>
                        <p>Enter your dynamic password</p>
                    </div>


                    <div className="input_holder">
                        <TextField
                        
                        inputRef={props.pw}
                        style={{width:'70%'}}
                        sx={{border: 'none', "& fieldset": { border: 'none' },}}
                        onChange={props.cardInput}
                        />
                        <div className="icons">
                            I
                        </div>
                    </div>
            </section>


            <Stack direction="row" spacing={2} className="button">
            <Button variant="contained" style={{width:'100%', height:'50px'}} onClick={props.makepayment}>Pay Now</Button>
            
            </Stack>
    </Box>

    </form>
            
        </div>
    )
}
