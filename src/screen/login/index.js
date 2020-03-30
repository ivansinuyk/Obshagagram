import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {logIn} from '../../action/actions';
import {connect} from 'react-redux';

class SingIn extends Component {
  state = {
    login: '',
    passwrod: '',
  };
  render() {
    const {navigation, logIn, uncorrect} = this.props;
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {uncorrect && <Text>Uncorrect login or password</Text>}
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            height: 40,
          }}
          placeholder={'Entire your login'}
          value={this.state.login}
          onChangeText={value => this.setState({login: value})}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 5,
            height: 40,
            marginTop: 15,
          }}
          secureTextEntry={true}
          placeholder={'Entire your password'}
          value={this.state.password}
          onChangeText={value => this.setState({password: value})}
        />
        <TouchableOpacity
          onPress={() => logIn(this.state.login, this.state.password)}>
          <Text>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Reg')}>
          <Text>Sing in</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text>Forgot password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapState = state => {
  const {uncorrect} = state.login;
  return {
    uncorrect,
  };
};

const actionCreators = {
  logIn,
};

export default connect(
  mapState,
  actionCreators,
)(SingIn);
