// @flow
import { Platform, Alert, Linking, PermissionsAndroid } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export const TIME1 = 'HH:mm';
class Util {


  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {
      // saving error
    }
  }


  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key')
      if (value !== null) {
        // value previously stored
        console.log(value, '.....> storeData');
        return value
      }
    } catch (e) {
      // error reading value
    }
  }

  navigate(navigation, screenName) {
    navigation.navigate(screenName)
  }

  alert(title, message) {
    Alert.alert(title, message);
  }

  alertWithAction(title, message, onPress) {
    Alert.alert(
      title,
      message,
      [
        { text: "OK", onPress: () => onPress() }
      ]
    );
  }

  alertWithTwoAction(title, message, cancelTitle, okTitle, onPressCancel, onPressOk) {
    Alert.alert(
      title,
      message,
      [
        { text: cancelTitle, onPress: () => onPressCancel() },
        { text: okTitle, onPress: () => onPressOk() },

      ]
    );
  }


  validatePhoneLimit(text) {
    console.log(text);

    // let reg = /^\+?\d{10,15}$/ //Original regex

    // ^ marks start of the string
    // \+? - where \ escapes + sign and ? makes it optional
    // \d digit between 0-9
    // {10,15} means minimum 10 digit and 15 means maximum 15
    // $ marks end of the string

    let reg = /^\+?\d{10,15}$/

    if (reg.test(text) === false) {
      console.log("Password is Not Correct");

      return false;
    }
    else {
      console.log("Password is Correct");
      return true

    }
  }

  validatePassword(text) {
    console.log(text);

    // let reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ //Original regex

    // At least one upper case English letter, (?=.*?[A-Z])
    // At least one lower case English letter, (?=.*?[a-z])
    // At least one digit, (?=.*?[0-9])
    // At least one special character, (?=.*?[#?!@$%^&*-])
    // Minimum eight in length .{8,} (with the anchors)

    let reg = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/

    if (reg.test(text) === false) {
      console.log("Password is Not Correct");

      return false;
    }
    else {
      console.log("Password is Correct");
      return true

    }
  }

  validateEmail(text) {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");

      return false;
    }
    else {
      console.log("Email is Correct");
      return true

    }
  }

  //   Valid formats:

  // (123) 456-7890
  // (123)456-7890
  // 123-456-7890
  // 123.456.7890
  // 1234567890
  // +31636363634
  // 075-63546725
  validatePhone(text) {
    console.log(text);
    let reg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/;
    if (reg.test(text) === false) {
      console.log("Phone is Not Correct");

      return false;
    }
    else {
      console.log("Phone is Correct");
      return true

    }
  }

  validateAlphabet(text) {
    let reg = /^[A-Za-z]+$/
    return reg.test(text)
  }

  validateUsername(text) {
    console.log(text);
    // let reg = /^\w[\w.]{2,18}\w$/;
    let reg = /^[a-zA-Z0-9]+$/;

    if (reg.test(text) === false) {
      console.log("Username is Not Correct");

      return false;
    }
    else {
      console.log("Username is Correct");
      return true

    }
  }


  validateNumber(text) {
    console.log(text);
    // let reg = /^\w[\w.]{2,18}\w$/;
    let reg = /^[0-9\b]+$/;

    if (reg.test(text) === false) {
      // console.log("Number is Not Correct");

      return false;
    }
    else {
      // console.log("Number is Correct");
      return true

    }
  }

  // onlySpecialchars
  // /^[^a-zA-Z0-9]+$/
  onlySpecialchars(text) {
    let reg = /^[^a-zA-Z\d]+$/;
    console.log('==== >', reg.test(text));
    if (reg.test(text) === true) {
      return false;
    } else {
      return true
    }
  }

  getCurrentDate() {
    var currentDate = new Date();
    currentDate.setMonth(currentDate.getMonth());
    var formatDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : currentDate.getMonth() + 1
      }-${('0' + currentDate.getDate()).slice(-2)}`;
    return formatDate;
  }


  openLinkInBrowser(url) {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: ");
      }
    });
  }


}

export default new Util();
