import config from "@/config";

import {
  NAVIGATION_DRAWER_SCHEME,
} from "../mutation-types";

const state = {
  colorScheme: config.schemes
};

const getters = {
  navDrawerScheme: state => state.navDrawerScheme,
  navToolbarScheme: state => state.navToolbarScheme,
  navFooterScheme: state => state.navFooterScheme,
  navDrawerAlphaMod: state => state.alpha,
  navDrawerAlphaImg: state => state.navDrawerAlphaImage,
  colorScheme: state => state.colorScheme,
  navDrawerVariant: state => state.variant
};

const mutations = {
  [NAVIGATION_DRAWER_SCHEME]: (state, payload) => {
    state.navDrawerScheme = payload;
  },
};

const actions = {
  login: ({ commit }, payload) => {
    commit(NAVIGATION_DRAWER_SCHEME, payload);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
};
