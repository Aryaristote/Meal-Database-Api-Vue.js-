<template>
    <div class="navBar shadow-md h-16 flex items-center">
      <header class="container mx-auto max-w-5xl flex justify-between items-center">
        <router-link :to="{name: 'home'}" :class="{ active: activeItem === 'home' }" 
        	@click="setActiveItem('home')"
          class="inline-flex items-center h-full px-5">
          Home
        </router-link>
        <div class="flex items-center gap-1">
          <router-link :to="{name: 'byName'}" :class="{ active: activeItem === 'mealSearch' }" 
            @click="setActiveItem('mealSearch')"
            class="inline-flex items-center px-4 h-full transition-colors">
            Search Meal
          </router-link>
          <router-link :to="{name: 'byLetter'}" :class="{ active: activeItem === 'letters' }" 
            @click="setActiveItem('letters')"
            class="inline-flex items-center px-4 h-full transition-colors">
            Meal By Letter
          </router-link>
          <router-link :to="{name: 'ingredients'}" :class="{ active: activeItem === 'ingredients' }" 
            @click="setActiveItem('ingredients')"
            class="inline-flex items-center px-4 h-full transition-colors">
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
      image: './assets/images/foodLogo9.png',
      activeItem: 'mealSearch',
    }
  },
  methods: {
    setActiveItem(item) {
      this.activeItem = item;
    }
  }
}
</script>

<style>
.active {
  /* Define your active menu item styles here */
  font-weight: bold;
  color: #dd6b20;
}
</style>