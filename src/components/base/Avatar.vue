<template>
  <div
    class="d-flex justify-center avatar-card"
  >
    <v-tooltip top v-if="tooltipText">
      <template v-slot:activator="{ on, attrs }">
        <img
          :src="require(`../../assets/images/${imageUrl}`)"
          :width="`${size}px`"
          :height="`${size}px`"
          :style="imageStyle"
          v-bind="attrs"
          v-on="on"
        />
      </template>
      <span>{{ tooltipText }}</span>
    </v-tooltip>
    <div v-else class="non-tooltip">
      <img
        :src="require(`../../assets/images/${imageUrl}`)"
        :width="`${size}px`"
        :height="`${size}px`"
        :style="imageStyle"
      />
      <div class="badge d-flex justify-center align-center" v-if="badge">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <span
              v-bind="attrs"
              v-on="on"
              class="font-color2 font-size2 font-weight-bold"
            >{{ badge }}</span>
          </template>
          <span class="font-color2 font-size2">Level {{ badge }}</span>
        </v-tooltip>
      </div>
    </div>
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
    badge: Number
  },
  computed: {
    imageStyle() {
      let style;
      switch (this.type) {
        case "rounded":
          style = "border-radius: 50%;";
          break;
        default:
          style = "border-radius: 3px;";
          break;
      }
      style += `height: ${this.size}px`;
      if (this.borderColor) {
        style += `border: 1px solid ${this.borderColor};`;
      }
      return style;
    }
  },
};
</script>

<style scoped lang="sass">
.avatar-card
  overflow: hidden
  width: fit-content
  .non-tooltip
    position: relative
    .badge
      position: absolute
      background: black
      border-radius: 50%
      left: calc(50% - 8px)!important
      bottom: 0
      width: 16px
      height: 16px
</style>