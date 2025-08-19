import { Rating } from "@/components/rating/Rating";
import { data } from "@/data/mockReviews";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
const MyReviewDetail = () => {
  const { id } = useLocalSearchParams();
  const review = data.find((r) => r.id === id);
  const startDate = review?.startDate?.split("-").reverse().join("/");
  const endDate = review?.endDate?.split("-").reverse().join("/");
  return (
    <SafeAreaView className="flex-1 mx-5">
      <ScrollView 
      showsVerticalScrollIndicator={false}
      >

      <View className="mb-8 mt-10">
        <View className="flex items-center">
          <Image
            source={review?.image}
            className="w-[200px] h-[300px] rounded-xl"
          />
          <Rating rating={review?.rating}/>
        </View>
            <Text className="text-3xl font-title font-bold mt-4">{review?.title}</Text>
        <View className="mt-5">
          {/* <Text className="font-normal text-2xl  font-title">
            Title: <Text className="font-semibold text-lg font-body">{review?.title}</Text>
          </Text> */}
          <Text className="font-normal text-2xl  font-title">
            Author: <Text className="font-semibold text-lg font-body">{review?.author}</Text>
          </Text>
          <Text className="font-normal text-2xl  font-title">
            Genre: <Text className="font-semibold text-lg font-body">{review?.genre}</Text>
          </Text>
          <Text className="font-normal text-2xl  font-title">
            Pages: <Text className="font-semibold text-lg font-body">{review?.pageCount}</Text>
          </Text>
          <Text className="font-normal text-2xl  font-title">
            Start Date: <Text className="font-semibold text-lg font-body">{startDate}</Text>
          </Text>
          <Text className="font-normal text-2xl  font-title">
            End Date: <Text className="font-semibold text-lg font-body">{endDate}</Text>
          </Text>
        </View>
    
        <View className="mt-5">
          <Text className="font-bold text-2xl  font-title">Review</Text>
          <Text className="font-body text-lg">{review?.review}</Text>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-2xl font-title">Quotes</Text>
          <Text className="font-body text-lg">{review?.quotes?.join("\n")}</Text>
        </View>
         <View className="mt-5">
          <Text className="font-bold text-2xl  font-title">Fav Character</Text>
          <Text className="font-body text-lg">{review?.favCharacter}</Text>
        </View>
        <View className="mt-5">
          <Text className="font-bold text-2xl font-title">Would you recommend it?</Text>
          {review?.recommend ? <Ionicons size={20} name="happy-outline"/> : <Ionicons size={20} name="sad-outline"/>}
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyReviewDetail;
