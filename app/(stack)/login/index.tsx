import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    Pressable,
    SafeAreaView,
    Text,
    TextInput,
    View,
} from "react-native";

const Login = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 flex-col justify-center items-center">
        <Image
          source={require("../../../assets/images/logo-bookito.png")}
          className="w-full h-[200px] rounded-xl"
          resizeMode="contain"
        />
        <View className="w-80 mt-5 gap-4">
          <TextInput
            className="w-full py-3 px-3 rounded-xl bg-highlight/60 font-body text-lg"
            placeholder="Email"
            placeholderTextColor="#3e2723"
          />
          <TextInput
            className="w-full py-3 px-3 rounded-xl bg-highlight/60 font-body text-lg"
            placeholder="Password"
            placeholderTextColor="#3e2723"
          />
          <Pressable className="w-full py-3 px-3 rounded-xl bg-highlight items-center ">
            <Text className="font-body text-lg text-expresso">Login</Text>
          </Pressable>
          <Pressable className="flex-row gap-2 items-center justify-end">
            <Text className="text-expresso font-body text-sm">
              Create account
            </Text>
          </Pressable>
          <Pressable className="flex-row gap-1 w-full mt-8 items-center justify-center">
            <Text className="text-expresso font-body text-sm">
              Or login with Google
            </Text>
            <Ionicons size={20} name="logo-google" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
