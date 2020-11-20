<template>
  <div
    class="d-flex justify-center align-center status-card"
    :style="cardStyle"
  >
    <span>{{ type.toUpperCase() }}</span>
  </div>
</template>

<script>
export default {
  name: "StatusCard",
  props: {
    type: String,
    height: {
      type: String,
      default: "80",
    },
  },
  computed: {
    cardStyle() {
      let style;
      switch (this.type) {
        case "victory":
          style = "background: #57A773;";
          break;
        case "defeat":
          style = "background: #EE6352;";
          break;
        case "remake":
          style = "background: #44465D;";
          break;
      }
      style += `height: ${this.height}px`;
      return style;
    },
  },
};
</script>

<style scoped lang="sass">
.status-card
	width: 25px
	span
		float: right
		transform: rotate(-90deg)
		color: white
		font-size: 11px
		line-height: 9px
		font-weight: bold
		letter-spacing: 1px
</style>