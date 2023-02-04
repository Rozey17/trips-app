import Icon from "@expo/vector-icons/FontAwesome5";
import ProfileStack from "../Stacks/ProfileStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchStack from "../Stacks/SearchStack";
import Booking from "../../screens/Booking";
import Tickets from "../../screens/Tickets";
import Notifications from "../../screens/Support";
import Support from "../../screens/Support";

type TabNavigationProps = {};
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const renderTabBarIcon = (routeName: string) => {
  return (props: TabBarIconProps) => {
    const { color } = props;
    let iconName = "search";
    switch (routeName) {
      case "Search":
        iconName = "search";
        break;
      case "Booking":
        iconName = "book-open";
        break;
      case "Tickets":
        iconName = "ticket-alt";
        break;
      case "Support":
        iconName = "headset";
        break;
      case "Profile":
        iconName = "user-circle";
        break;

      default:
        break;
    }
    return <Icon name={iconName} solid size={20} color={color} />;
  };
};
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          tabBarIcon: renderTabBarIcon(routeName),
          tabBarStyle: {
            paddingVertical: 5,
            // paddingHorizontal: 5,
          },
          headerShown: false,
        };
      }}
    >
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Booking"
        component={Booking}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
