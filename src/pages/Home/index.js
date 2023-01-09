import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderComponent } from '../../components';
import { colors } from '../../utils';

export default class Home extends Component {
    render() {
        return (
            <View style={styles.pages}>
                <HeaderComponent/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: { flex: 1, backgroundColor: colors.white}
})