import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';
import { Formik } from 'formik';

// icons
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons';

export default class ProviderSignup1 extends Component {
  render() {
    return (
      <Formik
        initialValues={{ 
          userName: 'Tianyi Shen', 
          password: 'aaa12345', 
          confirmPassword: 'aaa12345', 
          contactNum: '0403045678', 
          email: 'shen1997@email.com', 
          address: '36 UQ Lake St, QLD', 
          emergencyContact: '84621379' 
        }}
        onSubmit={values => {
          this.props.navigation.navigate('PSin2', 
            {
              type: 'provider',
              userName: values.userName,
              password: values.password,
              contactNum: values.contactNum,
              email: values.email,
              address: values.address,
              emergencyContact: values.emergencyContact
            }
          )
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.container}>

            {/* page logo */}
            <Image style={styles.logo} source={require('./../../assets/images/female.jpg')}/>
            
            {/* step 1 */}
            <Text style={styles.promptInformation}>
                Step 1: Personal Information
                <Entypo style={{
                    marginLeft: 5,
                }} name="star" size={10} color="red" />
            </Text>
    
            {/* user name input */}
            <View style={styles.inputView} >
              <Ionicons style={styles.icons} name="person" size={30} />
              <TextInput 
                style={styles.input}
                placeholder="Nan Yang"
                onChangeText={handleChange('userName')}
                onBlur={handleBlur('userName')}
                value={values.userName}
              />
            </View>
    
            {/* password input */}
            <View style={styles.inputView} >
              <Entypo style={styles.icons} name="lock" size={30} />
              <TextInput 
                style={styles.input}
                placeholder="* * * *"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
    
            {/* confirm password input */}
            <View style={styles.inputView} >
              <Entypo style={styles.icons} name="lock" size={30} />
              <TextInput 
                style={styles.input}
                placeholder="* * * *"
                secureTextEntry={true}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
            </View>
    
            {/* contact number input */}
            <View style={styles.inputView} >
              <FontAwesome style={{
                  color: '#1EBC8D',
                  paddingLeft: 8,
                  zIndex: 1,
              }} name="phone" size={30} />
              <TextInput 
                style={styles.input}
                placeholder="+61 04321987"
                onChangeText={handleChange('contactNum')}
                onBlur={handleBlur('contactNum')}
                value={values.contactNum}
              />
            </View>
    
            {/* email input */}
            <View style={styles.inputView} >
              <Ionicons style={styles.icons} name="mail" size={30} />
              <TextInput 
                style={styles.input}
                placeholder="nanyang@email.com"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
    
            {/* address input */}
            <View style={styles.inputView} >
              <Ionicons style={styles.icons} name="md-location-sharp" size={30} />
              <TextInput 
                style={styles.input}
                placeholder="12/34 ABC Ave, South Bank, QLD"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />
            </View>
    
            {/* emergency contact number input */}
            <View style={styles.inputView} >
              <FontAwesome style={{
                  color: '#1EBC8D',
                  paddingLeft: 14,
                  paddingRight: 5,
                  zIndex: 1,
              }} name="mobile-phone" size={35} />
              <TextInput 
                style={styles.input}
                placeholder="+61 04321987"
                onChangeText={handleChange('emergencyContact')}
                onBlur={handleBlur('emergencyContact')}
                value={values.emergencyContact}
              />
            </View>
    
            {/* back and next button */}
            <View style={styles.backNextContainer}>
              {/* facebook */}
              <TouchableOpacity style={styles.backNextView} onPress={() => this.props.navigation.navigate('Log')}>
                <Text style={styles.backNextText}>Back</Text>
              </TouchableOpacity>
    
              {/* google */}
              <TouchableOpacity style={styles.backNextView} onPress={handleSubmit}>
                <Text style={styles.backNextText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderRadius: 50,
  },
  promptInformation: {
      fontWeight: "bold",
    marginVertical: 15,
  },
  inputView: {
    width: "80%",
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#1EBC8D",
    marginVertical: 10,
  },
  icons: {
    color: '#1EBC8D',
    paddingLeft: 5,
    zIndex: 1,
  },
  input: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  backNextContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  backNextView: {
    flexDirection: "row",
    backgroundColor: "#1EBC8D",
    paddingVertical: 15,
    paddingHorizontal: 18,
    borderRadius: 10,
    alignItems: "center",
  },
  backNextText: {
    fontSize: 20,
    color: "#ffffff", 
    paddingHorizontal: 15,
  }
})