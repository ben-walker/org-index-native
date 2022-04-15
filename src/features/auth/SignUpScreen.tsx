import { useMutation } from "@apollo/client";
import { setItemAsync } from "expo-secure-store";
import { Controller, useForm } from "react-hook-form";
import { Button, ScrollView, TextInput } from "react-native";

import { SignUpDocument, SignUpInput } from "../../generated/graphql";
import { Text } from "../common";
import { STORE_KEY_ACCESS_TOKEN } from "./constants";

export const SignUpScreen = () => {
  const [signUp] = useMutation(SignUpDocument);

  const { control, handleSubmit } = useForm<SignUpInput>();

  const handleSignUp = handleSubmit(async (userData) => {
    try {
      const { data } = await signUp({ variables: { userData } });
      const { accessToken } = data?.signUp || {};

      if (!accessToken) {
        return;
      }

      await setItemAsync(STORE_KEY_ACCESS_TOKEN, accessToken);
    } catch {
      // Ignore; error returned from useMutation
    }
  });

  return (
    <ScrollView>
      <Text variant="body">Email</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            keyboardType="email-address"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      <Text variant="body">Name</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        rules={{ required: true }}
      />
      <Text variant="body">Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            secureTextEntry
            value={value}
          />
        )}
        rules={{ required: true }}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </ScrollView>
  );
};
