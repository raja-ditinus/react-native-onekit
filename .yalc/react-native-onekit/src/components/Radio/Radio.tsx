import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import type { DropdownOption } from '../types';

export interface RadioGroupProps {
  options: DropdownOption[];
  value: string | number | null;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  direction?: 'column' | 'row';
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  disabled,
  direction = 'column',
}) => {
  return (
    <View style={[styles.group, direction === 'row' && styles.groupRow]}>
      {options.map((option) => {
        const selected = option.value === value;
        return (
          <TouchableOpacity
            key={option.value}
            style={styles.row}
            activeOpacity={0.7}
            disabled={disabled}
            onPress={() => onChange(option.value)}
          >
            <View
              style={[styles.outerCircle, disabled && styles.disabledCircle]}
            >
              {selected && <View style={styles.innerCircle} />}
            </View>
            <Text style={[styles.label, disabled && styles.labelDisabled]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    flexDirection: 'column',
  },
  groupRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    marginRight: 20,
  },
  outerCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledCircle: {
    borderColor: colors.disabled,
  },
  innerCircle: {
    width: 11,
    height: 11,
    borderRadius: 6,
    backgroundColor: colors.primary,
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

export default RadioGroup;
