import { useCallback, useEffect, useState } from "react";

const PasswordGenerator = () => {
    const [length, setLength] = useState(8);
    const [charAllowed, setCharAllowed] = useState(false);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [Password, setPassword] = useState("");

    const PassWordGen = useCallback(()=>{
      let pass = ""
      let str =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  
      if(numberAllowed) str+="0123456789"
      if(charAllowed) str+="!@#$%^&*()_+-={}[]|\:;'<>,.?/~`"
  
      for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random()* str.length +1)
        pass += str.charAt(char)
      }
      setPassword(pass)
    } ,[length , charAllowed ,numberAllowed ,setPassword]) 


    useEffect(()=>{
      PassWordGen()
    },[length , charAllowed ,numberAllowed ,setPassword])

  return (
    <div>
      <div>
        <p>Password Generator</p>
        <input type="text" 
        value={Password}
        style={{color:"black"}}
        readOnly/>
        
      </div>
    </div>
  )
}

export default PasswordGenerator