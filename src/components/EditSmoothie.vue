<template>
  <div class="size">
    <form @submit.prevent="updateSmoothie">
      <input class="edit-smoothie-input" type="text" v-model="smoothieName" />
      <div v-for="(ingredient, index) in smoothieIngredients" :key="index">
        <input
          class="edit-smoothie-input"
          type="text"
          v-model="smoothieIngredients[index]"
        />
      </div>
      <button class="edit-smoothie-button">update</button>
    </form>
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
      smoothieIngredients: []
    };
  },
  methods: {
    async updateSmoothie() {
      let data = {
        name: this.smoothieName,
        ingredients: this.smoothieIngredients
      };
      await axios.put(`http://www.leheke.ninja/api/smoothies/${this.id}`, data);
      this.$router.push({ name: "Home" });
    }
  },
  async created() {
    this.id = this.$route.params.id;
    let res = await axios.get(
      `http://www.leheke.ninja/api/smoothies/${this.id}`
    );
    this.smoothie = res.data;
    this.smoothieName = this.smoothie.name;
    this.smoothieIngredients = this.smoothie.ingredients;
  }
};
</script>
<style scoped>
.size {
  max-width: 400px;
  margin: 0 auto;
}
.edit-smoothie-input {
  color: #e4e6eb;
  background-color: #242526;
  border: 2px solid #e4e6eb;
  border-radius: 40px;
  padding: 14px;
  font-size: 15px;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
  cursor: pointer;
}
.edit-smoothie-button:hover {
  background-color: #333435;
  border: 3px solid #e4e6eb;
  scale: 1.1;
  font-size: 17px;
}
</style>
