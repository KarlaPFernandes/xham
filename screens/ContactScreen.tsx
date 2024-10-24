import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image  } from 'react-native';

const ContactScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={require('../_img/logo.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>Empowering The Nation</Text>
        </View>

        {/* Modified container2 with more elements and adjusted size */}
        <View style={styles.container2}>
          <Text style={styles.title}>Contact Us</Text>
          <Text style={styles.text}>Contact Number</Text>

          {/* Contact details inside container2 */}
          <View style={styles.contactContainer}>
            <Text style={styles.numberText}>0724329265</Text>
            <Text style={styles.numberTitle}>0635685523</Text>
          </View>

          {/* Email details inside container2 */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailTitle}>Email Address</Text>
            <Text style={styles.emailText}>info@empoweringthenation.co.za</Text>
          </View>

          {/* add map down  here */}
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  content: {
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#07416d',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#07416d',
  textAlign:'center',
  },
  contactContainer: {
    marginBottom: 20,
  },
  contact1: {
    fontSize: 16,
    color: '#00609e',
  },
  contact2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#07416d',
  },
  emailContainer: {
    marginBottom: 20,
  },
  emailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#07416d',
  },
  emailText: {
    fontSize: 16,
    color: '#00609e',
  },
  numberContainer: {
    marginBottom: 20,
  },
  numberTitle: {
    fontSize: 16,
    color: '#00609e',
    marginBottom: 5,
    
  },
  numberText: {
    fontSize: 16,
    color: '#00609e',
  },
  
  
  // Modified container2
  container2: {
    width: '100%',          // Adjusted width to fill more space
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-start', // Align content to start instead of center
    padding: 30,             // Increased padding for more space inside
    marginVertical: 20,      // Space around the container
    borderRadius: 10,        // Optional rounded corners
    shadowColor: '#000',     // Optional shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,            // Android shadow
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#07416d',
    fontWeight: 'bold',
  },

  
 
});

 

export default ContactScreen;