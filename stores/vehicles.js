import { defineStore } from "pinia";
import one from "@/assets/1.jpg";
import two from "@/assets/2.jpg";
import one1 from "@/assets/1-1.jpg";
import one2 from "@/assets/1-2.jpg";
import one3 from "@/assets/1-3.jpg";
import one4 from "@/assets/1-4.jpg";
import one5 from "@/assets/1-5.jpg";
import one6 from "@/assets/1-6.jpg";

export const useStore = defineStore("store", {
  state: () => {
    return {
      vehicles: [
        {
          name: "model one",
          slug: "van-one",
          price: "$16,350",
          img: one,
          gallery: [one1, one2, one3, one4, one5, one6],
          features: {
            seatbelts: 2,
            bedsize: "",
            sleeps: 2,
          },
        },
        {
          name: "model two",
          slug: "van-two",
          price: "$18,750",
          img: two,
          gallery: [one1, one2, one3, one4, one5, one6],
          features: {
            seatbelts: 2,
            bedsize: "",
            sleeps: 2,
          },
        },
      ],
      company: {
        name: "buyacampervan",
        tag: "tag line",
        email: "info@buyacampervan.com.au",
        phone: "1800 010 101",
        region: "Australia",
      },
    };
  },
});
