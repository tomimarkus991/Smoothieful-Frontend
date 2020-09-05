<template>
  <div>
    <h1>Tere</h1>
    <div class="smoothie-grid">
      <div class="smoothie" v-for="smoothie in smoothies" :key="smoothie._id">
        <button @click="deleteSmoothie(smoothie._id)">
          delete
        </button>
        <h2>{{ smoothie.name }}</h2>
        <div v-for="(ingredient, index) in smoothie.ingredients" :key="index">
          <p>
            {{ ingredient }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmoothieItem",
  props: ["smoothies", "deleteSmoothie"]
};
</script>

<style scoped></style>
