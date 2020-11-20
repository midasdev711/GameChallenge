<template>
  <div class="d-flex justify-space-between align-center summoner-group">
    <img
      :src="require(`../../assets/images/${imageUrl}`)"
      width="20px"
      height="20px"
      v-for="(imageUrl, index) in summonerUrls"
      :key="index"
    />
  </div>
</template>

<script>
export default {
  name: "SummonerGroup",
  props: {
    summonerUrls: Array,
  },
};
</script>

<style scoped lang="sass">
.summoner-group
  flex-wrap: wrap
  width: 43px
  height: 43px
  min-width: 43px
</style>