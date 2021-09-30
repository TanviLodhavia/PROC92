import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Home extends React.Component{
    render(){
        return(
            <View>
                <TouchableOpacity
                onPress={()=>{
                    this.props.navigation.navigate('Login')
                }}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}