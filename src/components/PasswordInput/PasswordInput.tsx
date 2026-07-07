import { useState, forwardRef } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  type TextStyle,
  type StyleProp,
} from 'react-native';
import Input from '../Input/Input';
import type { InputProps } from '../Input/Input';
import colors from '../../theme/colors';

export interface PasswordInputProps extends Omit<
  InputProps,
  'secureTextEntry' | 'rightElement'
> {
  showToggleLabels?: { show: string; hide: string };
  toggleTextStyle?: StyleProp<TextStyle>;
}

const PasswordInput = forwardRef<TextInput, PasswordInputProps>(
  ({
    showToggleLabels = { show: 'Show', hide: 'Hide' },
    toggleTextStyle,
    ...rest
  }) => {
    const [visible, setVisible] = useState(false);

    return (
      <Input
        secureTextEntry={!visible}
        autoCapitalize="none"
        autoCorrect={false}
        rightElement={
          <TouchableOpacity onPress={() => setVisible((v) => !v)} hitSlop={8}>
            <Text style={[styles.toggleText, toggleTextStyle]}>
              {visible ? showToggleLabels.hide : showToggleLabels.show}
            </Text>
          </TouchableOpacity>
        }
        {...rest}
      />
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

const styles = StyleSheet.create({
  toggleText: {
    color: colors.primary,
    fontSize: 13,
    fontWeight: '600',
    paddingLeft: 8,
  },
});

export default PasswordInput;
