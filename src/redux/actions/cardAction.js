export const add_task = (task) => {
    console.log(task)
    return {
      type: "ADD",
      payload: task,
    };
  };
  