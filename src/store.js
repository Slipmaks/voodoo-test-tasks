import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => ({
    theBlocks: [],
    items: [
      {
        id: 0,
        img: "@/assets/ball.jpg",
        title: "Ball",
        message: "",
      },
      {
        id: 1,
        img: "@/assets/drunk-roulette.jpg",
        title: "Drunk roulette",
        message: "",
      },
      {
        id: 2,
        img: "@/assets/panel.jpg",
        title: "Panel",
        message: "",
      },
    ],
    cart: { items: [], deliveryDate: null },
    wrappers: [
      { id: 0, img: "@/assets/wrappers/image1.png" },
      { id: 1, img: "@/assets/wrappers/image2.png" },
      { id: 2, img: "@/assets/wrappers/image3.png" },
      { id: 3, img: "@/assets/wrappers/image4.png" },
    ],
  }),
  getters: {},
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
      alert("You order: " + this.cart.items.length + " items!");
    },
  },
});
