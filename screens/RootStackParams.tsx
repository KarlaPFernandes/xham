// RootStackParams.ts
import { StackScreenProps } from '@react-navigation/stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Courses: undefined;
  CoursesList: undefined;
  CalculateFees: undefined;
  ContactUs: undefined;
  SewingDetails: undefined;
};

// Define stack navigation prop types
export type CoursesStackParamList = {
  CoursesList: undefined;
  SewingDetails: undefined;
};

export type CoursesStackScreenProps<T extends keyof CoursesStackParamList> = 
  StackScreenProps<CoursesStackParamList, T>;

// Define props type for CoursesScreen
export type CoursesScreenProps = CoursesStackScreenProps<'CoursesList'>;
  