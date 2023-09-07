<template>
  <div class="container-404">
    <h1>404 - Page Not Found</h1>
    <router-link class='link' :to="{ name: 'Page' }">Return</router-link>
  </div>
</template>
<style lang="scss">
.container-404 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;

  * {
    font-size: 1.5rem;
    color: black;
    text-decoration: none;
    margin: 2rem;
  }

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7rem;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    background: #000;
    padding: 5px;

    &:hover {
      box-shadow: 0 0 10px 7px yellowgreen;
    }
  }
}
</style>
