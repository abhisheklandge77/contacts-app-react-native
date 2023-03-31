import * as React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import * as Contacts from 'expo-contacts';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ContactList from './components/ContactList';

export default function App() {
  const [contacts, setContacts] = React.useState([]);
  
  React.useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails, Contacts.Fields.Image],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader />
      <ContactList contacts={contacts} />
      <AppFooter />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
