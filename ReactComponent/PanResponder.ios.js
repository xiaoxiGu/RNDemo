'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
} = React;


var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rect: {
      top: 0,
      left: 0,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'red',
    // position: 'absolute',
  }
});

var SimpleApp = React.createClass({
    getInitialState(){
        return {
          bg: 'white',
          top: 0,
          left: 0
        }
    },

    componentWillMount(){
      this._panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: ()=> true,
        onPanResponderGrant: ()=>{
          this._top = this.state.top
          this._left = this.state.left
          this.setState({bg: 'red'})
        },
        onPanResponderMove: (evt,gs)=>{
          console.log(gs.dx+' '+gs.dy)
          this.setState({
            top: this._top+gs.dy,
            left: this._left+gs.dx
          })
        },
        onPanResponderRelease: (evt,gs)=>{
          this.setState({
            bg: 'white',
            top: this._top+gs.dy,
            left: this._left+gs.dx
        })}
      })
    },

    render: function() {
      return (
        <View style={styles.container}>
          <View {...this._panResponder.panHandlers}
            style={[styles.rect,{
              'backgroundColor': this.state.bg,
              'top': this.state.top,
              'left': this.state.left
            }]}></View>
        </View>
      );
    }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
