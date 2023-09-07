<template>
  <div id="CV-Container">
    <print-button :myRef="$refs.A4" class="function-menu" />
    <div id="A-4" ref="A4">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import PrintButton from "@/components/PrintButton.vue"
</script>
<style lang="scss">
:root {
  --X: 100vh;
  --param: calc(0.00339*var(--X)); //vh => x = 1mm*X/295 = 0.00339  || vw => x = 1mm*X/295 = 0.00476*var(--X)

  --bg-out: #777;

  --bg-1: #fff;
  --bg-2: #333;

  --c-1: #000;
  --c-2: #fff;

  --c-aux: #aaa;

  --cs-1: #050;

  --s-1: white;
  --s-2: silver;

  --f-size-1: calc(5*var(--param));
  --f-size-2: calc(4.5*var(--param));
  --f-size-3: calc(3.7*var(--param));
  --f-size-4: calc(3.5*var(--param));
}

* {
  // list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: 'Times New Roman', Times, serif;

}

#CV-Container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background: var(--bg-out);
  width: 100vw;
  height: 100vh;
}

#A-4 {
  width: 71vh;
  height: 100vh;
}

.function-menu {
  position: fixed;
  top: 0;
  right: 0;
  font-size: 1rem;
  height: 2rem;
}

@media print {
  #CV-Container {
    // background-color: #345;
  }

  .function-menu {
    display: none;
  }

  .web {
    display: none;

  }

}

@media (max-aspect-ratio: 0.707) {
  :root {
    --X: 100vw;
    --param: calc(0.00476*var(--X)); //vh => x = 1mm*X/295 = 0.00339  || vw => x = 1mm*X/295 = 0.00476*var(--X)
  }

  #A-4 {
    width: 100vw;
    height: 141vw;
  }
}
</style>
