import React, { useState, useEffect } from 'react'
import Message from 'components/Message/Message'
import { http } from 'services/http'
import './ChatAppPage.css';
const USER_NAME = 'Nick'

const { REACT_APP_TOKEN } = process.env
const ChatAppPage = () => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [isPosting, setIsPosting] = useState(false)

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


    return (<>
        <div className='chat-app'>
            <div className='messages-window'>
                {messages.map(data => <Message data={data} isAuthor={data.author === USER_NAME} key={data._id} />)}
            </div>
        </div>
    </>
    );

}

export default ChatAppPage