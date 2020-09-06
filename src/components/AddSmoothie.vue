<template>
  <div>
    <form @submit="e => addSmoothie(e)">
      <input type="text" v-model="smoothieName" placeholder="Name" />
      <button>Add Smoothie</button>
    </form>
    <input type="text" v-model="ingredient" placeholder="Ingredient" />
    <button @click="addIngredient">Add Ingredient</button>
    <div v-for="(ingredient, index) in smoothieIngredients" :key="index">
      <p>{{ ingredient }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddSmoothie",
  data() {
    return {
      smoothieName: "",
      ingredient: "",
      smoothieIngredients: []
    };
  },
  methods: {
    addSmoothie(e) {
      e.preventDefault();
      this.$emit("add", {
        smoothieName:
          this.smoothieName.charAt(0).toUpperCase() +
          this.smoothieName.slice(1, this.smoothieName.length),
        smoothieIngredients: this.smoothieIngredients
      });
      this.smoothieIngredients = [];
      this.smoothieName = "";
      this.ingredient = "";
    },
    addIngredient() {
      this.smoothieIngredients.push(this.ingredient);
      this.ingredient = "";
    }
  }
};
</script>
