<template>
  <div class="main">
    <div class="grid">
      <h2>Edit {{ smoothieName }} Smoothie</h2>
      <form @submit.prevent="updateSmoothie">
        <div>
          <input
            class="edit-smoothie-input title"
            type="text"
            v-model="smoothieName"
          />
        </div>
        <div
          class="one-ingredient"
          v-for="(ingredient, index) in smoothieIngredients"
          :key="index"
        >
          <input
            class="edit-smoothie-input"
            type="text"
            v-model="smoothieIngredients[index]"
          />
          <ion-icon
            class="deleteIngredient"
            @click="deleteIngredient(ingredient)"
            name="trash-outline"
          ></ion-icon>
        </div>
        <div>
          <input
            class="edit-smoothie-input"
            type="text"
            v-model="ingredient"
            placeholder="Add an ingredient (press tab to add):"
            @keydown.tab.prevent="addIngredient"
          />
        </div>
        <button class="edit-smoothie-button">Update</button>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "EditSmoothie",
  data() {
    return {
      smoothie: {},
      smoothieName: "",
      id: "",
      smoothieIngredients: [],
      ingredient: ""
    };
  },
  methods: {
    async updateSmoothie() {
      let data = {
        name:
          this.smoothieName.charAt(0).toUpperCase() +
          this.smoothieName.slice(1, this.smoothieName.length),
        ingredients: this.smoothieIngredients
      };
      await axios.put(
        `https://murmuring-tundra-54140.herokuapp.com/api/smoothies/${this.id}`,
        data
      );
      this.$router.push({ name: "Home" });
    },
    deleteIngredient(name) {
      this.smoothieIngredients = this.smoothieIngredients.filter(
        ingredient => name !== ingredient
      );
    },
    addIngredient() {
      if (this.ingredient) {
        this.smoothieIngredients.push(this.ingredient);
        this.ingredient = "";
      }
    }
  },
  async created() {
    this.id = this.$route.params.id;
    let res = await axios.get(
      `https://murmuring-tundra-54140.herokuapp.com/api/smoothies/${this.id}`
    );
    this.smoothie = res.data;
    this.smoothieName = this.smoothie.name;
    this.smoothieIngredients = this.smoothie.ingredients;
  }
};
</script>
<style scoped>
.title {
  margin-bottom: 10px;
}
.one-ingredient {
  margin-bottom: 10px;
}
.main {
  max-width: 800px;
  margin: 0 auto;
  margin-left: 40%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
}
.deleteIngredient {
  margin-top: 5px;
  cursor: pointer;
  font-size: 30px;
}
.edit-smoothie-input {
  min-width: 280px;
  width: 40%;
  color: #e4e6eb;
  background-color: #242526;
  border: 2px solid #e4e6eb;
  border-radius: 40px;
  padding: 14px;
  font-size: 15px;
}
.edit-smoothie-input:hover {
  background-color: #333435;
  border: 3px solid #e4e6eb;
  font-size: 17px;
  scale: 1.1;
}
.edit-smoothie-button {
  color: #e4e6eb;
  background-color: #242526;
  border: 2px solid #e4e6eb;
  border-radius: 40px;
  padding: 14px;
  font-size: 15px;
  margin: 20px 0;
  cursor: pointer;
}
.edit-smoothie-button:hover {
  background-color: #333435;
  border: 3px solid #e4e6eb;
  scale: 1.1;
  font-size: 17px;
}
@media screen and (max-width: 1200px) {
  .main {
    margin-left: 30%;
  }
  .edit-smoothie-input {
    width: 40%;
  }
}
@media screen and (max-width: 500px) {
  .main {
    margin-left: 10%;
  }
  .edit-smoothie-input {
    width: 40%;
  }
}
</style>
