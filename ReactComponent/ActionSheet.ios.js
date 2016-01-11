'use strict'

var React = require('react-native');

var {
    AppRegistry,
    ActionSheetIOS,
    StyleSheet,
    Text,
    View,
} = React;

var BUTTONS = [
    'Option 0',
    'Option 1',
    'Option 2',
    'Delete',
    'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

var styles = StyleSheet.create({
    button:{
        marginBottom: 10,
        fontWeight: '500',
    }
});

var SimpleApp = React.createClass({
    getInitialState(){
        return{
            clicked: 'nono',
        };
    },

    showActionSheet() {
      ActionSheetIOS.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        destructiveButtonIndex: DESTRUCTIVE_INDEX,
      },
      (buttonIndex) => {
        this.setState({ clicked: BUTTONS[buttonIndex] });
      });
  },

    render(){
        return (
            <View>
                <Text onPress = {this.showActionSheet} style = {styles.button}>
                    Click to show ActionSheet
                </Text>
                <Text>
                    clicked button : {this.state.clicked}
                </Text>
            </View>
        );
    }
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
