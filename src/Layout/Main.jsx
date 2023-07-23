import { useEffect, useState, useRef } from "react"

export default function Main(){
    const [apiRes, setApi] = useState("")
    const [text, setText] = useState("")
    const inputNode = useRef()
    const textNode = useRef()


    useEffect(()=>{
      fetch("https://fish-text.ru/get?format=json&number=3")
        .then(response=> response.json())
        .then(result => setApi(result))
    },[])

    function newText(){
        fetch("https://fish-text.ru/get?format=json&number=3")
        .then(response=> response.json())
        .then(result => setApi(result))
    }

    function changeHandler(ev){
        const userText = ev.target.value
        let textLetters = userText.split("")
        let apiLetters = apiRes.text.split("")

        setText(userText)

        if(textLetters[textLetters.length - 1] !== apiLetters[textLetters.length - 1]){
            textLetters.pop()
            inputNode.current.style = "background-color:rgb(248 113 113)"
            setTimeout(() => {
                setText(textLetters.join(""))
                inputNode.current.style = "background-color:transparent"
            }, 100);   
        }

        if(textLetters.length === apiLetters.length){
            newText()
            setText('')
        }
    }

    return(
        <div className=" flex flex-col items-center bg-[#2e2e39] w-4/5 mx-auto py-8">
            <p ref={textNode}  className=" text-2xl w-9/12 mb-8">{apiRes.text}</p>
            <input ref={inputNode} type="text" className="input w-9/12 border-b-2 text-xl" value={text} onChange={changeHandler}/>
        </div>
    )
}