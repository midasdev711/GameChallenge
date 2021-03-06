<template>
  <v-row class="pt-0">
    <v-dialog
      v-model="filterdialog"
      dark
      max-width="500px"
    >
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-checkbox
                  v-model="filter.victory"
                  :label="`Victory`"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col cols="6">
                <v-checkbox
                  v-model="filter.defeat"
                  :label="`Defeat`"
                  hide-details
                ></v-checkbox>
              </v-col>
              <v-col 
                cols="12" 
              >
                <v-select
                  v-model="filter.kda"
                  :items="kdaItems"
                  deletable-chips
                  chips
                  label="KDA"
                  multiple
                  clearable
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  v-model="filter.duration"
                  :items="durationItems"
                  label="Duration"
                  clearable
                ></v-select>
              </v-col>
              <v-col
                cols="12"
              >
                <v-select
                  v-model="filter.queue"
                  :items="queueItems"
                  deletable-chips
                  chips
                  multiple
                  clearable
                  label="Queue"
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            @click="clearFilter"
          >
            Clear
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-col cols="12">
      <div class="d-flex filter-block pt-3 pl-1">
        <div class="tags">
          <v-btn
            class="tag-button mr-1"
            v-for="(word, index) in filterKeywords"
            :key="index"
            @click="removeFilter(word)"
          >
            {{ word.text }}
            <v-icon class="ml-1"> mdi-close </v-icon>
          </v-btn>
        </div>
        <div class="ml-auto d-flex">
          <v-btn text class="white--text font-size1 pl-1 pr-1 mr-2" small @click="filterdialog = true">
            <v-icon small>mdi-filter-outline</v-icon>
            <span>Filter</span>
          </v-btn>
          <div class="pagination">
            <v-btn class="mr-3" @click="prevPage" :disabled="currentPage == 1">
              <v-icon dark> mdi-chevron-left </v-icon>
            </v-btn>
            <span class="font-size2 font-color1">
              {{ (currentPage - 1) * pageCount + 1 }} /
              {{ endPos }} of {{ totalCount }}
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
        <template v-if="records.length > 0">
          <MatchRecord
            class="individual-match"
            :record="result"
            v-for="(result, index) in records"
            :key="'result' + index"
          />
        </template>
        <div v-else class="no-record mr-4 d-flex align-center justify-center">
          <h3 class="font-grey">No Data</h3>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MatchRecord from "@/components/MatchRecord";

const originFilter = {
  victory: false,
  defeat: false,
  kda: [],
  duration: null,
  queue: null
}

export default {
  name: "MatchHistory",
  components: {
    MatchRecord,
  },
  data: () => {
    return {
      currentPage: 1,
      pageCount: 10,
      filterdialog: false,
      filter: originFilter,
      kdaItems: [{
        text: '1 - 2',
        value: 1,
      },{
        text: '2 - 3',
        value: 2,
      },{
        text: '3 - 4',
        value: 3,
      },{
        text: '4 - 5',
        value: 4,
      }],
      durationItems: [{
        text: '20 - 30', 
        value: 1200
      },{
        text: '30 - 40', 
        value: 1800
      },{
        text: '40 - 50', 
        value: 2400
      },{
        text: '50 - 60', 
        value: 3000
      }],
      queueItems: [{
        text: 'Ranked solo',
        value: 420
      },{
        text: 'Flex',
        value: 440
      },{
        text: '3v3',
        value: 430
      }]
    };
  },
  computed: {
    ...mapGetters("app", ["matchHistoryData"]),
    filteredItem() {
      let items = (this.matchHistoryData && this.matchHistoryData.results) || [];
      items = items.filter(item => (this.filter.victory && item.win) || (this.filter.defeat && !item.win) || (!this.filter.victory && !this.filter.defeat))
      if (this.filter.queue && this.filter.queue.length > 0) {
        items = items.filter(item => this.filter.queue.indexOf(item.queueId) > -1)
      }
      if (this.filter.duration) {
        items = items.filter(item => item.gameDuration >= this.filter.duration && item.gameDuration < this.filter.duration + 600)
      }
      if (this.filter.kda.length > 0) {
        items = items.filter(item => {
          for (let i = 0; i < this.filter.kda.length; i ++) {
            if (item.kda >= this.filter.kda[i] && item.kda < this.filter.kda[i] + 1) {
              return item;
            }
          }
        })
      }
      return items;
    },
    totalCount() {
      return this.filteredItem.length;
    },
    endPos() {
      return Math.min(this.currentPage * this.pageCount, this.totalCount);
    },
    records() {
      let startPos = (this.currentPage - 1) * this.pageCount;
      return (this.filteredItem || []).slice(startPos, this.endPos);
    },
    filterKeywords() {
      let items = [];
      if (this.filter.victory) {
        items.push({ text: 'Victory', value: true, type: 'victory' });
      }
      if (this.filter.defeat) {
        items.push({ text: 'Defeat', value: true, type: 'defeat' });
      }
      if (this.filter.duration) {
        items.push({ text: this.durationItems.filter(item => item.value == this.filter.duration).map(item => item.text)[0], value: true, type: 'duration' });
      }
      if (this.filter.queue && this.filter.queue.length > 0) {
        let queueKeys = this.queueItems
          .filter((item) => this.filter.queue.indexOf(item.value) > -1)
          .map(item => {
            return {
              ...item,
              type: 'queue'
            }
          });
        items = [ ...items, ...queueKeys ];
      }
      if (this.filter.kda && this.filter.kda.length > 0) {
        let queueKeys = this.kdaItems
          .filter((item) => this.filter.kda.indexOf(item.value) > -1)
          .map(item => {
            return {
              ...item,
              type: 'kda'
            }
          });
        items = [ ...items, ...queueKeys ];
      }
      return items;
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
    },
    clearFilter() {
      this.filter = Object.assign({}, originFilter);
      this.filterdialog = false;
    },
    removeFilter(item) {
      console.log(item)
      if (item.type == 'victory') {
        this.filter.victory = false;
      } else if (item.type == 'defeat') {
        this.filter.defeat = false;
      } else if (item.type == 'duration') {
        this.filter.duration = null;
      } else if (item.type == 'queue') {
        let index = this.filter.queue.indexOf(item.value);
        this.filter.queue.splice(index, 1);
      } else if (item.type == 'kda') {
        let index = this.filter.kda.indexOf(item.value);
        this.filter.kda.splice(index, 1);
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
  .no-record
    width: 100%
    background: #00000D
    min-height: 300px
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