<template>
    <div class="byLetters flex flex-col items-center justify-center py-8">
      <div class="byL-content w-[80%]">
        <div class="flex items-center justify-center mt-2">
          <router-link class="alphabet" :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
            <p class="mx-1 hover:text-orange-600">{{ letter }}</p>
          </router-link>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
          <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div class="flex justify-center text-gray-600 p-8" v-if="!meals.length">No Meal with the letter <b>{{ active }}</b></div>
      </div>
    </div>
</template>

<script setup>
  import { computed, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import store from "../store";
  import MealItem from "../components/MealItem.vue"
  import { watch } from "vue";

  const route = useRoute();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const meals = computed(() => store.state.mealsByLetter);
  
  watch(route, () => {
    store.dispatch('searchMealByLetter', route.params.letter)
  })

  onMounted(() => {
    store.dispatch('searchMealByLetter', route.params.letter)
  })
</script>

<style>
</style>