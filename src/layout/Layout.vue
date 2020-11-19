<template>
  <v-app class="main-app">
    <div class="default-layout">
      <router-view />
    </div>
  </v-app>
</template>

<script>
  export default {
    name: 'DefaultLayout',

    components: {
    },

    data: () => ({
      expandOnHover: false,
    }),
  }
</script>

<style lang="sass">
  .default-layout
    max-width: 1116px
    margin: 0 auto
    width: 100%
  .main-app 
    background-image: url('../assets/images/background.png')!important
    background-position: center!important
    background-size: cover!important
</style>