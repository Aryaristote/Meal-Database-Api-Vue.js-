<template>
    <div class="flex flex-col items-center justify-center">
        <div class="welcome-area" id="welcome">
          <div class="header-text">
              <div class="container">
                  <div class="row">
                      <div class="left-text col-lg-6 col-md-12 col-sm-12 col-xs-12"
                          data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                          <h1>Recipes.hit</h1>
                          <p>Great resource for people who want to learn how to cook or who are looking for new recipes to try</p>
                          <small>User our powerfull search bar to find recipes by ingredient, cuisine or dish type.</small>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="w-[80%] p-8">
            <h1 class="text-4xl font-bold mb-2 text-orange-600">Meals Database</h1>
            <div v-if="meals" class="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
                <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from "../axiosClient";
import MealItem from "../components/MealItem.vue";

const ingredients = ref([]);
const meals = ref([]);

onMounted(async () => {
    for (let i = 0; i < 12; i++){
        axiosClient.get(`random.php`)
            .then(({ data }) => meals.value.push(data.meals[0]))
    }
})
</script>

<style>

</style>