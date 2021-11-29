import React from 'react'
import { http } from 'services/http'
import ReactPolling from "react-polling";

const { REACT_APP_BASE_URL, REACT_APP_TOKEN } = process.env

const ChatPooling = ({ onSuccessPooling }) => {

    const fetchMessages = () => {
        return http.get(`/?&token=${REACT_APP_TOKEN}`)
    }

    return (
        <ReactPolling
            url={`${REACT_APP_BASE_URL}/?&token=${REACT_APP_TOKEN}`}
            interval={4000}
            retryCount={3}
            onSuccess={resp => {
                onSuccessPooling(resp.data.reverse())
                return true;
            }}
            method={"GET"}
            promise={fetchMessages}
            render={() => <></>}
        />
    );
}

export default ChatPooling
