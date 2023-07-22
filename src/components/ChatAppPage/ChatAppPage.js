import React, { useState, useEffect } from 'react'
import Message from 'components/Message/Message'
import Footer from 'components/Footer/Footer'
import Loader from 'components/Loader/Loader'
import { http } from 'services/http'
import ChatPooling from 'components/ChatPooling/ChatPooling'
import './ChatAppPage.css';
const USER_NAME = 'NickK'

const { REACT_APP_TOKEN } = process.env

const ChatAppPage = () => {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [isPosting, setIsPosting] = useState(false)

    useEffect(() => {
        fetchMessages()
    }, [])

    const fetchMessages = async () => {
        setLoading(true)
        const res = await http.get(`/?&token=${REACT_APP_TOKEN}`)
        setMessages(res.data.reverse())
        setLoading(false)
    }

    const postMessage = async (message) => {
        setIsPosting(true)
        const data = { "message": message, "author": USER_NAME }
        const res = await http.post('', data)
        setMessages([res.data, ...messages])
        setIsPosting(false)
    }

    const onSuccessPooling = (data) => {
        setMessages(data)
    }

    const onSubmit = (data) => {
        postMessage(data.message)
    }

    return (<>
        {loading && <Loader />}
        <div className='chat-app'>
            <div className='messages-window'>
                {messages.map(data => <Message data={data} isAuthor={data.author === USER_NAME} key={data._id} />)}
            </div>
            <ChatPooling onSuccessPooling={onSuccessPooling} />
            <Footer onSubmit={onSubmit} isPosting={isPosting} />
        </div>
    </>
    );
}

export default ChatAppPage