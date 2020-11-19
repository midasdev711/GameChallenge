<template>
  <div class="d-flex justify-center align-center dropdown-btn">
  	<v-menu bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="bg-color1 trigger"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <span class="font-size1 text-white font-weight-bold mr-1">Select action</span>
          <img src="@/assets/icons/chevron-down.svg">
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title.toUpperCase() }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "DropdownButton",
  props: {
  },
  data: () => {
    return {
      items: [{
        title: 'Summary'
      },{
        title: '2D replay'
      },{
        title: 'AI Analysis'
      },{
        title: 'Play like a pro'
      }]
    }
  }
};
</script>

<style scoped lang="sass">
.trigger
  width: 151px
  height: 36px
  background: #002C9F
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5)
  border-radius: 0
</style>