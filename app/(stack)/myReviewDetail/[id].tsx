import {
  DescriptionComponent,
  HeaderComponent,
} from "@/components/detail/DetailComponent";
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
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mb-8 mt-10 mx-5">
          <View className="flex items-center">
            <Image
              source={review?.image}
              className="w-[200px] h-[300px] rounded-xl mb-3"
            />
            <Rating rating={review?.rating} />
          </View>
          <Text className="text-3xl font-title font-bold text-expresso text-center mt-5">
            {review?.title}
          </Text>
          <View className="mt-5 flex-col gap-1 bg-highlight/60 py-3 px-3 rounded-xl">
            <HeaderComponent title="Author:" description={review?.author} />
            <HeaderComponent title="Genre:" description={review?.genre} />
            <HeaderComponent title="Pages:" description={review?.pageCount} />
            <HeaderComponent
              title="Start Date:"
              description={review?.startDate}
            />
            <HeaderComponent title="End Date:" description={review?.endDate} />
          </View>

          <View className="flex-col gap-1 ">
            <DescriptionComponent
              title="Review"
              description={review?.review}
              className="mt-5 bg-highlight/30 py-3 px-3 rounded-xl"
            />
            <DescriptionComponent
              title="Quotes"
              description={review?.quotes?.join("\n")}
              className="mt-5 bg-highlight/50 py-3 px-3 rounded-xl"
            />

            <DescriptionComponent
              title="Fav Character"
              description={review?.favCharacter}
              className="mt-5 bg-highlight/80 py-3 px-3 rounded-xl"
            />
            <DescriptionComponent
              title="Would you recommend it?"
              description={
                review?.recommend ? (
                  <Ionicons size={26} name="happy-outline" />
                ) : (
                  <Ionicons size={26} name="sad-outline" />
                )
              }
              className="mt-5 bg-highlight/20 py-3 px-3 rounded-xl "
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyReviewDetail;
