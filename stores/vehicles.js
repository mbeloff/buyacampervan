import { defineStore } from "pinia";
const imgurl = "https://ik.imagekit.io/y3ayiqneqlr";
export const useStore = defineStore("store", {
  state: () => {
    return {
      vehicles: [
        {
          name: "model one",
          slug: "van-one",
          price: "$16,350",
          img: imgurl + "/testvehicle/1.jpg",
          gallery: [
            imgurl + "/testvehicle/1.jpg",
            imgurl + "/testvehicle/1-1.jpg",
            imgurl + "/testvehicle/1-2.jpg",
            imgurl + "/testvehicle/1-3.jpg",
            imgurl + "/testvehicle/1-5.jpg",
            imgurl + "/testvehicle/1-6.jpg",
          ],
          features: [
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            {
              text: "Sleeps 2",
              icon: "fa-bed",
            },
            {
              text: "Automatic Transmission",
              icon: "fa-gears",
            },
          ],
          specs: [
            "Bed Dimensions: 1.45m x 2.00m",
            "Kitchenette",
            "Refrigerator",
            "Some other shit",
            "Purple Monkey Dishwasher",
            "50,000 Watts of Funkin' Hip-Hop Power",
            "1.21 Gigawatts!?",
          ],
        },
        {
          name: "model two",
          slug: "van-two",
          price: "$18,750",
          img: imgurl + "/testvehicle/2.jpg",
          gallery: [
            imgurl + "/testvehicle/2.jpg",
            imgurl + "/testvehicle/1-1.jpg",
            imgurl + "/testvehicle/1-2.jpg",
            imgurl + "/testvehicle/1-3.jpg",
            imgurl + "/testvehicle/1-5.jpg",
            imgurl + "/testvehicle/1-6.jpg",
          ],
          features: [
            { text: "2 Seatbelts", icon: "fa-person-seat-reclined" },
            {
              text: "Sleeps 2",
              icon: "fa-bed",
            },
            {
              text: "Automatic Transmission",
              icon: "fa-gears",
            },
          ],
          specs: [
            "Bed Dimensions: 1.45m x 2.00m",
            "Kitchenette",
            "Refrigerator",
            "Some other shit",
            "Purple Monkey Dishwasher",
            "50,000 Watts of Funkin' Hip-Hop Power",
            "1.21 Gigawatts!?",
          ],
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
