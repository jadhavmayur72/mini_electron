import { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import "../style/todoip.css";
import { addTodo } from "../../redux/action/add";

export const Todos = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stat, setStat] = useState("");
  const dispatch = useDispatch();
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let req = await fetch(" http://localhost:9001/todos");
    let res = await req.json();
    // console.log(res)
    setDataList(res);
  };



  const addData = () => {
    const inputData = {
      status: false,
      title: title,
      desc: description,
      date: stat,
    };
    fetch(`http://localhost:9001/todos`, {
      method: "POST",
      body: JSON.stringify(inputData),
      headers: {
        "content-type": "application/json",
      },
    } ).then(getData)
   
    console.log(inputData);
    dispatch(addTodo(inputData));

    setTitle("");
    setDescription("");
    setStat("");
  };

  return (
      <>  <h1 className="title_">TODO APP</h1>
    <div id="outerContainer">
        

        <div id="todo_ip">
          <input
            className="inputbox"
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(el) => setTitle(el.target.value)}
          />
          <input
            className="inputbox"
            type="text"
            name="discription"
            placeholder="Discription"
            value={description}
            onChange={(el) => setDescription(el.target.value)}
          />
          <input
            className="inputbox"
            type="date"
            name="status"
            value={stat}
            onChange={(el) => setStat(el.target.value)}
          />
              {/* post Buttton------------------------------------- */}
          <button className="btn-add" onClick={addData}>
            +
          </button>
        </div>
   
           {/* ---------------------------GetData------------------- */}
      <div id="showdata">
        <table className="fix_title">
          <thead>
            <tr>
              <th className="th_col1">Title</th>
              <th className="th_col1">Description</th>
              <th className="th_col1">Date</th>
            </tr>
          </thead>
        </table>
       
        {dataList.map((e, i) => {
          return (
            <div key={i}>
              <table className="scrolling-table">
                <tbody>
                  <tr>
                    <th className="th_col">
                      {" "}
                      <h3 key={i}>{e.title}</h3>
                    </th>
                    <th className="th_col">
                      <h4>{e.desc}</h4>
                    </th>
                    <th className="th_col">
                      <h4>{e.date}</h4>
                    </th>

                    {/* delete button--------------------- */}
                    <th className="th_col" 
                      onClick={() => {
                        fetch(`http://localhost:9001/todos/${e.id}`, {
                          method: "DELETE",
                          body: JSON.stringify(dataList),
                          headers: {
                            "content-type": "application/json",
                          },
                        }).then((res) => {
                          res.json().then((req) => {
                            getData();
                          });
                        });
                      }}>
                      <button className="del-btn"
                      
                      >
                        🧺
                      </button>
                    </th>
                
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
};
