import { View, StyleSheet } from 'react-native';
import { DropAreaComponent } from './DropAreaComponent';

export function TableComponent({ slots, onDrop }) {
  return (
    <View style={styles.container}>
      {slots.map((item, index) => (
        <DropAreaComponent
          key={index}
          index={index}
          assignedElement={item}
          onDrop={onDrop}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    flex: 1,
  },
});
