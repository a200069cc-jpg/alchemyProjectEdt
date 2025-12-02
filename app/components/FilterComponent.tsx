import { View, StyleSheet,Text,FlatList } from 'react-native';

  
export function FilterComponent (){
   const styles = StyleSheet.create({
    filterButton: {
      width: "100%",
      height: "30%",
      borderRadius: 25,
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
      textAlign:"center",
      borderWidth: 1,
      borderColor: "#ccc",
    },
  
  })

    return(
        <View>
          <Text style={styles.filterButton}>Filter 1</Text>
          <Text style={styles.filterButton}>Filter 2</Text>
          <Text style={styles.filterButton}>Filter 3</Text>
        </View>
    )
}