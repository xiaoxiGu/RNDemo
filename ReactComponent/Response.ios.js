'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} = React;

var styles = StyleSheet.create({
    containter:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    rect:{
        width: 200,
        height: 200,
        borderWidth: 1,
        backgroundColor: 'black',
    },
});

var SimpleApp = React.createClass({
    getInitialState(){
        return {
            bg: 'white'
            identifier: '',
        }
    },

    componentWillMount(){
        this._gestureHandlers = {
            onStartShouldSetResponderCapture: () => true,
            onMoveShouldSetResponderCapture: ()=> true,

            onStartShouldSetResponder: ()=> true,
            onMoveShouldSetResponder: ()=> true,
            onResponderGrant: ()=>{
                this.setState({bg: 'red'});
            },
            onResponderMove: ()=>{
                console.log(132);
            },
            onResponderRelease: ()=>{
                this.setState({bg: 'white'});
            }
        }
    },

    render: function(){
        return(
            <View style = {styles.containter}>
                <View {...this._gestureHandlers} style = {[styles.rect, {'backgroundColor': this.state.bg}]}>
                </View>
            </View>
    )},
});
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
