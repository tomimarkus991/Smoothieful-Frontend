<template>
  <div class="smoothie-main">
    <div class="smoothie-grid">
      <div class="smoothie" v-for="smoothie in smoothies" :key="smoothie._id">
        <div class="deleteContainer">
          <div class="topLeft">
            <ion-icon
              @click="deleteSmoothie(smoothie._id)"
              name="trash-outline"
            ></ion-icon>
          </div>
        </div>
        <div class="editContainer">
          <div class="topRight">
            <router-link
              class="link"
              :to="{ name: 'EditSmoothie', params: { id: smoothie._id } }"
              ><ion-icon name="pencil"></ion-icon>
            </router-link>
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
.smoothie-main {
  max-width: 920px;
  text-align: center;
  margin: 0 auto;
}
.smoothie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.link {
  text-decoration: none;
  color: #e4e6eb;
}
.smoothie {
  background-color: var(--secondary);
  border-radius: 20px;
  margin: 10px 10px;
  text-align: center;
}
.smoothie-main-item {
  text-align: center;
  margin: 10px 30px;
}
.deleteContainer {
  position: relative;
  cursor: pointer;
}
.editContainer {
  position: relative;
  cursor: pointer;
}
.topRight {
  position: absolute;
  top: 6px;
  right: 8px;
  font-size: 30px;
  background-color: #2d88ff;
  padding: 6px 8px 0px 8px;
  border-radius: 60px;
}
.topLeft {
  position: absolute;
  top: 4px;
  left: 8px;
  font-size: 30px;
}
@media screen and (max-width: 960px) {
  .smoothie-main {
    max-width: 960px;
  }
  .smoothie-grid {
    grid-template-columns: repeat(2, 2fr);
  }
}
@media screen and (max-width: 660px) {
  .smoothie {
    min-width: 300px;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .smoothie-main {
    max-width: 660px;
  }
  .smoothie-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
