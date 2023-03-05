import axiosClient from "../axiosClient";

export function searchMeals({ commit }, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
            commit('setSearchedMeals', data.meals)
        })
}

export function searchMealByLetter({ commit }, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({ data }) => {
            commit('setMealByLetter', data.meals)
        })
}

export function searchMealsByIngredient({ commit }, ing) {
    axiosClient.get(`filter.php?i=${ing}`)
        .then(({ data }) => {
            commit('setMealByIngredient', data.meals)
        })
}