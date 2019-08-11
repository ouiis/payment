<template lang="pug">
  #app
    .wrapper
      router-view
</template>

<style lang="scss">
@import '@/assets/scss/mixins/_variables.scss';

body {
  background-color: $background-color;
}
</style>
