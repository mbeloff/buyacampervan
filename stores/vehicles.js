import { defineStore } from "pinia";
const imgurl = "https://ik.imagekit.io/y3ayiqneqlr";
export const useStore = defineStore("store", {
  state: () => {
    return {
      vehicles: [
        {
          name: "Mystery Machine",
          slug: "mystery-machine",
          price: "$22,000",
          description:
            "The perfect van for weekends away as well as longer adventures without breaking the bank! This camper is both user friendly, comfortable and most importantly its FUN!",
          img: imgurl + "/mystery-machine/01.jpeg",
          gallery: [
            imgurl + "/mystery-machine/01.jpeg",
            imgurl + "/mystery-machine/02.jpeg",
            imgurl + "/mystery-machine/03.jpeg",
            imgurl + "/mystery-machine/04.jpeg",
            imgurl + "/mystery-machine/05.jpeg",
          ],
          specs: [
            { text: "Suzuki APV 1.6L petrol", icon: "fa-van-shuttle" },
            { text: "Brand new fitout", icon: "fa-sparkles" },
            { text: "Manual transmission", icon: "fa-cogs" },
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            { text: "Sleeps 2", icon: "fa-bed" },
            { text: "Dual Side Doors", icon: "fa-arrow-right-to-bracket" },
            { text: "Rear kitchen with sink and tap", icon: "fa-sink" },
            { text: "Fresh and grey water tanks", icon: "fa-tank-water" },
            { text: "Dual battery setup", icon: "fa-car-battery" },
            { text: "Slide-out fridge", icon: "fa-refrigerator" },
            { text: "USB charging ports", icon: "fa-usb-drive" },
            {
              text: "Indoor converts to dining area",
              icon: "fa-champagne-glasses",
            },
            { text: "Under bed storage", icon: "fa-box" },
          ],
        },
        {
          name: "Beach Comber",
          slug: "beach-comber",
          description:
            "The perfect festival/beach camping van, this build is both comfortable and private. Great on fuel with everything you need for your next adventure! ",
          price: "$27,000",
          img: imgurl + "/beach-comb/01b.jpeg",
          gallery: [
            imgurl + "/beach-comb/01b.jpeg",
            imgurl + "/beach-comb/02.jpeg",
            imgurl + "/beach-comb/03.jpeg",
            imgurl + "/beach-comb/04.jpeg",
            imgurl + "/beach-comb/05.jpeg",
            imgurl + "/beach-comb/06.jpeg",
            imgurl + "/beach-comb/07.jpeg",
            imgurl + "/beach-comb/08.jpeg",
            imgurl + "/beach-comb/09.jpeg",
            imgurl + "/beach-comb/10.jpeg",
            imgurl + "/beach-comb/11.jpeg",
          ],
          specs: [
            { text: "Suzuki APV 1.6L petrol", icon: "fa-van-shuttle" },
            { text: "Brand new fitout", icon: "fa-sparkles" },
            { text: "Manual transmission", icon: "fa-cogs" },
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            { text: "Sleeps 2", icon: "fa-bed" },
            { text: "Dual side doors", icon: "fa-arrow-right-to-bracket" },
            { text: "Remote LED down lights", icon: "fa-lightbulb-on" },
            { text: "Fixed bed", icon: "fa-bed" },
            { text: "Under bed storage", icon: "fa-box" },
            { text: "Slide-out kitchen", icon: "fa-sink" },
            { text: "Slide-out fridge", icon: "fa-refrigerator" },
            { text: "Dual battery setup", icon: "fa-car-battery" },
            { text: "USB chargin ports", icon: "fa-usb-drive" },
          ],
        },
      ],
      company: {
        name: "buyacampervan",
        tag: "tag line",
        email: "info@buyacampervan.com.au",
        phone: "0456 367 387",
        region: "Australia",
      },
    };
  },
});
