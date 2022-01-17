const initState = {
  count: 0,
};

//接受action，进行逻辑处理
exports.reducer = (state = initState, action) => {
  switch (action.type) {
    case "add":
      return {
        count: state.count + 1,
      };
    default:
      return state;
  }
};
