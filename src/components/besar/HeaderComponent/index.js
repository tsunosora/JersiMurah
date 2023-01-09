import {Text, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import { IconCari, IconChart } from '../../../assets'
import {colors, fonts, responsiveheight} from '../../../utils';
import {Jarak, Tombol} from '../../kecil';

export default class HeaderComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wraperHeader}>

          {/* Input Pencarian */}
          <View style={styles.searchSection}>
            <IconCari/>
            <TextInput placeholder="Cari Jersey..." style={styles.input} />
          </View>

          <Jarak width={15}/>
          <Tombol icon="keranjang" totalKeranjang={2} padding={13}/>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: responsiveheight(130),
  },

  wraperHeader: {
    marginTop: 15,
    marginHorizontal: 35,
    flexDirection:'row',
  },

  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 100,
    paddingLeft: 13,
    alignItems: 'center',
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.primary.light,
    
  },
});
