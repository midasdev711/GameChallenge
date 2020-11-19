import APIService from '@/apiservice/api.js';
import mockdata from '@/mockdata/Challenge - Mockdata.json';
import {
  SET_MATCH_HISTORY_DATA,
} from "../mutation-types";

const API = new APIService();

const state = {
  matchHistoryData: {}
};

const getters = {
  matchHistoryData: state => state.matchHistoryData.matches[0],
  latestMatchAnalysis: state => state.matchHistoryData.analysis[0],
};

const mutations = {
  [SET_MATCH_HISTORY_DATA]: (state, payload) => {
    state.matchHistoryData = payload;
  },
};

const actions = {
  getMatchHistory: ({commit}) => {
    commit(SET_MATCH_HISTORY_DATA, mockdata);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
