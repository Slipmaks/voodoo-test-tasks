import { defineStore } from "pinia";

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
        image: {
          url: "",
          overlayColor: "#fafafa",
          overlayOpacity: "0.1",
        },
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
    setImage(id, val) {
      this.theBlocks[id].image.url = val;
    },
    changeOverlayColor(id, val) {
      this.theBlocks[id].image.overlayColor = val;
    },
    changeOverlayOpacity(id, val) {
      this.theBlocks[id].image.overlayOpacity = val;
    },
  },
});
