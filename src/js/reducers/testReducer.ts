const testReducer = (state = {
    tests:["test1", "test2", "test3"]
  }, action:{type:string, payload:string}) => {
  
    switch (action.type) {
      case "ADD":
      state = {
        tests:[...state.tests, action.payload],
      }
        break;
      case "DELETE":
      state = {
        tests: state.tests.filter( (item, index) => {
          return item !== action.payload
        })
      }
      
        break;
    }
  
    return state;
  }

  export default testReducer