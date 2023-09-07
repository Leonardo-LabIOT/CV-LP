<template>
  <div @click="printContent" class="print-menu">
    <div class="title">
      <!-- Menu -->
      Print
    </div>
  </div>
</template>
<script lang="ts">

export default {
  props: { myRef: HTMLElement },
  methods: {
    printContent() {
      const contentToPrint = this.myRef;
      window.print();
    },
  },
}
</script>
<style scoped lang="scss">
.print-menu {
  margin: 10px;
  border-radius: 5px;
  background: #000;

  .title {
    padding: 5px;
    font-weight: 700;
    color: aliceblue;
    cursor: pointer;

    &:hover {
      box-shadow: 0 0 5px 5px #0FF5;
    }
  }
}
</style>
