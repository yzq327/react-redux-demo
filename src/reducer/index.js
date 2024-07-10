const initState = {
  count: 0,
};

//接受action，进行逻辑处理
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const loveInitState = {
  status: false,
  type: "normal",
};

//接受action，进行逻辑处理
export const loveReducer = (state = loveInitState, action) => {
  switch (action.type) {
    case "send_love":
      return {
        ...state,
        status: true,
      };
    case "stop_love":
      return {
        ...state,
        status: false,
      };
    case "be_cool":
      return {
        ...state,
        type: "cool",
      };
    case "be_normal":
      return {
        ...state,
        type: "normal",
      };
    default:
      return state;
  }
};
