<template>
  <div id="app">
    <div id="nav">
      <h1>Smoothieful</h1>
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
  font-family: "Kumbh Sans", sans-serif;
}
</style>
