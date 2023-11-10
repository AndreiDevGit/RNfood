import { Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
function IconButton({ icon, color, onPress }) {
  return (
    <Pressable>
      <Ionicons
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress}
        name={icon}
        size={24}
        color={color}
      />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})
