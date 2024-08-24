// // import React from 'react'
// // import { useState } from 'react'

import { useRef } from "react";
import { useState } from "react"

// // const App = () => {
// //   //array destructuring
// //   const [num, setNum] = useState(0);

// //   const addCounter = ()=>{
// //     setNum(num + 1);
// //   }

// //   const lessCounter = ()=>{
// //     setNum(num - 1);
// //   }
// //   return (
// //     <>
// //     <h1>Hello world {num}</h1>
// //     <h1>{num}</h1>
// //     <button onClick={addCounter}>add {num}</button>
// //     <button onClick={lessCounter}>less {num}</button>
// //     </>
// //   )
// // }

// // export default App



// import { useState , useRef } from "react"

// const App = () => {
//   const [todo , setTodo] = useState([]);
//   const todoVal = useRef()

//   const addTodo = (event)=>{
//     event.preventDefault();
//     todo.push(todoVal.current.value)
//     setTodo([...todo]);
//     console.log(todo);

//     todoVal.current.value = ""
    
//   }

//   const deleteTodo = (index)=>{
//     console.log("todo deleted" , index);
//     todo.splice(index , 1);
//     setTodo([...todo]);
    
//   }
//   const editTodo = (index)=>{
//     console.log("todo edited" , index);
//     const editedVal = prompt("enter value");
//     todo.splice(index , 1 , editedVal);
//     setTodo([...todo]);
    
//   }
//   return (
//     <>
//     <h1 className="text-center">Todo App</h1>
//     <form onSubmit={addTodo}>
//       <input type="text" placeholder="enter todo" ref={todoVal} />
//       <button type="submit">click</button>
//     </form>
//     <ul>
//       {/* key ma index dena is not a good practice */}
//       {todo.map((item , index)=>{
//         return <div key={index}>
//           <li >{item}</li>
//           <button onClick={()=> deleteTodo(index)}>delete</button>
//           <button onClick={()=> editTodo(index) }>edit</button>
//           {/* <button type="button" className="btn btn-primary">Primary</button> */}
//         </div>
//       })}
//     </ul>
    
//     </>
//   )
// }

// export default App



function App() {
  const [todo , setTodo] = useState([])
  const todoVal = useRef()

  const addTodo = (event)=>{
    event.preventDefault();
    todo.push(todoVal.current.value)
    setTodo([...todo])
    console.log(todo);
    todoVal.current.value
    


  }
// delete todo data
  function deleteTodo(index) {
    console.log("deleted", index);
    
    todo.splice(index, 1)
    setTodo([...todo])
    
  }

  // update todo data
  function editTodo(index) {
    console.log("edited", index);
    let updateVal = prompt("enter the updated todo alue")
    
    todo.splice(index, 1 ,  updateVal)
    setTodo([...todo])
    
  }


  return(
    <div>
      <form onSubmit={addTodo}>
        <h1>hello world , Todo App</h1>
      <input type="text" placeholder="Enter todo value" ref={todoVal}/>
      <button type="submit">Add todo</button>
      </form>
      <ul>
        {
          todo.map((item, index)=>{
            return <div key={index}>
              <li>{item}</li>
              <button onClick={  ()=> deleteTodo(index)}>Delete</button>
              <button onClick={ ()=> editTodo(index)}>Edit</button>
            </div>
          
          })
        }
      </ul>
    </div>
  )
}

export default App