import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddCreditCard from "../../screens/AddCreditCard";
import PaymentMethod from "../../screens/PaymentMethod";
import PersonalInfo from "../../screens/PersonalInfo";
import Profile from "../../screens/Profile";

const ProfileStackNavigator = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <ProfileStackNavigator.Navigator>
      <ProfileStackNavigator.Screen name="ProfileScreen" component={Profile} />
      <ProfileStackNavigator.Screen
        name="PersonalInfo"
        component={PersonalInfo}
      />
      <ProfileStackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
      />
      <ProfileStackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{ headerShown: false }}
      />
    </ProfileStackNavigator.Navigator>
  );
};

export default ProfileStack;
