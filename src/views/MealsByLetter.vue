<template>
    <div class="flex flex-col items-center justify-center p-8">
      <div class="mt-2">
        <router-link :to="{name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
          <span class="mx-1" @click="dedeko">{{ letter }}</span>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
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