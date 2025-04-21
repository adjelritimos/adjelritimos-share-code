import { useEffect, useState } from "react"
import Sidebar from "../components/sidebar"
import HeaderSession from "../components/header_session"
import Editor from "../components/editor"
import socket from "../server/socket/soket_io"


const Session = () => {
    const [sessionId, setSessionId] = useState('userId')
    const [language, setLanguage] = useState("javascript")
    const [theme, setTheme] = useState("vs-light")
    const [isShow, setIsShow] = useState(false)


    const handleJoinSession = (id) => {
        if (id) {
            setSessionId(id)
            socket.emit("join-session", id)
        }
    }


    useEffect(() => {
        
        socket.on("session-update", (data) => {
            console.log("Atualização da sessão recebida:", data)
        })

        return () => {
            socket.off("session-update")
        }
    }, [])


    useEffect(() => {
        if (sessionId) {
            socket.emit("join-session", sessionId)
        }
    }, [sessionId])

    return (
        <div>
            <HeaderSession setLanguage={setLanguage} setTheme={setTheme} language={language} theme={theme}/>
            <div className="d-flex">
               <div className="w-25 bg-light">
               <Sidebar setIsShow={setIsShow} isShow={isShow} onJoinSession={handleJoinSession}/>
               </div>
                {sessionId ?
                    (
                      
                         <div className="w-75">
                            <Editor language={language} theme={theme} />
                         </div>
                      
                    )
                    :
                    (
                        <div className="no-session-message">
                            <h2>Selecione ou crie uma sessão para começar!</h2>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Session