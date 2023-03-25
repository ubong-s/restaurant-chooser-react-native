import { View } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { CustomTextInput } from "../components/CustomTextInput";

export const RestaurantsScreen = () => {
  return (
    <View style={{ padding: 10 }}>
      <CustomButton
        text="Add Restaurant"
        onPress={() => console.log("Button pressed")}
        width="100%"
      />

      {/* <CustomTextInput /> */}
    </View>
  );
};
