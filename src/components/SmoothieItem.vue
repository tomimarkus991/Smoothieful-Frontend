<template>
  <div>
    <div class="smoothie-grid">
      <div class="smoothie" v-for="smoothie in smoothies" :key="smoothie._id">
        <div class="deleteContainer">
          <div class="topRight">
            <ion-icon
              @click="deleteSmoothie(smoothie._id)"
              name="trash-outline"
            ></ion-icon>
          </div>
        </div>
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

<style scoped>
.smoothie {
  background-color: var(--secondary);
  border-radius: 20px;
  margin: 10px;
}
.smoothie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: minmax(200px, auto);
  /* grid-template-columns: minmax(auto, 50%) 1fr 3em; */
}
.smoothie-main-item {
  text-align: center;
  margin: 10px 30px;
}
.deleteContainer {
  position: relative;
  cursor: pointer;
}
.topRight {
  position: absolute;
  top: 6px;
  right: 8px;
  font-size: 30px;
}
</style>
