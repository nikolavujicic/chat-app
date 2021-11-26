import React, { useState, useEffect } from 'react'
import { http } from 'services/http'
import './ChatAppPage.css';

const { REACT_APP_TOKEN } = process.env
const ChatAppPage = () => {
    const [messages, setMessages] = useState([])
    
    useEffect(() => {
        fetchMessages()
    }, [])


    const fetchMessages = async () => {
        var dt = new Date();
        console.log(dt.getTime())
        const time_now = dt.getTime()
        const res = await http.get(`/?&token=${REACT_APP_TOKEN}`)
        console.log(res.data)
        setMessages(res.data.reverse())
    }

    return <div className='chat-app'></div>

}

export default ChatAppPage