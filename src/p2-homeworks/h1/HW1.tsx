import React from 'react'
import Message from './Message'
import s from './HW1.module.css'

const messageData = {
    avatar: 'https://hsto.org/r/w1560/getpro/geektimes/post_images/602/015/ef4/602015ef48fb503a60db6fa9c27f7aeb.jpg',
    name: 'Black Overlord',
    message: 'Yo, Nigga! What r u doing?',
    time: '04:19',
}

const message2Data = {
    avatar: 'https://www.denofgeek.com/wp-content/uploads/2016/11/venom-movie-tom-hardy-symbiote.jpg?resize=768%2C432',
    name: 'Im Venom',
    message: 'Hi! Im out...',
    time: '04:20',
}

/*const alternativeMessageData = {
    avatar: 'https://pbs.twimg.com/profile_images/1249847050528854016/4RZRLxeV_400x400.jpg',
    name: 'Im Venom',
    message: 'Yo! Im out...',
    time: '04:20',
}*/

function HW1() {
    return (
        <div className={s.container}>
            <h2>homeworks 1</h2>
            <div className={s.messages}>
                <Message
                    avatar={messageData.avatar}
                    name={messageData.name}
                    message={messageData.message}
                    time={messageData.time}
                />
                <br/>
                <Message
                    avatar={message2Data.avatar}
                    name={message2Data.name}
                    message={message2Data.message}
                    time={message2Data.time}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
