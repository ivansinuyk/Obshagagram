import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {logOut} from '../../action/actions';

class Home extends Component {
  render() {
    const {logOut} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => logOut()}>
          <Text>Exit</Text>
        </TouchableOpacity>
        <Text>home</Text>
      </View>
    );
  }
}

const actionCreators = {
  logOut,
};

export default connect(
  null,
  actionCreators,
)(Home);
