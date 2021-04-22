import React from 'react';
import './About.css';
import styled from "styled-components";
import Aux from '../hoc/Aux';

const about = (props) => {
   
    return (
        <Aux>
        <div className="About">
        <div>My name is</div>
            <span className="layout">
                <span className="one">
                    <span 
                        style={{
                                transition: props.animate ? 'color 0.5s ease-out' : '',
                                color:props.animate ? 'blue' : 'black',
                        }}>Geon   
                    </span>
                    hyeong.
                </span>    
                <span 
                    className="name_des"
                    style={{
                    transform: props.animate ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.animate ? '1' : 0,
                 }}
                >YES, it's pronounced just like the GUN</span>     
                        
                <span className="two">
                        <img 
                            
                            
                            className="gif" 
                            src="https://media.giphy.com/media/1Be4g2yeiJ1QfqaKvz/giphy.gif"
                            style={{
                                // transform: props.animate ? 'translateY(0)' : 'translateY(-200vh)',
                                opacity: props.animate ? '2' : 0,
                                transitionDuration: props.animate? '0.2s' : 0,
                                transitionDelay: props.animate? '0.1s' : 0,
                            }}
                            />
                    </span>
                </span>     

           
            </div>
               

        
   
        
   
        </Aux>
    )
   
};


export default about;