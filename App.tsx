// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CoursesScreen from './screens/CoursesScreen';
import CalculateScreen from './screens/CalculateScreen';
import ContactScreen from './screens/ContactScreen';
import SewingDetailsScreen from './screens/SewingDetailsScreen';
import FirstAidDetailsScreen from './screens/FirstAidDetailsScreen';
import LandscapingDetailsScreen from './screens/LandscapingDetailsScreen';
import LifeSkillsDetailsScreen from './screens/LifeSkillsDetailsScreen';
import { RootStackParamList, CoursesStackParamList } from './screens/RootStackParams';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createStackNavigator<CoursesStackParamList>();

function CoursesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#07416d',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="CoursesList"
        component={CoursesScreen}
        options={{
          title: 'View The Details',
          headerShown: true, // Show the header for the courses list
        }}
      />
      <Stack.Screen 
        name="SewingDetails" 
        component={SewingDetailsScreen}
        options={{
          headerTitle: "Sewing Course",
        }}
      />
      <Stack.Screen 
        name="FirstAidDetails" 
        component={FirstAidDetailsScreen}
        options={{
          headerTitle: "First Aid Course",
        }}
      />
      <Stack.Screen 
        name="LandscapingDetails" 
        component={LandscapingDetailsScreen}
        options={{
          headerTitle: "Landscaping Course",
        }}
      />
      <Stack.Screen 
        name="LifeSkillsDetails" 
        component={LifeSkillsDetailsScreen}
        options={{
          headerTitle: "Life Skills Course",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Courses':
                iconName = focused ? 'school' : 'school-outline';
                break;
              case 'CalculateFees':
                iconName = focused ? 'calculator' : 'calculator-outline';
                break;
              case 'ContactUs':
                iconName = focused ? 'call' : 'call-outline';
                break;
              default:
                iconName = 'home-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2196F3',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerStyle: {
              backgroundColor: '#07416d',
            },
            headerTintColor: '#fff',
          }}
        />
        <Tab.Screen 
          name="Courses" 
          component={CoursesStack}
          options={{
            headerStyle: {
              backgroundColor: '#07416d',
            },
            headerTintColor: '#fff',
          }}
        />
        <Tab.Screen 
          name="CalculateFees" 
          component={CalculateScreen}
          options={{
            headerStyle: {
              backgroundColor: '#07416d',
            },
            headerTintColor: '#fff',
          }}
        />
        <Tab.Screen 
          name="ContactUs" 
          component={ContactScreen}
          options={{
            headerStyle: {
              backgroundColor: '#07416d',
            },
            headerTintColor: '#fff',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}