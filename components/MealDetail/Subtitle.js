import { StyleSheet, Text, View } from 'react-native'

function Subtitle({ children }) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitles}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subTitleContainer: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    padding: 6,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subTitles: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 4,
    padding: 6,
    textAlign: 'center',
  },
})
