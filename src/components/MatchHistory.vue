<template>
  <v-row class="pt-0">
    <v-col cols="12">
      <div class="d-flex filter-block pt-3 pl-4">
        <div class="tags">
          <v-btn
            class="tag-button mr-1"
            v-for="(word, index) in filterKeywords"
            :key="index"
          >
            {{ word }}
            <v-icon class="ml-1"> mdi-close </v-icon>
          </v-btn>
        </div>
        <div class="ml-auto d-flex">
          <v-btn text class="white--text font-size1 pl-1 pr-1 mr-2" small>
            <v-icon small>mdi-filter-outline</v-icon>
            <span>Filter</span>
          </v-btn>
          <div class="pagination">
            <v-btn class="mr-3" @click="prevPage" :disabled="currentPage == 1">
              <v-icon dark> mdi-chevron-left </v-icon>
            </v-btn>
            <span class="font-size2 font-color1">
              {{ (currentPage - 1) * pageCount + 1 }} /
              {{ currentPage * pageCount }} of {{ totalCount }}
            </span>
            <v-btn class="ml-3" @click="nextPage" :disabled="currentPage * pageCount >= totalCount">
              <v-icon dark> mdi-chevron-right </v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </v-col>
    <v-col cols="12" class="pr-0 pl-4 pt-0">
      <div class="d-flex flex-wrap record-block">
        <MatchRecord
          class="individual-match"
          :record="result"
          v-for="(result, index) in records"
          :key="'result' + index"
        />
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
    MatchRecord,
  },
  data: () => {
    return {
      currentPage: 1,
      pageCount: 10,
      filterKeywords: ["All champions", "All roles", "Season 9"],
    };
  },
  computed: {
    ...mapGetters("app", ["matchHistoryData"]),
    totalCount() {
      return this.matchHistoryData && this.matchHistoryData.results && this.matchHistoryData.results.length;
    },
    records() {
      let startPos = (this.currentPage - 1) * this.pageCount;
      let endPos = Math.max(this.currentPage * this.pageCount, this.totalCount);
      return (this.matchHistoryData.results || []).slice(startPos, endPos);
    }
  },
  methods: {
    nextPage() {
      if (this.currentPage * this.pageCount < this.totalCount) {
        this.currentPage ++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage --;
      }
    }
  }
};
</script>

<style scoped lang="sass">
.record-block
  width: 100%
  max-height: 578px
  overflow-y: auto
  .individual-match + .individual-match
    margin-top: 3px
.pagination
  .v-btn.v-size--default
    padding: 0!important
    width: 30px
    height: 30px
    min-width: 30px
    border-radius: 0
    color: #868797
    background-color: #44465D!important
    &:disabled
      color: #44465D
      background-color: #1C1F33!important
.tag-button.v-btn.v-size--default
  background: #00000D!important
  height: 30px!important
  padding: 5px!important
  color: #868797!important
  border-radius: 0
  text-transform: capitalize!important
  letter-spacing: -.5px
  .v-btn__content
    font-size: 10px
    line-height: 12px
    color: #868797!important
    i
      font-size: 12px
</style>