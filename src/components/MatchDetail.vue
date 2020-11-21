<template>
  <div class="d-flex matchdetail-card pl-4">
    <div class="pt-5">
      <StatusCard :type="status" height="134" />
    </div>
    <div class="ml-6 pt-5">
      <div class="title-block d-flex align-center pb-1 mb-2">
        <img
          :src="require(`../assets/images/top.png`)"
          width="14px"
          height="14px"
        />
        <span class="font-size1 font-color1 font-weight-bold pl-1 ml-2">{{ record.summonerName }}</span>
      </div>
      <div class="detail-block d-flex">
        <div class="magic-block d-flex pt-2 justify-space-between">
          <Avatar imageUrl="character4.png" :size="44" />
          <SummonerGroup :summonerUrls="summonerUrls" />
          <SpellGroup :spellUrls="spellUrls" />
        </div>
        <div class="statistic-block">
          <p class="mb-0">
            <span class="font-size1 font-color1">Duration: </span>
            <span class="font-size1 font-color1 font-weight-bold">{{ gameDuration }}</span>
          </p>
          <p class="font-size2 font-color1 text-capitalize">
            {{ gameCreated }}
          </p>
          <p class="mb-0 font-size1 font-color2 font-weight-bold">
            <span :class="'mr-1 ' + detailStyle(record.kills)">{{ record.kills }}</span>/
            <span :class="'ml-1 mr-1 ' + detailStyle(record.deaths)">{{ record.deaths }}</span>/
            <span :class="'ml-1 ' + detailStyle(record.assists)">{{ record.assists }}</span>
          </p>
          <p class="mb-0 font-color2 font-size2">{{ record.kda }} KDA</p>
          <p class="mb-0 font-color3 font-size1 font-weight-bold">
            {{ record.cs }} CS
          </p>
          <p class="mb-0 font-color2 font-size2">
            {{ record.killParticipation }}% KP
          </p>
        </div>
        <div class="team-block ml-3">
          <VersusCard
            :firstPlayer="firstPlayer"
            :secondPlayer="secondPlayer"
            :versusImage="versusImage"
            v-for="i in 5"
            :key="i"
          />
        </div>
      </div>
    </div>
    <div class="d-flex align-center ml-auto mr-8">
      <DropdownButton />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
import StatusCard from "@/components/base/StatusCard";
import SummonerGroup from "@/components/base/SummonerGroup";
import SpellGroup from "@/components/base/SpellGroup";
import Avatar from "@/components/base/Avatar";
import VersusCard from "@/components/base/VersusCard";
import DropdownButton from "@/components/base/DropdownButton";

export default {
  name: "MatchDetail",
  components: {
    StatusCard,
    SummonerGroup,
    SpellGroup,
    Avatar,
    VersusCard,
    DropdownButton,
  },
  props: {},
  data: () => {
    return {
      summonerUrls: [
        "summoner1.png",
        "summoner2.png",
        "summoner3.png",
        "summoner4.png",
      ],
      spellUrls: [
        "spell-01.png",
        "spell-02.png",
        "spell-03.png",
        "spell-04.png",
        "spell-05.png",
        "empty.png",
        "empty.png",
      ],
      firstPlayer: {
        summonerName: "Summoner1",
        summonerImage: "character1.png",
      },
      secondPlayer: {
        summonerName: "Summoner2",
        summonerImage: "character2.png",
      },
      versusImage: "top.png",
    };
  },
  computed: {
    ...mapGetters("app", {
      record: "latestMatchAnalysis",
    }),
    gameCreated() {
      return moment(this.record && this.record.gameCreation).fromNow();
    },
    gameDuration() {
      return "" + Math.floor(this.record.gameDuration / 60) + ":" + (this.record.gameDuration % 60);
    },
    status() {
      return this.record && this.record.win ? "victory" : "defeat";
    },
  },
  methods: {
    detailStyle(data) {
      return data > 10 ? 'font-green' : (data > 5 ? 'font-grey' : 'font-red')
    }
  }
};
</script>

<style scoped lang="sass">
.matchdetail-card
  min-height: 178px
  background: #00000D
  .title-block
    height: 20px
    span
      margin-left: 10px
  .detail-block
    .magic-block
      width: 97px
      flex-wrap: wrap
      height: 113px
    .statistic-block
      letter-spacing: .5px
      margin-left: 35px
</style>