<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
        </router-link>
        <div class="px-3">
            <h3 class="py-2 font-bold">{{ meal.strMeal }}</h3>
            <p class="">{{ splitText }}</p>
            <div class="py-5 flex items-center justify-between">
              <a class="px-3 py-2 rounded border-2 font-semibold border-red-600 bg-red-500 hover:bg-red-600 text-white transition-color" 
              :href="this.meal.strYoutube" target="_blank">
              Youtube
              </a>
            <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}" class="px-3 py-2 text-purple-700 font-semibold rounded border-2 border-purple-600 hover:bg-purple-600 hover:text-white">
                View
            </router-link> 
            </div>
        </div>
    </div>
</template>

<script>
  export default{
    props: {
    meal: {
      type: Object,
      required: true
    }
  },
  computed: {
    splitText() {
      if (this.meal.strInstructions.length > 150) {
        return this.meal.strInstructions.substring(0, 150) + "...";
      } else {
        return this.meal.strInstructions;
      }
    }
  } 
  }

</script>

<style>

</style>