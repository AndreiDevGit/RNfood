import { StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreens from './screens/MealsOverviewScreens'
import MealDetailScreen from './screens/MealDetailScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import FavoritesContextProvider from './store/context/favorite-context'

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#52acd3' },
        headerTintColor: 'black',
        contentStyle: { backgroundColor: 'black' },
        sceneContainerStyle: { backgroundColor: 'rgb(154,184,196)' },
        drawerContainerStyle: { backgroundColor: '#ccc' },
        drawerInactiveTintColor: 'black',
        drawerActiveBackgroundColor: '#ccc',
      }}
    >
      <Drawer.Screen
        name={'Categories'}
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="list"
                color={color}
                size={size}
              />
            )
          },
        }}
      />
      <Drawer.Screen
        name={'Favorites'}
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return (
              <Ionicons
                name="star"
                color={color}
                size={size}
              />
            )
          },
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style={styles.navi} />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#52acd3' },
              headerTintColor: 'black',
              contentStyle: { backgroundColor: 'white' },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreens}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: 'About the Meal' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  )
}

const styles = StyleSheet.create({
  navi: {
    color: 'black',
  },
})
