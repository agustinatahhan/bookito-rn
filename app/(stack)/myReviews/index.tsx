import { MyReviewsCard } from "@/components/reviews/MyReviewsCard";
import { data } from "@/data/mockReviews";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { FlatList, Pressable, SafeAreaView, Text, View } from "react-native";

const MyReviews = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        className="mx-5 mt-5"
        ListHeaderComponent={
          <View className="flex-row items-center justify-between mx-2 mb-8">
            <Text className="font-bold text-3xl font-title text-expresso">My Reviews</Text>
            <Pressable onPress={() => router.push("/(stack)/createReviewForm/index")}>
              <Ionicons size={35} name="add-circle-outline" color={"#f4c9d6"} />
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <View className="flex-1 mb-5 mx-2">
            <MyReviewsCard
              title={item.title}
              image={item.image}
              rating={item.rating}
              onPress={() => router.push(`/(stack)/myReviewDetail/${item.id}`)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MyReviews;
