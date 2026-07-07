# React Native OneKit

A modern, lightweight, and customizable UI component library for React Native.

## ✨ Features

- 🚀 Easy to use
- 🎨 Fully customizable
- 📱 Android & iOS support
- ⚡ Built with TypeScript
- ♻️ Reusable UI components
- 🌙 Theme support (Coming Soon)

---

## Installation

Install the package using npm:

```bash
npm install react-native-onekit
```

or with Yarn:

```bash
yarn add react-native-onekit
```

---

## Components

Currently available components:

- ✅ Button
- ✅ Input
- ✅ Password Input
- ✅ Checkbox
- ✅ Radio Group
- ✅ Dropdown

More components are coming soon.

---

# Usage

## Import Components

```tsx
import {
  Button,
  Input,
  PasswordInput,
  Checkbox,
  RadioGroup,
  Dropdown,
} from 'react-native-onekit';
```

---

# Button

```tsx
<Button
  title="Submit"
  onPress={() => {}}
/>
```

---

# Input

```tsx
<Input
  label="Full Name"
  placeholder="Enter your name"
/>
```

### Custom Input

```tsx
<Input
  label="Email"
  placeholder="Enter email"
  inputContainerStyle={{
    borderRadius: 24,
  }}
  focusBorderColor="#4CAF50"
  labelStyle={{
    color: "#4CAF50",
  }}
/>
```

---

# Password Input

```tsx
<PasswordInput
  label="Password"
  placeholder="Enter password"
/>
```

### Custom Toggle Text

```tsx
<PasswordInput
  toggleTextStyle={{
    color: "#4CAF50",
    fontSize: 14,
  }}
/>
```

---

# Checkbox

```tsx
<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Accept Terms"
/>
```

---

# Radio Group

```tsx
<RadioGroup
  options={[
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]}
  value={gender}
  onChange={setGender}
/>
```

---

# Dropdown

```tsx
<Dropdown
  label="Country"
  options={[
    { label: "India", value: "in" },
    { label: "Canada", value: "ca" },
  ]}
  value={country}
  onChange={setCountry}
/>
```

---

## Customization

Most components support custom styling.

Example:

```tsx
<Input
  inputContainerStyle={{
    borderRadius: 20,
    borderColor: "#2196F3",
  }}
/>
```

---

## TypeScript

This package includes full TypeScript support.

No additional configuration is required.

---

## Requirements

- React Native 0.80+
- React 19+
- TypeScript (Optional)

---

## Roadmap

Upcoming components:

- Modal
- Bottom Sheet
- OTP Input
- Date Picker
- Toast
- Snackbar
- Switch
- Avatar
- Badge
- Card
- Tabs
- Progress Bar
- Skeleton Loader

---

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a Pull Request.

---

## License

MIT License

---

## Author

**Raja**

GitHub:
https://github.com/raja-ditinus

---

## Support

If you find a bug or have a feature request, please open an issue on GitHub.

Happy Coding! 🚀