import { defineStore } from "pinia";
import { suits } from "./dummy-code/suits";

export const useStore = defineStore("main", {
  state: () => ({
    theBlocks: [
      {
        id: 1,
        width: "300px",
        height: "25",
        color: "#fafafa",
        image: "",
      },
    ],
  }),
  getters: {},
  actions: {
    createBlock() {
      const obj = {
        id: this.theBlocks.length + 1,
        width: "300px",
        height: "25",
        color: "#fafafa",
        image: "",
      };
      this.theBlocks.push(obj);
    },
    deleteBlock() {
      this.theBlocks.pop();
    },
  },
});
