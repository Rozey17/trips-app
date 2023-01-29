import { Feather } from "@expo/vector-icons";
import Icon from "@expo/vector-icons/FontAwesome5";
import Inbox from "../../screens/Inbox";
import Search from "../../screens/Search";
import Trips from "../../screens/Trips";
import Wishlist from "../../screens/Wishlist";
import ProfileStack from "../Stacks/ProfileStack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchStack from "../Stacks/SearchStack";

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
      case "Wishlist":
        iconName = "heart";
        break;
      case "Trips":
        iconName = "suitcase";
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
            paddingHorizontal: 10,
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
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Trips"
        component={Trips}
        options={{
          tabBarLabelStyle: {
            fontFamily: "catamaran-medium",
            textTransform: "uppercase",
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="message-circle" size={24} color={color} />
          ),
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
