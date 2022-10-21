import { defineStore } from "pinia";
import { suits } from "./dummy-code/suits";

export const useStore = defineStore("main", {
  state: () => ({
    theBlocks: [],
  }),
  getters: {},
  actions: {
    createBlock() {
      const obj = {
        id: this.theBlocks.length,
        width: "25",
        height: "300px",
        color: "#fafafa",
        image: "",
      };
      this.theBlocks.push(obj);
    },
    deleteBlock() {
      this.theBlocks.pop();
    },
    changeWidth(id, val) {
      this.theBlocks[id].width = val;
    },
    changeHeight(id, val) {
      this.theBlocks[id].height = val;
    },
    changeColor(id, val) {
      this.theBlocks[id].color = val;
    },
  },
});
