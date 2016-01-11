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

    button:{
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: 'red',
    },

    touchable:{
        borderRadius: 100
    }
});

var SimpleApp = React.createClass({
    _onPressIn(){
        this.start = Date.now();
        console.log("press in");
    },
    _onPressOut(){
        console.log("press out");
    },
    _onPress(){
        console.log("press");
    },
    _onLongPress(){
        console.log("long press"+(Date.now()-this.start));
    },
    render: function(){
        return(
            <View style = {styles.containter}>
                <TouchableHighlight style = {styles.touchable}
                                    onPressIn = {this._onPressIn}
                                     onPressOut = {this._onPressOut}
                                      onPress = {this._onPress}
                                       onLongPress = {this._onLongPress}>
                    <View style = {styles.button}/>
                </TouchableHighlight>
            </View>
    )},
});
AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
