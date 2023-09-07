<template>
  <div id="CV1">
    <header>
      <strong class="main-title" @click="resetZoom">
        LEONARDO PEREIRA
      </strong>
      <div class="subtitle">
        <strong>
          Front-End | FullStack
        </strong>

        <input autocomplete=on type="email" v-model="contacts.email" pattern=".+@globex\.com" required>
        <input type="tel" v-model="contacts.number">
      </div>
    </header>
    <main>
      <strong class="title">Main</strong>
    </main>

    <nav>
      <div class='stacks'>
        <strong class="title">Stacks:</strong>
        <ol>
          <li v-for="stack in stacks" :key="stack.name">• {{ stack.name }}</li>
        </ol>
      </div>
    </nav>
    <footer>footer</footer>
  </div>
</template>
<script lang="ts">
import { useDataStore } from '@/store/data';
export default {
  setup() {
    const data = useDataStore();
    return { data }
  },
  data() {
    return {
      stacks: this.data.stacks,
      contacts: this.data.contacts,

    }
  },
  methods: {
    resetZoom() {

      document.body.style.transform = "scale(1)";
    }

  }
}
</script>

<style lang="scss" scoped>
$un: 0.375mm;

#CV1 {
  display: grid;
  background: var(--bg-1);
  // padding: calc(20*var(--param));
  grid-template-columns: 2fr 3fr;
  grid-template-rows: calc(30*var(--param)) 1fr calc(15*var(--param));
  grid-template-areas:
    "header header"
    "nav main"
    "footer footer"
  ;
  gap: calc(5*var(--param));
  color: red;
  color: var(--c-1);
  font-size: var(--f-size-1);
}

header {
  grid-area: header;
  background: var(--bg-2);
  color: var(--c-2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  font-size: var(--f-size-1);

  .subtitle {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    font-size: var(--f-size-1);

    input {
      display: flex;
      text-align: center;
      width: 100%;
    }
  }
}

main {
  font-size: var(--f-size-1);
  grid-area: main;
  // background: #f00;
}

nav {
  grid-area: nav;
  border-right: var(--c-2) 1mm solid;
  // background: #ff0;

  .stacks {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f0f;

    ol {
      display: grid;
      width: 75%;
      // grid-row: auto;
      grid-template-columns: repeat(2, 1fr);
      gap: 1mm;
      justify-content: center;
      justify-items: stretch;
    }

    li {
      // grid-area: li;
      display: flex;
      font-size: var(--f-size-1);
      text-align: left;
    }
  }
}

footer {
  grid-area: footer;
  background: #0ff;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-bottom: 5mm;
}
</style>
