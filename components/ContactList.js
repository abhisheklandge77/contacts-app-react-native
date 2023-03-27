import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ContactItem from './ContactItem';

export default function ContactList({ contacts }) {
    const keyExtractor = (item, idx) => {
        return item?.id?.toString() || idx.toString();
    };
    const renderItem = ({ item }) => {
        return <ContactItem contact={item} />;
    };

    return (
        <>
            <View>
                <Text style={styles.listHeader}>My Contacts: {contacts.length}</Text>
            </View>
            {
                contacts.length ? (
                    <FlatList
                        data={contacts}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        style={styles.list}
                    />
                ) : 
                (
                <View style={styles.noContactsFound}>
                    <Text style={styles.listHeader}>No Contacts Found</Text>
                </View>
                )
            }
        </>
    );
}

const styles = StyleSheet.create({
    listHeader: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 20,
    },
    list: {
        flex: 1,
    },
    noContactsFound: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});