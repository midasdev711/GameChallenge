<template>
  <div class="d-flex match-record">
    <StatusCard type="victory"/>
    <div class="match-title-block d-flex justify-center">
      <span class="font-size2 font-color2 mb-0">4 Hours Ago</span>
      <span class="mb-0 font-color3 font-size1 font-weight-bold">Ranked Solo</span>
      <span class="mb-0 font-color2 font-size2">34:20 .</span>
    </div>
    <div class="magic-block d-flex">
      <Avatar imageUrl="character2.png" :size="54" type="rounded" borderColor="#1C1F33" />
      <SummonerGroup :summonerUrls="summonerUrls" />
    </div>
    <div class="match-record-detail">
      <p class="mb-0 font-size1 font-grey font-weight-bold"><span class="mr-1">14</span>/<span class="ml-1 mr-1">5</span>/<span class="ml-1">6</span></p>
      <p class="mb-0 font-color2 font-size2">4.20:1 KDA</p>
    </div>
    <div class="match-record-detail2">
      <p class="mb-2 font-grey font-size1 font-weight-bold">160 CS</p>
      <p class="pt-2 mb-0 font-color2 font-size2">55% KP</p>
    </div>
    <div class="spell-group-detail d-flex align-center">
      <SpellGroup :spellUrls="spellUrls" />
    </div>
    <div class="d-flex align-center team-avatars">
      <TeamVersusCard :players="players" />
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
      players: [
        {
          "championId": 518,
          "roleId": 4,
          "summonerName": "Yoshiane",
          "teamId": 100
        },
        {
          "championId": 28,
          "roleId": 3,
          "summonerName": "Desolarus",
          "teamId": 100
        },
        {
          "championId": 10,
          "roleId": 2,
          "summonerName": "HF Yuno",
          "teamId": 100
        },
        {
          "championId": 81,
          "roleId": 1,
          "summonerName": "Tarky",
          "teamId": 100
        },
        {
          "championId": 53,
          "roleId": 0,
          "summonerName": "ardakyrozgr",
          "teamId": 100
        },
        {
          "championId": 246,
          "roleId": 4,
          "summonerName": "Fric",
          "teamId": 200
        },
        {
          "championId": 75,
          "roleId": 3,
          "summonerName": "LaRuSs",
          "teamId": 200
        },
        {
          "championId": 8,
          "roleId": 2,
          "summonerName": "ZjeIympth ",
          "teamId": 200
        },
        {
          "championId": 29,
          "roleId": 1,
          "summonerName": "SheHasBF GO NEXT",
          "teamId": 200
        },
        {
          "championId": 25,
          "roleId": 0,
          "summonerName": "ÊnesÂbi",
          "teamId": 200
        }
      ]
    }
  },
  computed: {
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