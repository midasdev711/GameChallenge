<template>
  <div class="d-flex justify-space-between align-center spell-group">
    <img :src="require(`../../assets/images/${imageUrl}`)" width="20px" height="20px" v-for="(imageUrl, index) in spellUrls" :key="index"/>
  </div>
</template>

<script>
export default {
  name: "SpellGroup",
  props: {
    spellUrls: Array
  },
};
</script>

<style scoped lang="sass">
.spell-group
  flex-wrap: wrap
  width: fit-content
  height: 43px
  flex-direction: column
  img + img 
    margin-left: 3px
</style>