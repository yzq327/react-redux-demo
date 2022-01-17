import React from "react";
import { connect } from "react-redux";
class Girl extends React.Component {
  render() {
    return (
      <div style={{ color: "red", fontSize: 40 }}>
        {!this.props.status
          ? "我是高冷女神"
          : this.props.type === "cool"
          ? "🉑️接受♥️"
          : "❌接受💗"}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Girl);
