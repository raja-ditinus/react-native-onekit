import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import colors from '../../theme/colors';

export interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  style?: ViewStyle;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label,
  disabled,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.row, style]}
      activeOpacity={0.7}
      disabled={disabled}
      onPress={() => onChange(!checked)}
    >
      <View
        style={[
          styles.box,
          checked && styles.boxChecked,
          disabled && styles.boxDisabled,
        ]}
      >
        {checked && <Text style={styles.checkMark}>✓</Text>}
      </View>
      {label ? (
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  boxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  boxDisabled: {
    backgroundColor: colors.disabled,
    borderColor: colors.disabled,
  },
  checkMark: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '700',
  },
  label: {
    marginLeft: 10,
    fontSize: 15,
    color: colors.text,
  },
  labelDisabled: {
    color: colors.secondary,
  },
});

export default Checkbox;
