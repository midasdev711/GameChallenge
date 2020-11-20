<template>
  <div class="d-flex justify-center align-center versus-card">
    <div class="d-flex align-center">
      <span class="font-color2 font-size3 pr-1">{{ firstPlayer.summonerName }}</span>
      <img
        class="player-avatar first ml-2"
        :src="require(`../../assets/images/${firstPlayer.summonerImage}`)"
        width="21px"
        height="21px"
      />
    </div>
    <img
      class="ml-2 mr-2"
      :src="require(`../../assets/images/${versusImage}`)"
      width="13.16px"
      height="13.16px"
    />
    <div class="d-flex align-center">
      <img
        class="player-avatar second mr-2"
        :src="require(`../../assets/images/${secondPlayer.summonerImage}`)"
        width="21px"
        height="21px"
      />
      <span class="font-color2 font-size3 pl-1">{{ secondPlayer.summonerName }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "VersusCard",
  props: {
    firstPlayer: {
      summonerName: String,
      summonerImage: String,
    },
    secondPlayer: {
      summonerName: String,
      summonerImage: String,
    },
    versusImage: String,
  },
};
</script>

<style scoped lang="sass">
.player-avatar
	border-radius: 50%
	&.first
		border: 1px solid #3454D1
	&.second
		border: 1px solid #EE6352
</style>