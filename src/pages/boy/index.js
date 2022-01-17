import React from "react";
import { connect } from "react-redux";
class Boy extends React.Component {
  state = {
    isSend: false,
    role: "normal",
  };
  handleClick = () => {
    this.state.isSend ? this.props.stopLove() : this.props.sendLove();
    this.setState({
      ...this.state,
      isSend: !this.state.isSend,
    });
  };
  handleRoleChange = () => {
    this.state.role === "normal"
      ? this.props.chengeToCool()
      : this.props.changeToNormal();
    this.setState({
      ...this.state,
      role: this.state.role === "normal" ? "cool" : "normal",
    });
  };
  render() {
    return (
      <div style={{ width: 500 }}>
        <div style={{ fontSize: 40, color: "blue" }}>
          {this.state.isSend
            ? "给女神发射爱心  💗💗💗"
            : this.state.role === "normal"
            ? "我是普信男，看到女神啦"
            : "我是男神，看到女神啦"}
        </div>
        <div
          style={{
            justifyContent: "space-between",
            width: 300,
            display: "inline-flex",
          }}
        >
          <button onClick={this.handleClick}>
            {this.state.isSend ? "停止" : ""}发射💗
          </button>
          <button onClick={this.handleRoleChange}>
            转变为
            {this.state.role === "normal" ? "男神" : "普信男"}
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendLove: () => {
      dispatch({
        type: "send_love",
      });
    },
    stopLove: () => {
      dispatch({
        type: "stop_love",
      });
    },
    chengeToCool: () => {
      dispatch({
        type: "be_cool",
      });
    },
    changeToNormal: () => {
      dispatch({
        type: "be_normal",
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Boy);
