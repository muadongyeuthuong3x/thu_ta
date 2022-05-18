import {
    View,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Image,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import { Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import React from 'react';

const ItemUserChat = ({ navigation }) => {
    return (

        <View style={styles.messengerChat}>
            <View style={styles.header}>
                <View style={styles.iconAvatar}>
                    <FontAwesome name="arrow-left" style={styles.arrowleft} size={20} />
                    <View style={styles.avatarTextName}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-1/158318801_2929199107401517_2132058612256104388_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-6&_nc_sid=7206a8&_nc_ohc=L3xeVY3L3YgAX-hiOaU&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8BzZwAy6FEflLBZD25ii9imVKQ-MIsVCw1L_ezfL4BJQ&oe=62A9381C"
                            }}
                        />
                        <View style={styles.contentAvatar}>
                            <Text style={styles.name}>Thu heo heo</Text>
                            <Text style={styles.timeOnline}>Hoat dong 45p</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.callVideo}>
                    <FontAwesome name="phone" style={styles.arrowleft} size={20} />
                    <Icon name="video" style={styles.arrowleft} size={20} />
                </View>
            </View>

            <View style={styles.paddingChat}>
                <View style={styles.friendChat}>
                    <Text style={styles.textChat}>Toidddddddddddddddddddđ chat</Text>
                    <Image
                        style={styles.imgSend}
                        source={{
                            uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-1/158318801_2929199107401517_2132058612256104388_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-6&_nc_sid=7206a8&_nc_ohc=L3xeVY3L3YgAX-hiOaU&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8BzZwAy6FEflLBZD25ii9imVKQ-MIsVCw1L_ezfL4BJQ&oe=62A9381C"
                        }}
                    />
                </View>
                <View style={styles.rightUser}>
                    <Text style={styles.meChat}>Toi dddddddddddddddddddddddddddddddddddddddddchat</Text>
                    <Image
                        style={styles.imgSendYou}
                        source={{
                            uri: "https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-1/158318801_2929199107401517_2132058612256104388_n.jpg?stp=dst-jpg_s320x320&_nc_cat=110&ccb=1-6&_nc_sid=7206a8&_nc_ohc=L3xeVY3L3YgAX-hiOaU&_nc_ht=scontent.fhan5-8.fna&oh=00_AT8BzZwAy6FEflLBZD25ii9imVKQ-MIsVCw1L_ezfL4BJQ&oe=62A9381C"
                        }}
                    />
                </View>
            </View>

            <View style={styles.formChat}>
                <Icon
                    name="image"
                    style={styles.iconImage}
                    size={25}
                />
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="messenger ...."
                        multiline={true}
                    />
                </View>
                <Icon
                    name="paper-plane"
                    style={styles.iconSend}
                    size={20}
                />
            </View>

            {/* buttonChat */}
        </View>

    );
};
export default ItemUserChat;

const styles = StyleSheet.create({
    arrowleft: {
        color: "#8BB451",
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    messengerChat: {
        j
    },
    header: {
        borderBottomColor: "#D8D8D8",
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5

    },
    iconAvatar: {
        flexDirection: 'row'
    },
    tinyLogo: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    name: {
        fontWeight: "900",
        fontSize: 17,
        color: 'black'
    },
    timeOnline: {
        fontSize: 10,
        fontWeight: '400',
        color: 'black'
    },
    avatarTextName: {
        flexDirection: 'row'
    },
    contentAvatar: {
        marginLeft: 10
    },
    callVideo: {
        flexDirection: 'row',
        paddingRight: 20
    },
    formChat: {

        paddingHorizontal: 20,
        elevation: 5,
        // height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 7,
        justifyContent: 'space-evenly'
    },
    imgSend: {
        width: 100,
        height: 100
    },
    imgSendYou: {
        width: 100,
        height: 100,
    },
    rightUser: {
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    paddingChat: {
        paddingHorizontal: 10
    },
    textChat: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        backgroundColor: "#E4E6EB",
        padding: 20,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 10
    },
    meChat: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
        backgroundColor: '#17a2b8',
        padding: 20,
        borderRadius: 40,
        marginBottom: 10,
        marginTop: 10
    },
    friendChat: {
        width: 3 * (Dimensions.get('window').width) / 4,
    },
    rightUser: {
        marginLeft: 1 * (Dimensions.get('window').width) / 4,
        width: 3 * (Dimensions.get('window').width) / 4 - 20,
        alignItems: "flex-end"
    },
    input: {
        backgroundColor: "#e9eaeb",
        borderRadius: 50,
        paddingLeft: 20,
        height: 50,
        color: "black",
        width: (Dimensions.get('window').width) - 80,

    },
    iconSend: {
        color: "#8BB451",
        marginTop: 2,
        marginLeft: 10
    },
    iconImage: {
        color: "#8BB451",
        marginTop: 10,
        marginRight: 10
    }

})