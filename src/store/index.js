import {defineStore} from "pinia";

export const useStore = defineStore('min', {
  state: () => ({
    categoryId: "ADDEdcfA-2308-F6c2-cF93-7becb31AC1cb",
  }),
  getters: {
    getCategoryId(state) {
      return this.categoryId;
    }
  },
  actions: {
    setCategoryId(val) {
      this.categoryId = val;
      // console.log(this.categoryId);
    }
  }

});
