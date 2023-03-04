<template>
  <div class="p-8 pb-0">
    <input type="text" 
      v-model="keyword" 
      placeholder="Search for meal" 
      class="w-full rounded border-gray-300 border-2 center"
      @change="searchMeals"
    >
  </div>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
    <div v-for="meal in meals" :key="meal.idMeal" class="bg-white shadow rounded-xl">
      <router-link :to="{name:'mealDetails', params: {id: meal.idMeal}}">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl h-48 w-full object-cover">
      </router-link>
      <div class="px-3">
        <h3 class="py-2 font-bold">{{ meal.strMeal }}</h3>
        <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ea adipisci, asperiores non ad vel</p>
        <div class="py-5 flex items-center justify-between">
          <YoutubeBouton :href="meal.strYoutube">Youtube</YoutubeBouton>
          <router-link to="/" class="px-3 py-2 text-purple-700 font-semibold rounded border-2 border-purple-600 hover:bg-purple-600 hover:text-white">
            View
          </router-link> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import YoutubeBouton from "../components/YoutubeBouton.vue"

  const route = useRoute();
  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals);

  function searchMeals(){
   store.dispatch('searchMeals', keyword.value)
  }

  onMounted(() => {
    keyword.value = route.params.name
    if (keyword.value) {
      searchMeals()
    }
  })
</script>

<style>

</style>