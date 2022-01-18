import React from 'react';

import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

type ButtonProps = TouchableOpacityProps

export const Button = ({...rest }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      {...rest}
    >
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
