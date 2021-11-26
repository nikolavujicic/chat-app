
import moment from 'moment'
import './Message.css'

const Message = ({ data, isAuthor }) => {

    const { author, message, timestamp } = data

    const messageTime = moment(Number(timestamp)).local().format("DD MMM YYYY HH:mm")

    return <div className='message-wrapper'>
        <div className={`message ${isAuthor ? 'author-message' : ''}`}>
            {!isAuthor && <div>{author}</div>}
            <div className={`message-text ${isAuthor && 'message-text-author'}`}>{message}</div>
            <div className={`${isAuthor ? 'message-date' : ''}`}>{messageTime}</div>
        </div>
    </div>
}
export default Message;