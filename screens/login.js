import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

export default class Login extends React.Component{
    render(){
        return(

            <View>
            <TouchableOpacity
            onPress={()=>{
                this.props.navigation.navigate('Home')
            }}>
                <Text>Home Screen</Text>
            </TouchableOpacity>

            </View>
        )
    }
}