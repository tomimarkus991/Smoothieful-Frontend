<template>
  <div class="size">
    <form class="add-smoothie" @submit.prevent="addSmoothie">
      <div v-if="error">{{ error }}</div>
      <input
        class="add-smoothie-input"
        type="text"
        v-model="smoothieName"
        placeholder="Name"
        required
      />
      <input
        class="add-smoothie-input"
        type="text"
        v-model="ingredient"
        placeholder="Add an ingredient"
        @keydown.tab.prevent="addIngredient"
      />
      <div v-for="(ingredient, index) in smoothieIngredients" :key="index">
        <p>
          {{ index + 1 }}
          <input
            class="add-smoothie-input"
            type="text"
            v-model="smoothieIngredients[index]"
          />
        </p>
      </div>
      <!-- <div v-if="smoothieIngredients !== null">Ingredients:</div> -->

      <button class="add-smoothie-button">Add Smoothie</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddSmoothie",
  data() {
    return {
      smoothieName: "",
      ingredient: "",
      smoothieIngredients: [],
      error: null
    };
  },
  methods: {
    async addSmoothie() {
      let newSmoothie = {
        name:
          this.smoothieName.charAt(0).toUpperCase() +
          this.smoothieName.slice(1, this.smoothieName.length),
        ingredients: this.smoothieIngredients
      };
      if (this.smoothieName) {
        this.smoothieIngredients = [];
        this.smoothieName = "";
        this.ingredient = "";
        try {
          await axios.post(
            "http://www.leheke.ninja/api/smoothies",
            newSmoothie
          );
          this.$router.push({ name: "Home" });
        } catch (error) {
          if (error.message === "Request failed with status code 500") {
            error.message = "There cannot be two smoothies with the same name";
            this.error = error.message;
          }
        }
      }
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
.size {
  max-width: 400px;
  margin: 0 auto;
}
.add-smoothie {
  display: grid;
  grid-template-columns: repeat(1fr);
}
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
  background-color: #333435;
  border: 3px solid #e4e6eb;
  scale: 1.1;
  font-size: 17px;
}
</style>
