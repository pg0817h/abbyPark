import React, {useLayoutEffect,useRef, useState } from 'react';
import Aux from '../../components/hoc/Aux';
import About from '../../components/About/About';
import styled from 'styled-components';
const Home = () => {
    const [show,doShow] = useState({
        itemOne: false
    });
    const [activeUsers,setactiveUsers] = useState([]);
    const ourRef = useRef(null);
    const fetchHandler = () => {
        let pagesRequired;
        let nomalUsers = [];
        fetch('https://jsonmock.hackerrank.com/api/article_users/search?page=1') //default 'get', fetch returns promise.
        .then(response => { // Sending a http request is an asynchronous task.
             return response.json();    //response return json data which needs to be transformed => response.json()
        }).then(data => {

            const apiPromises = [];
            pagesRequired = data.total_pages;
            for(let i =pagesRequired; i >0; i--){
                    apiPromises.push(fetch('https://jsonmock.hackerrank.com/api/article_users/search?page=' + i));
            }

            Promise.all(apiPromises)
                .then(res => {
                    const processedResponses = [];
                    
                    res.map(res => {
                    
                        processedResponses.push(res.json());
                    })
                  
                   
                      processedResponses.map((res => {
                        res.then( data =>{
                           
                            data.data.map(res => {
                               
                                if(res.submission_count > 10){
                                   nomalUsers.push(res.username)
                                
                               
                                }
                               
                            })

                           
                         
                        })
                       
                       
                    }))
                 
                })

       console.log(nomalUsers)
        //   const activeUsers = nomalUsers.filter(el => el === 0 || Boolean(el));
        //    console.log(activeUsers)
       
         
        })
    }
    useLayoutEffect(() => {
        const topPos = element => element.getBoundingClientRect().top;
        const div1Pos = topPos(ourRef.current);
     
     
        const onScroll = () => {
            const scrollPos =  window.innerHeight;
          
            if(div1Pos + window.scrollY < scrollPos){
                doShow(state => ({...state, itemOne: false}));
            }  else {
                doShow(state => ({...state, itemOne: true}));
            }
            
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll",onScroll);


    }, []);
    
    return (
        <Aux >
          
    
           <div>Hello</div>
           <div>
           <About animate={show.itemOne} />
           </div>
           <div ref={ourRef}>test</div>
           <button onClick={fetchHandler}>fetchHandler button</button>
           <div>test</div>
           <div>test</div>
           <div>test</div>

           
          
                 
           
           
        </Aux>
    );
   

    
}

export default Home;