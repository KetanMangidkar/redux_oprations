import axios from "axios";

export const todoAction = {
  GET_TODO_REQUEST: "GET_TODO_REQUEST",
  GET_TODO_SUCCESS: "GET_TODO_SUCCESS",
  GET_TODO_FAILURE: "GET_TODO_FAILURE",
  ADD_TODO_REQUEST: "ADD_TODO_REQUEST",
  ADD_TODO_SUCCESS: "ADD_TODO_SUCCESS",
  ADD_TODO_FAILURE: "ADD_TODO_FAILURE",
};

//ACTION CREATORS

export const getTodoRequest = () => ({
  type: todoAction.GET_TODO_REQUEST,
});

export const getTodoSuccess = (data) => ({
  type: todoAction.GET_TODO_SUCCESS,
  payload: data,
});

export const getTodoFailure = () => ({
  type: todoAction.GET_TODO_FAILURE,
});


export const getTodos =(dispatch)=>{
   
        const todoRequestAction = getTodoRequest()
        dispatch(todoRequestAction);
        return axios({
            url:"http://localhost:3000/todo",
            method: "GET"
        }).then((res)=>{
            console.log(res)
            const todoSuccessAction = getTodoSuccess(res.data)
            dispatch(todoSuccessAction)
        }).catch(err=>{
            const todoFailureAction = getTodoFailure();
            dispatch(todoFailureAction)
        })
}



export const addTodoRequest = () => ({
    type: todoAction.ADD_TODO_REQUEST,
  });
  
  export const addTodoSuccess = (data) => ({
    type: todoAction.ADD_TODO_SUCCESS,
    payload: data,
  });
  
  export const addTodoFailure = () => ({
    type: todoAction.ADD_TODO_FAILURE,
  });
  
  
  export const addTodos =({dispatch,title})=>{
     
          const todoRequestAction = addTodoRequest()
          dispatch(todoRequestAction);
          return axios({
              url:"http://localhost:3000/todo",
              method: "POST",
              data:{
                    title,
                    status:false
              }
          }).then((res)=>{
              console.log(res)
              const todoSuccessAction = addTodoSuccess({

              })
              dispatch(todoSuccessAction)
          }).catch(err=>{
              const todoFailureAction = addTodoFailure();
              dispatch(todoFailureAction)
          })
  }