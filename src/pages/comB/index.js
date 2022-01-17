import React from "react";
import { connect } from "react-redux";

class ComB extends React.Component {
  render() {
    return <div>{this.props.count}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

//该组件属于接收方，需要实现connnect方法的第一个参数
export default connect(mapStateToProps)(ComB);
