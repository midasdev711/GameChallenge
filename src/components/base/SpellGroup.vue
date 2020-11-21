<template>
  <div class="d-flex justify-center align-center spell-group">
    <img
      :src="require(`../../assets/images/${imageUrl}`)"
      width="20px"
      height="20px"
      v-for="(imageUrl, index) in spellUrls"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  name: "SpellGroup",
  props: {
    spellUrls: Array,
  },
};
</script>

<style scoped lang="sass">
.spell-group
  flex-wrap: wrap
  width: fit-content
  min-width: 67px
  height: 46px
  flex-direction: column
  img
    margin: 1.5px
</style>