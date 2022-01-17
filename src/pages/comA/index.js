import React from "react";
import { connect } from "react-redux";

class ComA extends React.Component {
  handleClick = () => {
    //发送action
    this.props.sendAction();
  };
  render() {
    return <button onClick={this.handleClick}> + </button>;
  }
}

/**
 * 需要返回一个对象
 * @param{*} dispatch
 */
const mapDispatchToProps = (dispatch) => {
  return {
    sendAction: () => {
      //利用dispath发送一个action
      //传递action对象，定义一个type属性
      dispatch({
        type: "add",
      });
    },
  };
};

//该组件属于发送方，需要实现connnect方法的第二个参数
export default connect(null, mapDispatchToProps)(ComA);
