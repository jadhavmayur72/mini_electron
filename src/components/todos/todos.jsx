
import { useState } from "react"
import { useDispatch,useSelector } from "react-redux"
import "../style/todoip.css"
import { addTodo } from "../../redux/action/add"




export const Todos=()=>{
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [stat,setStat]=useState("")
    const dispatch=useDispatch()
    let dataList=useSelector((state)=>state.todoReducers.list)






    return(
        <div id="container">
            
           <div id="todo_ip"> 
           <input className="inputbox" type="text" name="title" placeholder="Title" value={title} onChange={(el)=>setTitle(el.target.value)} />
            <input className="inputbox" type="text" name="discription"  placeholder="Discription" value={description} onChange={(el)=>setDescription(el.target.value)}/>
            <input className="inputbox" type="date" name="status" value={stat} onChange={(el)=>setStat(el.target.value)}  />
       
            <button className="btn-add" onClick={()=>{
                const inputData={
                    title:title,
                    desc:description,
                    date:stat
                }
                console.log(inputData)
                dispatch(addTodo(inputData));
                setTitle("");
                setDescription("")
                setStat("")
            }}  >+</button></div>


            <div className="showdata">
                {
                    dataList.map((el,i)=>{

                        return(
                            <div key={i}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>{el.inputData.title}</th>
                                            <th>{el.inputData.desc}</th>
                                            <th>{el.inputData.date}</th>
                                            <th><button>Delete</button></th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )

                    })
                }

            </div>

        </div>
    )
}