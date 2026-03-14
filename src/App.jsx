import { useState, useEffect } from "react"
import "./App.css"

import Button from "./components/Button"
import Display from "./components/Display"

function App() {

  const [display, setDisplay] = useState("")

  const agregarNumero = (num) => {
    setDisplay(display + num)
  }

  const agregarOperador = (op) => {
    setDisplay(display + op)
  }

  const limpiar = () => {
    setDisplay("")
  }

  const calcular = () => {
    try {
      setDisplay(eval(display).toString())
    } catch {
      setDisplay("Error")
    }
  }


  useEffect(() => {

    const manejarTeclado = (e) => {

      if (!isNaN(e.key)) {
        setDisplay(prev => prev + e.key)
      }

      if (["+", "-", "*", "/"].includes(e.key)) {
        setDisplay(prev => prev + e.key)
      }

      if (e.key === "Enter") {
        calcular()
      }

      if (e.key === "Backspace") {
        setDisplay(prev => prev.slice(0, -1))
      }

      if (e.key === "Escape") {
        limpiar()
      }

    }

    window.addEventListener("keydown", manejarTeclado)

    return () => window.removeEventListener("keydown", manejarTeclado)

  }, [display])

  return (

    <div className="calculator">

      <h1>Calculadora</h1>

      <Display value={display} />

      <div className="buttons">

        <Button value="1" onClick={agregarNumero}/>
        <Button value="2" onClick={agregarNumero}/>
        <Button value="3" onClick={agregarNumero}/>
        <Button value="+" onClick={agregarOperador}/>

        <Button value="4" onClick={agregarNumero}/>
        <Button value="5" onClick={agregarNumero}/>
        <Button value="6" onClick={agregarNumero}/>
        <Button value="-" onClick={agregarOperador}/>

        <Button value="7" onClick={agregarNumero}/>
        <Button value="8" onClick={agregarNumero}/>
        <Button value="9" onClick={agregarNumero}/>
        <Button value="*" onClick={agregarOperador}/>

        <Button value="0" onClick={agregarNumero} className="zero"/>
        <Button value="/" onClick={agregarOperador}/>

        <button className="equal" onClick={calcular}>=</button>

        <button className="clear" onClick={limpiar}>C</button>

      </div>

    </div>

  )
}

export default App