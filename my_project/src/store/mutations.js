//包含n个用于直接更新状态数据的方法的对象
import {
  RECEIVE_CATEGORIES,
  RECEIVE_CLASSIFYLIST,
  RECEIVE_FLASHSALE,
  RECEIVE_NAVLIST,
  RECEIVE_NEWITEM,
  RECEIVE_POPULARITEM,
} from "@/store/mutation-types";

export default {
  [RECEIVE_CATEGORIES](state,categoryList){
    state.categoryList=categoryList
  }

}
