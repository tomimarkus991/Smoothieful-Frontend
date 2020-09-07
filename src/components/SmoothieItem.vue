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
        <div>
          <h2>{{ smoothie.name }}</h2>
          <div v-for="(ingredient, index) in smoothie.ingredients" :key="index">
            <p>
              {{ ingredient }}
            </p>
          </div>
        </div>
        <div class="editContainer">
          <div class="bottomRight">
            <router-link
              class="link"
              :to="{ name: 'EditSmoothie', params: { id: smoothie._id } }"
              ><ion-icon name="pencil"></ion-icon>
            </router-link>
          </div>
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
.link {
  text-decoration: none;
  color: #e4e6eb;
}
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
.editContainer {
  position: relative;
  cursor: pointer;
}
.bottomRight {
  position: absolute;
  background-color: #2d88ff;
  padding: 6px 8px 0px 8px;
  border-radius: 60px;
  bottom: 4px;
  right: 8px;
  font-size: 30px;
}
</style>
