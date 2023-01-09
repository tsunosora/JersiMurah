import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHomeAktif,
  IconHome,
  IconJerseyAktif,
  IconJersey,
  IconProfileAktif,
  IconProfile,
} from '../../../assets';
import { colors, fonts } from '../../../utils';

const TabItem = ({isFocused, onLongPress, onPress, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <IconHomeAktif /> : <IconHome />;
    }
    if (label === 'Jersey') {
      return isFocused ? <IconJerseyAktif /> : <IconJersey />;
    }
    if (label === 'Profile') {
      return isFocused ? <IconProfileAktif /> : <IconProfile />;
    }

    return <IconHome />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, marginTop: 3},
  text: isFocused => ({
    color: isFocused ? colors.white : colors.secondary,
    fontSize: 11,
    marginTop: 5,
    fontFamily: fonts.primary.bold,
  }),
});
