<template>
    <div class="flex flex-col items-center justify-center">
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