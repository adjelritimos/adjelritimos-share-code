import React, { useEffect, useRef, useState } from 'react'
import * as monaco from 'monaco-editor'
import socket from '../server/socket/soket_io'


const Editor = ({ sessionId, language, theme }) => {

    const editorRef = useRef(null)
    const editorInstance = useRef(null)
    const [code, setCode] = useState('')

    useEffect(() => {
        if (!editorRef.current) return 

        editorInstance.current = monaco.editor.create(editorRef.current, {
            value: code,
            language: language,
            theme: theme,
        })

       
        socket.emit('join-session', sessionId)

    
        const handleCodeUpdate = (newCode) => {
            if (editorInstance.current) {
                editorInstance.current.setValue(newCode)
                setCode(newCode)
            }
        }
        socket.on('code-update', handleCodeUpdate)

        
        const handleEditorChange = () => {
            const newCode = editorInstance.current.getValue()
            socket.emit('code-change', { sessionId, code: newCode })
            setCode(newCode)
        }
        
        editorInstance.current.onDidChangeModelContent(handleEditorChange)

        return () => {
            if (editorInstance.current) {
                editorInstance.current.dispose()
            }
            socket.off('code-update', handleCodeUpdate)
        }
    }, [sessionId, language, theme])

    return <div className="editor border p-0 m-0" ref={editorRef} />
}

export default Editor