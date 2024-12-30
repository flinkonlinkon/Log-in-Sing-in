import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.config';
import axios from 'axios';
import { data } from 'react-router-dom';

// api key = 20bW9QOEfRMK5WAe4JrvRnS601hC5rASI7YgkPkz 

export const ConText = createContext(null)

export default function ContextProvider({children}) {

    // let url = 'https://api.watchmode.com/v1/sources/?apiKey=20bW9QOEfRMK5WAe4JrvRnS601hC5rASI7YgkPkz';
    let [api,setApi] = useState([])

    useEffect(()=>{
        async function apiData() {
            axios.get('https://api.watchmode.com/v1/releases/?apiKey=20bW9QOEfRMK5WAe4JrvRnS601hC5rASI7YgkPkz')
            .then(data => setApi(data.data.releases))
            
        }
        apiData()
    },[])

    function signInWithEmailAndPassword(email,password){
        return signInWithEmailAndPassword(auth,email,password)

    }

    function signUp(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }

  return <ConText.Provider value={{signInWithEmailAndPassword,api}}>{children}</ConText.Provider>


}
