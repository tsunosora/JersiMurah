import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconChart } from '../../../assets'
import { colors } from '../../../utils'

const Tombol = ({ icon, totalKeranjang, padding }) => {

    const Icon = () => {
        if (icon === "keranjang") {
            return <IconChart />
        }

        return <IconChart />
    }

    return (

        <TouchableOpacity style={styles.container(padding)}>
            <Icon />
            {totalKeranjang && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalKeranjang}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Tombol

const styles = StyleSheet.create({
    container: (padding) => ({
        backgroundColor:colors.white,
        padding: padding,
        margin: 0,
        borderRadius: 100,
    }),
notif: {
    position: 'absolute',
    top: 5,
    right: 9,
    backgroundColor: 'red',
    borderRadius: 10,
    margin: 0,
    padding: 5,
},
textNotif: {
    fontSize: 9,
    color: colors.white,
}
})