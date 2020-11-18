const initialState = {
    task: JSON.parse(localStorage.getItem("task")) || []
  };
  
  const taskReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "ADD":
        let updatedBlog = [...state.task];
        updatedBlog.push(payload)
        const blogJSON = JSON.stringify(updatedBlog)
        localStorage.setItem('task', blogJSON)
        return {
            ...state,
            task: [...updatedBlog],
          };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  