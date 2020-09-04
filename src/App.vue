<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style>
:root {
  --primary: #18191a;
  --textWhite: #e4e6eb;
  --secondary: #242526;
}

body {
  background-color: var(--primary);
  color: var(--textWhite);
  max-width: 960px;
  text-align: center;
  margin: 0px auto;
}
.smoothie {
  background-color: var(--secondary);
}
.smoothie-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.smoothie-main-item {
  text-align: center;
  margin: 10px 30px;
}
</style>
