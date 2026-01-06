import { View, Text, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export function DropAreaComponent({ index, assignedElement }) {
  const drop = Gesture.Tap().onEnd(() => {});

  return (
    <GestureDetector gesture={drop}>
      <View style={styles.slot}>
        <Text style={styles.text}>
          {assignedElement ?? `Selected component ${index + 1}`}
        </Text>
      </View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  slot: {
    width: 110,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#BEBEBE',
    borderWidth: 2,
    borderColor: '#8A8A8A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});
