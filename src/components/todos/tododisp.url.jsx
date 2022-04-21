import { useEffect, useState } from "react";

// import { useDispatch } from "react-redux";


export const TodoDisp = () => {
const [dataList,setDataList]=useState([])




useEffect(()=>{
  
    getData()
},[])


 const getData=async()=>{

    let req=await fetch(" http://localhost:9001/todos")
    let res= await req.json()
    // console.log(res)
    setDataList(res)

}





  return (
    <div>
      <div className="showdata">
        <table>
        <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                  </tr>
                </thead>
        </table>
        {dataList.map((e, i) => {
          return (
            <div key={i}>
              <table>
               
                <tbody>
                  <tr>
                
                    <th>
                      {" "}
                      <h3  key={i}>{e.title}</h3>
                    </th>
                    <th>
                      <h4>{e.desc}</h4>
                    </th>
                    <th>
                      <h4>{e.date}</h4>
                    </th>
                    <th>
                      <button onClick={()=>{
                            fetch(`http://localhost:9001/todos/${e.id}`,{
                                method:"DELETE",
                                body:JSON.stringify(dataList),
                                headers:{
                                    "content-type":"application/json",
                                }
                            }).then((res)=>{
                                res.json().then((req)=>{
                                    getData()


                                })
                            })


                      }}>Delete</button>
                    </th>
                    <th><button onClick={()=>{
                      


                   
                      
                           
                        fetch(`http://localhost:9001/todos/${e.id}`,{
                            method:"PATCH",
                            body:JSON.stringify(),
                            headers:{
                                "content-type":"application/json",
                            }
                        }).then((res)=>{
                            res.json().then((req)=>{
                                getData()


                            })
                        })
                          
                        // console.log(item)

                    }} >edit</button></th>
                  </tr>
                </tbody>
              </table>
             
            </div>
          );
        })}
      </div>

    </div>
  );
};
