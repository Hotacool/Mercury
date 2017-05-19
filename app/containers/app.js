'use strict'

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Navigator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as offsetActions from '../actions/Offset';
import MyScene from '../components/MyScene'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: 100,
  },
});

export class App extends Component {
  render() {
    var {offset, forwordOffset, backOffset} = this.props;
    console.log(this.props);
    return (
      <Navigator
      initialRoute={{
        title: 'My Initial Scene',
        index: 0
      }}
      renderScene={(route, navigator) => <MyScene title={route.title}
        // Function to call when a new scene should be displayed
        onForward={ () => {
          forwordOffset(2);
          const nextIndex = route.index + 1;
          navigator.push({
            title: 'Scene ' + offset,
            index: nextIndex,
          });
        }}
        // Function to call to go back to the previous scene
        onBack={() => {
          if (route.index > 0) {
            backOffset(2);
            navigator.pop();
          }
        }}
        />
      }
      configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
      />
      );
  }
}
;

App.propTypes = {
  offset: PropTypes.number.isRequired,
  forwordOffset: PropTypes.object.isRequired,
  backOffset: PropTypes.object.isRequired
};

function mapStateToTopProps(state) {
  return {
    offset: state.offset ? state.offset : 0
  };
}

function mapDispatchToTopProps(dispatch) {
  return bindActionCreators(offsetActions, dispatch);
}

export default connect(mapStateToTopProps, mapDispatchToTopProps)(App);
