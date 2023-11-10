import { useLayoutEffect } from 'react'

import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealsList from '../components/MealsList/MealsList'

function MealsOverviewScreens({ route, navigation }) {
  //console.log(route.key)

  const catId = route.params.categoryId

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0
  })
  /*-----------Fix for IOS-----------------------*/
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title

    navigation.setOptions({ title: categoryTitle })
  }, [catId, navigation])

  return <MealsList items={displayedMeals} />
}

export default MealsOverviewScreens
