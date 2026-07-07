import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import type { TextInputProps, TextStyle, ViewStyle } from 'react-native';
import colors from '../../theme/colors';

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: ViewStyle;
  /** Styles the visible box around the input — border color, borderRadius, background, etc. */
  inputContainerStyle?: ViewStyle;
  /** Styles the label text — color, fontSize, fontWeight, etc. */
  labelStyle?: TextStyle;
  rightElement?: React.ReactNode;
  focusBorderColor?: string;
}

const Input = forwardRef<React.ComponentRef<typeof TextInput>, InputProps>(
  (
    {
      label,
      error,
      helperText,
      containerStyle,
      inputContainerStyle,
      labelStyle,
      rightElement,
      style,
      onFocus,
      onBlur,
      focusBorderColor,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <View style={[styles.container, containerStyle]}>
        {label ? <Text style={[styles.label, labelStyle]}>{label}</Text> : null}

        <View
          style={[
            styles.inputWrapper,
            isFocused && {
              borderColor: focusBorderColor ?? colors.borderFocused,
            },
            error && {
              borderColor: colors.error,
            },
            inputContainerStyle,
          ]}
        >
          <TextInput
            ref={ref}
            style={[styles.input, style]}
            placeholderTextColor={colors.placeholder}
            onFocus={(e) => {
              setIsFocused(true);
              onFocus?.(e);
            }}
            onBlur={(e) => {
              setIsFocused(false);
              onBlur?.(e);
            }}
            {...rest}
          />
          {rightElement}
        </View>

        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : helperText ? (
          <Text style={styles.helperText}>{helperText}</Text>
        ) : null}
      </View>
    );
  }
);

Input.displayName = 'Input';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.text,
    paddingVertical: 12,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
  },
  helperText: {
    color: colors.secondary,
    fontSize: 12,
    marginTop: 4,
  },
});

export default Input;
