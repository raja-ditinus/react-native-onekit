import { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Button,
  Input,
  PasswordInput,
  Checkbox,
  RadioGroup,
  Dropdown,
} from 'react-native-onekit';

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Other', value: 'other' },
];

const countryOptions = [
  { label: 'India', value: 'in' },
  { label: 'Canada', value: 'ca' },
  { label: 'United States', value: 'us' },
];

export default function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [gender, setGender] = useState<string | number | null>(null);
  const [country, setCountry] = useState<string | number | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Input
        label="Full Name"

        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        inputContainerStyle={{
          borderRadius: 24,
        }}
        labelStyle={{ color: '#4CAF50' }}
        focusBorderColor="#4CAF50"
      />

      <PasswordInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        toggleTextStyle={{ color: '#4CAF50' }}
        onChangeText={setPassword}
        inputContainerStyle={{
          borderRadius: 24,
        }}
      />

      <Dropdown
        label="Country"
        options={countryOptions}
        value={country}
        onChange={setCountry}
      />

      <View style={styles.spacer}>
        <RadioGroup
          options={genderOptions}
          value={gender}
          onChange={setGender}
          direction="row"
        />
      </View>

      <Checkbox
        checked={agree}
        onChange={setAgree}
        label="I agree to the terms and conditions"
      />

      <Button
        title="Submit"
        onPress={handleSubmit}
        loading={loading}
        disabled={!agree}
        style={styles.submitButton}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  spacer: {
    marginBottom: 16,
  },
  submitButton: {
    marginTop: 8,
  },
});
