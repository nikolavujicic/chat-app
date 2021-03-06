import React from 'react'
import { useForm } from 'react-hook-form'
import loader from 'assets/spinner.gif'
import './Footer.css'

const Footer = ({ onSubmit, isPosting }) => {

    const { register, handleSubmit, reset } = useForm()

    return <div className='footer'>
        <div className='form-wrapper'>
            <form onSubmit={handleSubmit((data) => {
                onSubmit(data)
                reset({});
            })}>
                <input name="message" placeholder='Message' ref={register({ required: true })} />
                {isPosting ? <div className='sendButton'><img src={loader} className='loader-img' alt='' /></div> :
                    <input type="submit" value="Send" className='sendButton' />}
            </form>
        </div>
    </div>
}

export default Footer;