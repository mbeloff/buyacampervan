import { defineStore } from "pinia";
const imgurl = "https://ik.imagekit.io/y3ayiqneqlr/buyacampervan";
export const useStore = defineStore("store", {
  state: () => {
    return {
      // special: "Price Drop! Limited Time Sale On Now!",
      cities: [
        "Adelaide",
        "Airlie Beach",
        "Brisbane",
        "Byron Bay",
        "Cairns",
        "Darwin",
        "Hobart",
        "Melbourne",
        "perth",
        "Sydney",
      ],
      vehicles: [
        {
          name: "Mystery Machines Manual",
          slug: "mystery-machine-manual",
          buyback: true,
          price: "$16,000",
          // discount: "$9,000",
          description:
            "The perfect van for weekends away as well as longer adventures without breaking the bank! These campers are user friendly, comfortable and most importantly its FUN!",
          img: imgurl + "/mystery-machine/01.jpeg",
          gallery: [
            imgurl + "/mystery-machine/01.jpeg",
            imgurl + "/mystery-machine/update/1.jpg",
            imgurl + "/mystery-machine/update/3.jpg",
            imgurl + "/mystery-machine/2.jpg",
            imgurl + "/mystery-machine/5.jpg",
            imgurl + "/mystery-machine/6.jpg",
            imgurl + "/mystery-machine/update/2.jpg",
            imgurl + "/mystery-machine/update/5.jpg",
          ],
          specs: [
            { text: "Suzuki APV 1.6L petrol", icon: "fa-van-shuttle" },
            {
              text: "6 Month Registration",
              icon: "fa-calendar-check",
            },
            { text: "Buyback Guarantee", icon: "fa-money-bill-transfer" },
            { text: "Manual transmission", icon: "fa-cogs" },
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            { text: "Sleeps 2", icon: "fa-bed" },
            { text: "Dual Side Doors", icon: "fa-arrow-right-to-bracket" },
            { text: "Rear kitchenette with sink and tap", icon: "fa-sink" },
            { text: "12V charging port", icon: "fa-battery-bolt" },
            {
              text: "Indoor converts to dining area",
              icon: "fa-champagne-glasses",
            },
            { text: "Plenty of storage space", icon: "fa-box" },
          ],
        },
        {
          name: "Aventus Manual",
          slug: "aventus-manual",
          buyback: true,
          price: "$16,000",
          // discount: "$9,000",
          description:
            "Great budget campers, spacious, easy to drive and with all the basics. Plain or two-tone painted exterior (Colours may vary)",
          img: imgurl + "/plain/1.jpeg",
          gallery: [
            imgurl + "/plain/1.jpeg",
            imgurl + "/plain/2.jpeg",
            imgurl + "/mystery-machine/update/1.jpg",
            imgurl + "/mystery-machine/update/3.jpg",
            imgurl + "/mystery-machine/2.jpg",
            imgurl + "/mystery-machine/5.jpg",
            imgurl + "/mystery-machine/6.jpg",
            imgurl + "/mystery-machine/update/2.jpg",
            imgurl + "/mystery-machine/update/5.jpg",
          ],
          specs: [
            { text: "Suzuki APV 1.6L petrol", icon: "fa-van-shuttle" },
            {
              text: "6 Month Registration",
              icon: "fa-calendar-check",
            },
            { text: "Buyback Guarantee", icon: "fa-money-bill-transfer" },
            { text: "Manual transmission", icon: "fa-cogs" },
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            { text: "Sleeps 2", icon: "fa-bed" },
            { text: "Dual Side Doors", icon: "fa-arrow-right-to-bracket" },
            { text: "Rear kitchenette with sink and tap", icon: "fa-sink" },
            { text: "12V charging port", icon: "fa-battery-bolt" },
            {
              text: "Indoor converts to dining area",
              icon: "fa-champagne-glasses",
            },
            { text: "Plenty of storage space", icon: "fa-box" },
          ],
        },
        {
          name: "Mystery Machines Auto",
          slug: "mystery-machine-auto",
          buyback: true,
          price: "$13,000",
          // discount: "$9,000",
          description:
            "Fantastic budget campers with an automatic transmission. Sleep under the stars or take in the sights from the rooftop stage. Also available without rooftop stage.",
          img: imgurl + "/mystery-machine-regius/7.jpg",
          gallery: [
            imgurl + "/mystery-machine-regius/1.jpg",
            imgurl + "/mystery-machine-regius/3.jpg",
            imgurl + "/mystery-machine-regius/2.jpg",
            imgurl + "/mystery-machine-regius/4.jpg",
            imgurl + "/mystery-machine-regius/5.jpg",
            imgurl + "/mystery-machine-regius/6.jpg",
            imgurl + "/mystery-machine-regius/7.jpg",
            imgurl + "/mystery-machine-regius/8.jpg",
          ],
          specs: [
            { text: "Toyota Regius petrol", icon: "fa-van-shuttle" },
            {
              text: "6 Month Registration",
              icon: "fa-calendar-check",
            },
            { text: "Buyback Guarantee", icon: "fa-money-bill-transfer" },
            { text: "Automatic transmission", icon: "fa-cogs" },
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            { text: "Sleeps 2", icon: "fa-bed" },
            { text: "Dual Side Doors", icon: "fa-arrow-right-to-bracket" },
            { text: "Rear kitchenette with sink and tap", icon: "fa-sink" },
            { text: "12V charging port", icon: "fa-battery-bolt" },
            {
              text: "Indoor converts to dining area",
              icon: "fa-champagne-glasses",
            },
            { text: "Plenty of storage space", icon: "fa-box" },
          ],
        },
        {
          name: "Beach Comber",
          slug: "beach-comber",
          sold: true,
          // buyback: true,
          description:
            "The perfect festival/beach camping van, this premium build is both comfortable and private. Great on fuel with everything you need for your next adventure! ",
          price: "$19,000",
          location: "Brisbane",
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
            {
              text: "6 Months Registration",
              icon: "fa-calendar-check",
            },
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
            { text: "USB charging ports", icon: "fa-usb-drive" },
          ],
        },
      ],
      company: {
        name: "buyacampervan",
        tag: "tag line",
        email: "info@buyacampervan.com.au",
        phone: "+61 417 740 307",
        region: "Australia",
      },
    };
  },
});
