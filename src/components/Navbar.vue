<template>
    <div class="navBar shadow-md h-16 flex items-center">
      <header class="container mx-auto max-w-5xl flex justify-between items-center">
        <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
          Home
        </router-link>
        <div class="flex items-center gap-1">
          <router-link :to="{name: 'byName'}" class="inline-flex items-center px-4 h-full transition-colors">
            Search Meal 
          </router-link>
          <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-4 h-full transition-colors">
            Meal By Letter
          </router-link>
          <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-4 h-full transition-colors">
            Meal By Ingredients 
          </router-link>
        </div>
      </header>
    </div>
</template>

<script>
export default {
  data() {
    return {
      image: './assets/images/foodLogo9.png'
    }
  }
}
</script>

<style>

</style>