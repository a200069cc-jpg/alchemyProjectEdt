import { View, StyleSheet,Text,Pressable } from 'react-native';

  
export function ChatComponent (){
  const styles = StyleSheet.create({
    chatButton: {
      width: "100%",
      height: 60,
      borderRadius: 25,
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      marginVertical: 6,
    },
    filterEmoji: {
      fontSize: 16,
      color: "#333",
      textAlign: "center",
      fontWeight: "500",
    },
  });

    return(
      <View>
      <Pressable style={styles.chatButton}>
        <Text style={styles.filterEmoji}>💬</Text>
      </Pressable>
    </View>
    )
}