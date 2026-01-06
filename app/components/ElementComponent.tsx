import { Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

export function ElementComponent({ item,  onDragStart, onDragEnd}) {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      runOnJS(onDragStart)(item.id);
    })
    .onUpdate(e => {
      x.value = e.absoluteX;
      y.value = e.absoluteY;
    })
    .onEnd(() => {
      runOnJS(onDragEnd)(item.id, {
        x: x.value,
        y: y.value,
      });
      x.value = 0;
      y.value = 0;
    });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }, { translateY: y.value }],
  }));

  return (
    <GestureDetector gesture={pan}>
      <Animated.View style={[styles.item, style]}>
        <Text style={styles.text}>{item.title}</Text>
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 80,
    height: 80,
    backgroundColor: '#A0A0A0',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#7A7A7A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: '#222',
  },
});
