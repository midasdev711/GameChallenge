<template>
  <v-row>
    <v-col cols="12">
      <div class="d-flex filter-block pt-4 pl-4">
        Filter
      </div>
    </v-col>
    <v-col cols="12" class="pr-0 pl-4">
      <div class="d-flex record-block">
        <MatchRecord />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MatchRecord from "@/components/MatchRecord";

export default {
  name: "MatchHistory",
  components: {
    MatchRecord
  },
  data: () => {
    return {
      summonerUrls: [
        'summoner1.png',
        'summoner2.png',
        'summoner3.png',
        'summoner4.png'
      ],
      spellUrls: [
        'spell-01.png',
        'spell-02.png',
        'spell-03.png',
        'spell-04.png',
        'spell-05.png',
        'empty.png',
        'empty.png',
      ],
      firstPlayer: {
        summonerName: 'Summoner1',
        summonerImage: 'character1.png'
      },
      secondPlayer: {
        summonerName: 'Summoner2',
        summonerImage: 'character2.png'
      },
      versusImage: 'top.png'
    }
  },
  computed: {
    ...mapGetters('app', ['matchHistoryData'])
  }
};
</script>

<style scoped lang="sass">
.record-block
  width: 100%
</style>