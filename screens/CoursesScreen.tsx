import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CoursesStackParamList } from './RootStackParams';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useLayoutEffect } from 'react';

type CoursesScreenProps = NativeStackScreenProps<CoursesStackParamList, 'CoursesList'>;

const CoursesScreen: React.FC<CoursesScreenProps> = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Function to open/close modal
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Set up custom header with three dots
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleModal} style={styles.headerButton}>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1 }}>
      {/* Main Courses Content */}
      <View style={styles.content}>
        <Text>Courses Screen Content</Text>
        {/* You can render your courses content here */}
      </View>

      {/* Modal for Side Pop-up with Filter Options */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Courses</Text>

            {/* Buttons to Filter Courses / Navigate to Detail Screens */}
            <Button
              title="Sewing Details"
              onPress={() => {
                toggleModal();
                navigation.navigate('SewingDetails');
              }}
            />
            {/* add button to the others screens down here */}

            {/* Close Button */}
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 15,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '70%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 22,
    marginBottom: 20,
  },
});

export default CoursesScreen;