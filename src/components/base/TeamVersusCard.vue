<template>
  <div class="teamversus-card">
  	<div class="d-flex align-center first-team">
	  	<img class="player-avatar first" :src="require(`../../assets/images/character${index + 1}.png`)" v-for="(player, index) in firstTeam" :key="'first' + index" width="21px" height="21px" />
  	</div>
    <div class="d-flex align-center second-team">
      <img class="player-avatar second" :src="require(`../../assets/images/character${5 - index}.png`)" v-for="(player, index) in secondTeam" :key="'second' + index" width="21px" height="21px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamVersusCard",
  props: {
    players: Array
  },
  computed: {
    firstTeam() {
      let teamId = Math.max.apply(Math, this.players.map(function(o) { return o.teamId; }))
      return this.players.filter(item => item.teamId == teamId)
    },
    secondTeam() {
      let teamId = Math.min.apply(Math, this.players.map(function(o) { return o.teamId; }))
      return this.players.filter(item => item.teamId == teamId)
    }
  }
};
</script>

<style scoped lang="sass">
.player-avatar
	border-radius: 50%
	&.first
		border: 1px solid #3454D1
	&.second
		border: 1px solid #EE6352
.first-team
	margin-left: 10px
	margin-bottom: -2px
</style>