import { useMutation } from "@apollo/client";
import { setItemAsync } from "expo-secure-store";
import { Controller, useForm } from "react-hook-form";
import { Button, ScrollView, TextInput } from "react-native";

import { LogInDocument, LogInInput } from "../../generated/graphql";
import { Text } from "../common";
import { STORE_KEY_ACCESS_TOKEN } from "./constants";

export const LogInScreen = () => {
  const [logIn] = useMutation(LogInDocument);

  const { control, handleSubmit } = useForm<LogInInput>();

  const handleLogIn = handleSubmit(async (userData) => {
    try {
      const { data } = await logIn({ variables: { userData } });
      const { accessToken } = data?.logIn || {};

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
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        rules={{ required: true }}
      />
      <Text variant="body">Password</Text>
      <Controller
        control={control}
        name="password"
        render={({ field: { onBlur, onChange, value } }) => (
          <TextInput onBlur={onBlur} onChangeText={onChange} value={value} />
        )}
        rules={{ required: true }}
      />
      <Button title="Log In" onPress={handleLogIn} />
    </ScrollView>
  );
};
