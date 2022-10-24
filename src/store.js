import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    theBlocks: [],
    items: [
      {
        id: 1,
        img: "src/assets/ball.jpg",
        title: "Ball",
        message: "",
      },
      {
        id: 2,
        img: "src/assets/drunk-roulette.jpg",
        title: "Drunk roulette",
        message: "",
      },
      { id: 3, img: "src/assets/panel.jpg", title: "Panel", message: "" },
    ],
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
    changeMessage(id, val) {
      this.items[id].message = val;
    },
  },
});
