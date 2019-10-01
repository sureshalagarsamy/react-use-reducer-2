export const initialState = {
   count1: 0,
   count2: 0
};

const EmpReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_1':
      return {
        ...state, count1:state.count1+1
      }
    case 'DELETE_1':
      return {
        ...state, count1: state.count1-1
      }
    case 'RESET_1':
      return {
          ...state, count1: action.count
        }
    case 'ADD_2':
      return {
        ...state, count2:state.count2+1
      }
    case 'DELETE_2':
      return {
        ...state, count2: state.count2-1
      }
    case 'RESET_2':
      return {
          ...state, count2: action.count
        }
    default:
      throw new Error('Unexpected action');
  }
}

export default EmpReducer;