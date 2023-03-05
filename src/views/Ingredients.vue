<template>
  <div class="flex justify-center">
    <div class="w-[80%] py-8">
      <h1 class="text-4xl font-bold mb-5 text-orange-500">Ingredients List</h1>
      <input type="text" 
        v-model="keyword" 
        placeholder="Search for Ingredient" 
        class="w-full rounded border-gray-300 border-2 center"
      >
      <router-link :to="{name: 'byIngredients', params: {ingredient: ingredient.strIngredient}}" 
        class="block bg-white rounded p-4 my-4 shadow" v-for="ingredient of computedIngredients" :key="ingredient.idIngredient">
        <h3 class="text-2xl font-bold mb-2 text-orange-500">{{ ingredient.strIngredient }}</h3>
        <p>{{ ingredient.strDescription }}</p>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

const keyword = ref('');
const ingredients = ref([]);

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLocaleLowerCase()))
})

  onMounted(() => {
    axiosClient.get(`list.php?i=list`)
      .then(({ data }) => {
        // debugger;
        ingredients.value = data.meals
    })
  })
</script>

<style>

</style>