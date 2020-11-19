<template>
  <div class="d-flex justify-center align-center avatar-card" :style="cardStyle">
    <v-tooltip top v-if="tooltipText">
      <template v-slot:activator="{ on, attrs }">
        <img :src="require(`../../assets/images/${imageUrl}`)" :width="`${size}px`" :height="`${size}px`" v-bind="attrs"
          v-on="on" />
      </template>
      <span>{{ tooltipText }}</span>
    </v-tooltip>
    <v-badge
      color="black"
      overlap
      bottom
      offset-x="10"
      offset-y="10"
      :content="badge"
      v-else
    >
      <img :src="require(`../../assets/images/${imageUrl}`)" :width="`${size}px`" :height="`${size}px`" />
    </v-badge>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    imageUrl: String,
    size: Number,
    type: String,
    borderColor: String,
    tooltipText: String,
    badge: String
  },
  computed: {
  	cardStyle() {
  		let style
  		switch (this.type) {
  			case 'rounded':
  				style = 'border-radius: 50%;'
  				break
  			default:
          style = 'border-radius: 3px;'
          break
  		}
  		style += `height: ${this.size}px`
      if (this.borderColor) {
        style += `border: 1px solid ${this.borderColor};`
      }
  		return style
  	}
  }
};
</script>

<style scoped lang="sass">
.avatar-card
  overflow: hidden
  width: fit-content
</style>