<template>
  <div>
    <form @submit="e => addSmoothie(e)">
      <input
        class="add-smoothie-input"
        type="text"
        v-model="smoothieName"
        placeholder="Name"
      />
      <button class="add-smoothie-button">Add Smoothie</button>
    </form>
    <input
      class="add-smoothie-input"
      type="text"
      v-model="ingredient"
      placeholder="Ingredient"
    />
    <button class="add-smoothie-button" @click="addIngredient">
      Add Ingredient
    </button>
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
      if (this.ingredient) {
        this.smoothieIngredients.push(this.ingredient);
        this.ingredient = "";
      }
    }
  }
};
</script>
<style scoped>
.add-smoothie-input {
  color: #e4e6eb;
  background-color: #242526;
  border: 2px solid #e4e6eb;
  border-radius: 40px;
  padding: 14px;
  font-size: 15px;
  margin-bottom: 20px;
}
.add-smoothie-input:hover {
  color: #e4e6eb;
  background-color: #333435;
  border: 3px solid #e4e6eb;
  font-size: 17px;
  scale: 1.1;
}
.add-smoothie-button {
  color: #e4e6eb;
  background-color: #242526;
  border: 2px solid #e4e6eb;
  border-radius: 40px;
  padding: 14px;
  font-size: 15px;
  margin-bottom: 20px;
  cursor: pointer;
}
.add-smoothie-button:hover {
  color: #e4e6eb;
  background-color: #333435;
  border: 3px solid #e4e6eb;
  scale: 1.1;
  font-size: 17px;
}
</style>
