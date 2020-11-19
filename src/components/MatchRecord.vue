<template>
  <div class="d-flex match-record" :style="cardStyle">
    <StatusCard :type="status"/>
    <div class="match-title-block d-flex justify-center">
      <span class="font-size2 font-color2 mb-0">{{ gameCreated }}</span>
      <span class="mb-0 font-color3 font-size1 font-weight-bold">Ranked Solo</span>
      <span class="mb-0 font-color2 font-size2">{{ gameDuration }} .</span>
    </div>
    <div class="magic-block d-flex">
      <Avatar imageUrl="character2.png" :size="54" type="rounded" borderColor="#1C1F33" />
      <SummonerGroup :summonerUrls="summonerUrls" />
    </div>
    <div class="match-record-detail">
      <p class="mb-0 font-size1 font-grey font-weight-bold"><span class="mr-1">{{ record.kills }}</span>/<span class="ml-1 mr-1">{{ record.deaths }}</span>/<span class="ml-1">{{ record.assists }}</span></p>
      <p class="mb-0 font-color2 font-size2">{{ record.kda }} KDA</p>
    </div>
    <div class="match-record-detail2">
      <p class="mb-2 font-grey font-size1 font-weight-bold">{{ record.cs }} CS</p>
      <p class="pt-2 mb-0 font-color2 font-size2">{{ record.killParticipation }}% KP</p>
    </div>
    <div class="spell-group-detail d-flex align-center">
      <SpellGroup :spellUrls="spellUrls" />
    </div>
    <div class="d-flex align-center team-avatars">
      <TeamVersusCard :players="record.teamSummary" />
    </div>
    <div class="d-flex align-center ml-auto mr-8">
      <DropdownButton />
    </div>
  </div>
</template>

<script>
import StatusCard from "@/components/base/StatusCard";
import SummonerGroup from "@/components/base/SummonerGroup";
import SpellGroup from "@/components/base/SpellGroup";
import Avatar from "@/components/base/Avatar";
import DropdownButton from "@/components/base/DropdownButton";
import TeamVersusCard from "@/components/base/TeamVersusCard";
import moment from "moment";

export default {
  name: "MatchRecord",
  components: {
    StatusCard,
    SummonerGroup,
    SpellGroup,
    Avatar,
    DropdownButton,
    TeamVersusCard
  },
  props: {
    record: Object
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
      ],
      firstPlayer: {
        summonerName: 'Summoner1',
        summonerImage: 'character1.png'
      },
      secondPlayer: {
        summonerName: 'Summoner2',
        summonerImage: 'character2.png'
      },
      versusImage: 'top.png',
    }
  },
  computed: {
    gameCreated() {
      return moment(this.record.gameCreation).fromNow();
    },
    gameDuration() {
      return '' + Math.floor(this.record.gameDuration / 60) + ':' + this.record.gameDuration % 60;
    },
    status() {
      return this.record.win ? 'victory' : 'defeat';
    },
    cardStyle() {
      switch (this.status) {
        case 'victory':
          return `background: rgba(136, 217, 162, 0.1);`;
        case 'defeat':
          return `background: rgba(238, 99, 82, 0.1);`;
        case 'remake':
          return `background: rgba(182, 183, 198, 0.1);`;
      }
    }
  }
};
</script>

<style scoped lang="sass">
.match-record
  width: 100%
  .match-title-block
    flex-direction: column
    margin-left: 29px
  .magic-block
    margin-left: 75px
    align-items: center
    justify-content: space-between
    min-width: 113px
  .match-record-detail
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 69px
  .match-record-detail2
    display: flex
    flex-direction: column
    justify-content: center
    margin-left: 61px
  .spell-group-detail
    margin-left: 68px
  .team-avatars
    margin-left: 62px
</style>