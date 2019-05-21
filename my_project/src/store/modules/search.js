/**
 * 用于管理搜索页得状态数据得模块
 */
import {
  reqInitSearch
} from "@/api/index";

import {
  RECEIVE_INITSEARCH
} from '../mutation-types';

const state={
  initSearchData: {}
}

const mutations={
  [RECEIVE_INITSEARCH](state,initSearchData){
    state.initSearchData=initSearchData
  }
}

const actions={
  async getInitSearch({commit}){
    if(result.code==='200'){
      commit(RECEIVE_INITSEARCH,result.data)
    }
  }
}

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
}
