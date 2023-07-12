import { useEffect, useState } from 'react'
import styles from './notification.module.css'
import { useRecoilState } from 'recoil'
import { NotificationMessage } from 'state/notification'

export default function Notification(){
    const [lastMessageNumber, setLastMessageNumber] = useState(0)
    const [isUpdate, setIsUpdate] = useState(0)
    const [notificationMessage, setNotificationMessage] = useRecoilState(NotificationMessage)
    const [messageList, setMessageList] = useState<Array<{content: string; show: boolean, messageNumber: number}>>([])

    useEffect(() => {
        if(notificationMessage.length > 0){
            const newMessage = {
                content: notificationMessage,
                show: false,
                messageNumber: lastMessageNumber + 1
            }
            setLastMessageNumber(lastMessageNumber + 1)
            setMessageList([...messageList, newMessage])
            setNotificationMessage('')
            setTimeout(() => {
                newMessage.show = true
                setIsUpdate(isUpdate+ lastMessageNumber +1)
                setTimeout(() => {
                    newMessage.show = false
                    setIsUpdate(isUpdate+lastMessageNumber+10)
                }, 3000);
            }, 10);
        }
    }, [notificationMessage])

    useEffect(() => {
        setTimeout(() => {
            setMessageList(messageList.filter(message => message.show))
        }, 500);
    }, [isUpdate])

    return (
    <div className={styles['notification-stack']}>
        {messageList.map(message => 
            <div 
                key={message.messageNumber}
                className={`${styles.notification} ${!message.show && styles['notification-off']}`}
                >
                {message.content}
            </div>)
        }
        <div style={{
            textAlign: 'right'
        }}>
             {isUpdate}
        </div>
    </div>)
}

