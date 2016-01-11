'use strict'
var React = require('react-native');

var {
    View,
    Text,
    Image,
    StyleSheet
} = React

var styles = StyleSheet.create({
    containter:{
        flex:1,
        backgroundColor:'white',
    },
    centerText:{
        alignItems:'center'
    },

    text:{
        height: 44,
        fontSize: 15,
        textAlign: 'center',
        margin: 10,
        backgroundColor: 'black',
        color: 'white'
    },

    flexContainer: {
        flex: 1,
        flexDirection: 'row'
    },

    flexContainerCol:{
        flexDirection: 'column',
        height:100
    },

    cell: {
        flex: 1,
        height: 50,
        backgroundColor: '#ff0000'
    },

    welcome:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },

    cellFixed: {
        height: 50,
        width: 100,
        backgroundColor: '#fefefe'
    }
});

var SimpleApp = React.createClass({
    render: function(){
        return (
        //未设置宽度，宽度充满
        //   <View style={{height: 20, backgroundColor: '#333333'}} />
        //固定宽度
        // <View style = {{width: 100, backgroundColor:'#ff0000'}}>
            // <View style={{height:20, backgroundColor:'#333333'}}/>
        // </View>
        //flex 等宽 充满
        // <View style = {{flexDirection: 'row'}}>
        //     <View style = {{flex:1}}>
        //         <View style={{height:20, backgroundColor:'#333333'}}/>
        //     </View>
        //     <View style={{flex: 1, backgroundColor:'#ff0000'}}/>
        // </View>
        //居中顶部对齐
    //     <View style={{height: 100, backgroundColor: '#333333', alignItems: 'center'}}>
    //          <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
    //    </View>
    //上下左右居中
    //    <View style={{height: 100, backgroundColor: '#333333', justifyContent: 'center', alignItems: 'center'}}>
    //   <View style={{backgroundColor: '#fefefe', width: 30, height: 30, borderRadius: 15}}/>
    //  </View>
    //网格布局
    <View style = {styles.flexContainerCol}>
        <View style = {styles.flexContainer}>
            <View style = {styles.cellFixed}>
                <Text style = {styles.welcome}>
                    fixed
                </Text>
            </View>
            <View style = {styles.cell}>
                <Text style = {styles.welcome}>
                    fiex
                </Text>
            </View>
            <View style = {styles.cellFixed}>
                <Text style = {styles.welcome}>
                    fixed
                </Text>
            </View>
        </View>

        <View style = {styles.flexContainer}>
            <View style = {styles.cellFixed}>
                <Text style = {styles.welcome}>
                    fixed
                </Text>
            </View>
            <View style = {styles.cell}>
                <Text style = {styles.welcome}>
                    fiex
                </Text>
            </View>
            <View style = {styles.cellFixed}>
                <Text style = {styles.welcome}>
                    fixed
                </Text>
            </View>
        </View>
    </View>
);
    }
});

React.AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
