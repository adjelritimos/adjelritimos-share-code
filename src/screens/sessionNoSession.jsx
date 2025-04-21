import { useEffect, useState } from "react"
import Editor from "../components/editor"
import HeaderNoSession from "../components/headerNoSession"
import socket from "../server/socket/soket_io"



const SessionNoCount = () => {

    const sessionId = 'userId'
    const [language, setLanguage] = useState("javascript")
    const [theme, setTheme] = useState("vs-light")
   

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
            <HeaderNoSession setLanguage={setLanguage} setTheme={setTheme} language={language} theme={theme}/>
            <div className="d-flex">
              <Editor language={language} theme={theme}/>               
            </div>
        </div>
    )
}

export default SessionNoCount