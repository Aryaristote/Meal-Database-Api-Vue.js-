<template>
    <div class="meal-details mx-auto p-8">
        <div class="left">
          <h1 class="text-3xl font-bold mb-5">{{ meal.strMeal }}</h1>
          <img :src="meal.strMealThumb" :alt="meal.strMeal" class="">
        </div>
        <div class="right">
          <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <strong>Category: </strong> {{ meal.strCategory }}
            </div>
            <div>
                <strong>Area: </strong> {{ meal.strArea }}
            </div>
            <div>
                <strong>Tags: </strong> {{ meal.strTags }}
            </div>
          </div>
          <div>
            {{ meal.strInstructions }}
          </div><br>
          <div class="grid grid-cols-1 sm:grid-cols-2">
              <div>
                  <h2 class="text-2xl font-semibold md-2">Ingredients</h2>
                  <ul>
                      <!-- To get all ingredients list even empty ones  -->
                      <template v-for="(el, ind) of new Array(20)">
                          <li v-if="meal[`strIngredient${ind + 1}`]">
                              {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                          </li>
                      </template>
                  </ul>
              </div>
              <div>
                  <h2 class="text-2xl font-semibold md-3">Measures</h2>
                  <ul>
                      <template v-for="(el, ind) of new Array(9)">
                          <li v-if="meal[`strMeasure${ind + 1}`]">
                              {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                          </li>
                      </template>
                  </ul>
              </div>
          </div>
          <div class="my-5">
              <YoutubeBouton :href="meal.strYoutube">Go To Youtube</YoutubeBouton>
              <a class="ml-5 px-3 py-2 rounded border-2 font-semibold border-purple-500 bg-purple-500 hover:bg-purple-600 text-white transition-color" 
                  :href="meal.strSource" target="_blank">
                  View Origin Source
              </a>
          </div>
        </div>
        
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axiosClient from "../axiosClient";
import YoutubeBouton from "../components/YoutubeBouton.vue"

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({ data }) => {
            // debugger;
            meal.value = data.meals[0] || {}
        })
})
</script>

<style>

</style>