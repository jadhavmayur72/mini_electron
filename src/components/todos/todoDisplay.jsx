import { useSelector } from "react-redux";

export const TodoDispaly = () => {
  let dataList = useSelector((state) => state.todoReducers.list);

  return (
    <div>
      <div className="showdata">
        <table></table>
        {dataList.map((e, i) => {
          return (
            <div key={i}>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                
                    <th>
                      {" "}
                      <h3 key={i}>{e.data.title}</h3>
                    </th>
                    <th>
                      <h4>{e.data.desc}</h4>
                    </th>
                    <th>
                      <h4>{e.data.date}</h4>
                    </th>
                    <th>
                      <button>Delete</button>
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
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
