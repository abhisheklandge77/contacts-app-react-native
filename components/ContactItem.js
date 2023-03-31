import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function ContactItem({contact}) {

  return (
    <View style={styles.contactCon} key={contact?.id || Math.randomm()}>
      <View style={styles.imgCon}>
        <View style={contact?.imageAvailable ? styles.imgCon : styles.placeholder}>
          {
            contact?.imageAvailable ? (
              <Image source={contact?.image || {uri: ''}} style={styles.imgCon} />
            ) : (
              <Text style={styles.txt}>{contact?.name[0]}</Text>
            )
          }
        </View>
      </View>
      <View style={styles.contactDat}>
        <Text style={styles.name}>
          {contact?.name}
        </Text>
        <Text style={styles.phoneNumber}>
          {(contact?.phoneNumbers?.length && contact?.phoneNumbers[0]?.number) || 'N/A'}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  contactCon: {
    // flex: 1,
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#d9d9d9',
  },
  imgCon: {
    height: 55,
    width: 55,
    borderRadius: 30,
  },
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactDat: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: '#888',
  },
});