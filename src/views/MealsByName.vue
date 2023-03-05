<template>
  <div class="flex justify-center">
    <div class="w-[80%] py-8 pb-0">
      <input type="text" 
        v-model="keyword" 
        placeholder="Search for meal" 
        class="w-full rounded border-gray-300 border-2 center"
        @change="searchMeals"
      >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
      </div>
      <div class="flex justify-center text-gray-600 p-8" v-if="!meals.length">There is no Meal</div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue"
import { setSearchedMeals } from "../store/mutations";

  const route = useRoute();
  const keyword = ref('');
  const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
    //If the search bar is empty please put the alse message
    if (keyword.value) {
      store.dispatch('searchMeals', keyword.value)
    } else {
      store.commit("setSearchedMeals", [])
    }
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