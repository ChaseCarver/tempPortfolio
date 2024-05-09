import { useState, useEffect } from "react";


function Todolist() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  const [history, setHistory] = useState([[]])

  //when page loads, if list val in storage not null then set list to list val
  useEffect(() => {
    const todoStorage = window.localStorage.getItem("LIST_OF_TODOS")
    if(todoStorage == null){return
      }else{setList(JSON.parse(todoStorage));}
  }, [])
  //when page loads, if history val in storage not null then set history to list val
  useEffect(() => {
    const historyStorage = window.localStorage.getItem("LIST_OF_HISTORY")
    if(historyStorage == null){return
      }else{setHistory(JSON.parse(historyStorage))}
  }, [])
  //handle checkbox change
  function handleCheckChange(e) {    
    const checkkey = e.target.getAttribute("checkboxkey")
    setHistory([...history, list])
    window.localStorage.setItem("LIST_OF_HISTORY", JSON.stringify([...history, list]))
    const newList = list.map(
      (element) => {
        if(element.key == checkkey){
          return {...element, isChecked: !(element.isChecked)}
        }return element;
      }
    )
    setList(newList)
    window.localStorage.setItem("LIST_OF_TODOS", JSON.stringify(newList))
  }
  //handle delete button
  function handleRemoveClick(e) {
    const buttonKey = e.target.getAttribute("buttonkey") 
    list.forEach(
      (element, index) => {
        if(element.key == buttonKey){
          setHistory([...history, list])
          window.localStorage.setItem("LIST_OF_HISTORY", JSON.stringify([...history, list]))
          setList(list.toSpliced(index, 1))
          window.localStorage.setItem("LIST_OF_TODOS", JSON.stringify((list.toSpliced(index, 1))))
        }
      }
    )
  }
  //handle submit button
  function handleSubmit() {
    if(input == ""){return}
    let key = Math.floor(100000 + Math.random() * 900000)
      setHistory([...history, list])
      window.localStorage.setItem("LIST_OF_HISTORY", JSON.stringify([...history, list]))
      setList([...list, {key: key, value: input, isChecked:false}]) 
      setInput("")
      window.localStorage.setItem("LIST_OF_TODOS", JSON.stringify([...list, {key: key, value: input, isChecked:false}]))
      console.log(`storage set to "${JSON.stringify(list)}"`)
  }
  //handle undo button
  function handleHistoryClick(){
    if((history[history.length-1]) == undefined){return}
    const newHistory = history.pop()
    setList(newHistory)
    window.localStorage.setItem("LIST_OF_TODOS", JSON.stringify(newHistory))
    setHistory([...history])
    window.localStorage.setItem("LIST_OF_HISTORY", JSON.stringify([...history]))
  }
  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <h1 className="w-screen flex items-center justify-center font-bold text-3xl">To Do</h1>
      <container className="w-screen flex items-center justify-center">
        <input  className="border-2 border-slate-700 rounded-md" id="input" type="text" value={input} onChange={(e) => setInput(e.target.value)} ></input>
        <button className="btn" onClick={handleSubmit}>Submit</button>
        <button className="btn" onClick={handleHistoryClick}>Undo</button>
      </container>
      <div id="container">
        <ol className="w-screen flex items-center justify-center flex-col mt-10">
          {list.map(({key, value, isChecked}) =>
            <container className="w-screen flex items-center justify-center ">
              {isChecked == true && <li className="pb-1 line-through" id="strike" key={key}>{value}</li>}
              {isChecked == false && <li className="pb-1" key={key}>{value}</li>}
              <input className="mx-2" type="checkbox" checkboxkey={key} onChange={handleCheckChange} checked={isChecked}></input>
              <button className="btn py-0.5 bg-red-400 hover:bg-red-500" buttonkey={key} onClick={handleRemoveClick}>Remove</button>
              <br />
           </container>)
          }
        </ol>
      </div>
    </div>
  );
}

export default Todolist;