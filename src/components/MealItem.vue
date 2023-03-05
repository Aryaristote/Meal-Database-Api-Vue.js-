<template>
    <div class="bg-white shadow rounded-xl">
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
</template>

<script setup>
import YoutubeBouton from "../components/YoutubeBouton.vue";
const {meal} = defineProps({
    meal: Object
})
</script>

<style>

</style>