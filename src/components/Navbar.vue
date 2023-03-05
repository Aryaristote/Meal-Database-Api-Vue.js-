<template>
    <header class="bg-white shadow-md h-14 flex justify-between items-center">
      <router-link :to="{name: 'home'}" class="inline-flex items-center h-full px-5">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" class="inline-flex items-center px-4 h-full transition-colors hover:bg-purple-100">
          Search Meal 
        </router-link>
        <router-link :to="{name: 'byLetter'}" class="inline-flex items-center px-4 h-full transition-colors hover:bg-purple-100">
          Meal By Letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" class="inline-flex items-center px-4 h-full transition-colors hover:bg-purple-100">
          Meal By Ingredients 
        </router-link>
      </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>