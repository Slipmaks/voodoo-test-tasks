import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    theBlocks: [],
    items: [
      {
        id: 0,
        img: "src/assets/ball.jpg",
        title: "Ball",
        message: "",
      },
      {
        id: 1,
        img: "src/assets/drunk-roulette.jpg",
        title: "Drunk roulette",
        message: "",
      },
      {
        id: 2,
        img: "src/assets/panel.jpg",
        title: "Panel",
        message: "",
      },
    ],
    cart: { items: [], deliveryDate: null },
    wrappers: [
      { id: 0, img: "src/assets/wrappers/image 1.png" },
      { id: 1, img: "src/assets/wrappers/image 2.png" },
      { id: 2, img: "src/assets/wrappers/image 3.png" },
      { id: 3, img: "src/assets/wrappers/image 4.png" },
    ],
  }),

  getters: {
    itemCount(state) {
      if (state.cart.items.length == 1) {
        return " item!";
      } else {
        return " items!";
      }
    },
  },
  actions: {
    createBlock() {
      if (this.theBlocks.length >= 8) {
        return;
      }
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
    setDeliverydate(val) {
      this.cart.deliveryDate = val;
    },
    setGiftWrapper(id, val) {
      const item = this.cart.items.find((item) => item.id === id);
      item.wrapper = val;
    },
    submit() {
      alert("You order: " + this.cart.items.length + this.itemCount);
    },
  },
});
