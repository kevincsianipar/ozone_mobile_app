import React from "react";

import Colors from "../constants/Colors";
import { Icon } from "native-base";

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon
        type="FontAwesome"
        name={this.props.name}
        style={{
          marginBottom: -3,
          fontSize: 26,
          color: this.props.focused
            ? Colors.tabIconSelected
            : Colors.tabIconDefault
        }}
      />
    );
  }
}
