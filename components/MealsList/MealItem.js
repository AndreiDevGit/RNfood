import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Image,
  Platform,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from '../MealDetails'

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
}) {
  const navigation = useNavigation()

  function selectMealItemHandler() {
    navigation.navigate('MealDetail', {
      mealId: id,
    })
  }

  //console.log(navigation)

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>
          (styles.button = pressed ? styles.buttonPressed : null)
        }
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          {/*-------Fix FOR IOS borderRadius--------*/}

          <View>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
          />
        </View>
      </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    //overflow: 'hidden',
    backgroundColor: 'white',
    elevation: 4,
    /*---IOS STYLES---*/
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    /*--------Android Fix Shadow----*/
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  /*--------Fix For IOS-------*/
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8,
  },

  /*---------IOS-Styles------*/
  buttonPressed: {
    opacity: 0.5,
  },
  /*---------IOS-Styles------*/
})
