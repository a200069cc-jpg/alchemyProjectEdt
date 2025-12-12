import { View, StyleSheet,Text,Pressable } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Button, ButtonText } from './ui/button';
import { List, MD3Colors } from 'react-native-paper';

  
export function FilterComponent (){
  const styles = StyleSheet.create({
    filterButton: {
      width: "100%",
      height: "30%",
      borderRadius: 25,
      backgroundColor: "#f2f2f2",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      marginVertical: 6,
    },
    filterText: {
      fontSize: 16,
      color: "#333",
      textAlign: "center",
      fontWeight: "500",
    },
  });

    return(
      <VStack space='4xl'>
       <Button variant="solid" size="lg" action="primary">
       <List.Icon color={MD3Colors.tertiary70} icon="folder"/>
      </Button>

      <Button variant="solid" size="lg" action="primary">
        <ButtonText>Filter 2</ButtonText>
      </Button>

      <Button variant="solid" size="lg" action="primary">
        <ButtonText>Filter 3</ButtonText>
      </Button>
    </VStack>
    )
}