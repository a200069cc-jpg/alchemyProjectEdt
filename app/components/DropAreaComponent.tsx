import { View, Text, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';

export function DropAreaComponent({ index, assignedElement, activeElementId, onDrop,onLayout }) {
  const drop = Gesture.Tap().onEnd(() => {
    if(!activeElementId)
    runOnJS(onDrop)(index, activeElementId);
  });

  return (
    
       <View
      style={styles.slot}
      onLayout={e => onLayout(index, e.nativeEvent.layout)}
    >
      <Text style={styles.text}>
        {assignedElement ?? `Selected component ${index + 1}`}
      </Text>
    </View>

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
