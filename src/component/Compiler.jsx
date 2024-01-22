import React from 'react'
import { XTerm } from 'xterm-for-react'

const Compiler = () => {
    const xtermRef = React.useRef(null)
    React.useEffect(() => {
        // You can call any method in XTerm.js by using 'xterm xtermRef.current.terminal.[What you want to call]
        xtermRef.current.terminal.writeln("Hello, World!")
    }, [])
  return (
    <div>
        <XTerm ref={xtermRef} />
    </div>
  )
}

export default Compiler