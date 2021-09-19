import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);




const c_width = 16,
  c_height = 16;

const width = 50;
const height = 100;
const fill = "#fff";
const text_fill = "#000";

export default new Vuex.Store({
  state: {
    apiUrl: 'http://u.presta.info/api/',
    isAdmin: false,
    preparing: false,
    cuurentStep: 1,
    events: null,
    carousel: null,
    seats: [{
        id: "w1",
        x: 16,
        y: 40,
        width: 340,
        height: 730,
        fill: "#252523",
        stroke: "#252523",
        type: "blank",
        shape: "rect",
        enableToSelect: false
      },
      {
        id: "w2",
        x: 95,
        y: 125,
        width: 40,
        height: 40,
        fill,
        text_fill,
        name: "B6",
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: 25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: 25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "w3",
        x: 241,
        y: 125,
        width: 40,
        height: 40,
        fill,
        text_fill,
        name: "B5",
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: 25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: 25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "w4",
        x: 375,
        y: 78,
        width,
        height,
        fill,
        text_fill,
        name: "T5",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "w5",
        x: 520,
        y: 78,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T4",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "w6",
        x: 619,
        y: 78,
        width: width,
        height: height,
        fill: "transparent",
        stroke: "#777",
        type: "blank",
        shape: "rect",
        enableToSelect: false
      },
      {
        id: "w7",
        x: 720,
        y: 78,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T3",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "w8",
        x: 865,
        y: 78,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T2",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "w9",
        x: 1005,
        y: 78,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T1",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "a0",
        x: 1100,
        y: 78,
        width: width,
        height: height,
        fill: "transparent",
        stroke: "#777",
        type: "blank",
        shape: "rect",
        enableToSelect: false
      },
      {
        id: 337,
        x: 41,
        y: 235,
        data: "M186.642,295.671a12,12,0,0,1-12-12V203.232L150.82,183H14A14,14,0,0,1,0,169V126a14,14,0,0,1,14-14H150.821l23.821-20.232V12a12,12,0,0,1,12-12h51l22,16.994V73.533l-13,21.84V200.3l13,21.84v56.539l-22,16.994Z",
        width: 260,
        height: 260,
        fill,
        text_fill,
        name: "BAR B",
        type: "bar",
        shape: "path",
        haveOccasion: false,
        glass: false,
        enableToSelect: false,
        selectedSeate: false
      },
      // BAR B
      {
        id: "a1",
        x: 82,
        y: 275,
        text_fill: "#fff",
        name: "B4",
        type: "text"
      },
      {
        id: "a2",
        x: 75,
        y: 325,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: "a3",
        x: 110,
        y: 325,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      //
      {
        id: "a4",
        x: 416,
        y: 280,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T19",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "top_center",
            top: 18,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "a5",
        x: 416,
        y: 431,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T17",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -25,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_center",
            top: -50,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "left_bottom",
            top: -75,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_left",
            top: -118,
            left: -13,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_right",
            top: -118,
            left: -35,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "a6",
        x: 504,
        y: 431,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T16",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -25,
            left: -65,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_center",
            top: -50,
            left: -65,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "left_bottom",
            top: -75,
            left: -65,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_left",
            top: -118,
            left: -13,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_right",
            top: -118,
            left: -35,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },


      {
        id: "a7",
        x: 692,
        y: 290,
        width: 100,
        height: 50,
        fill,
        text_fill,
        name: "D1",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "top_left",
            top: 15,
            left: -30,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "top_center",
            top: 15,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "top_bottom",
            top: 15,
            left: -70,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_left",
            top: -65,
            left: -30,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_center",
            top: -65,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_right",
            top: -65,
            left: -70,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "a8",
        x: 863,
        y: 290,
        width: 100,
        height: 50,
        fill,
        text_fill,
        name: "D2",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "top_left",
            top: 15,
            left: -30,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "top_center",
            top: 15,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "top_bottom",
            top: 15,
            left: -70,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_left",
            top: -65,
            left: -30,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_center",
            top: -65,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_right",
            top: -65,
            left: -70,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "a9",
        x: 637,
        y: 485,
        width: 100,
        height: 50,
        fill,
        text_fill,
        name: "D4",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "top_left",
            top: 15,
            left: -30,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "top_center",
            top: 15,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "top_bottom",
            top: 15,
            left: -70,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_left",
            top: -65,
            left: -30,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_center",
            top: -65,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_right",
            top: -65,
            left: -70,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "s0",
        x: 863,
        y: 485,
        width: 100,
        height: 50,
        fill,
        text_fill,
        name: "D3",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "top_left",
            top: 15,
            left: -30,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "top_center",
            top: 15,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "top_bottom",
            top: 15,
            left: -70,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_left",
            top: -65,
            left: -30,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_center",
            top: -65,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_right",
            top: -65,
            left: -70,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "s1",
        x: 60,
        y: 490,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T10",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "top_center",
            top: 18,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "s2",
        x: 60,
        y: 610,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T11",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_center",
            top: -118,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          }
        ]
      },
      {
        id: "s3",
        x: 218,
        y: 642,
        width: 130,
        height: 50,
        fill,
        text_fill,
        name: "T12",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -15,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -40,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },

          {
            pos: "bottom_left",
            top: -65,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_left_center",
            top: -65,
            left: -50,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_right_center",
            top: -65,
            left: -75,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "bottom_right",
            top: -65,
            left: -100,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_top",
            top: -15,
            left: -145,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "right_bottom",
            top: -40,
            left: -145,
            width: c_width,
            height: c_height,
            number: 2
          }
        ]
      },
      {
        id: "s4",
        x: 461,
        y: 610,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T13",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_center",
            top: -118,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 2
          }
        ]
      },
      {
        id: "s5",
        x: 600,
        y: 610,
        width: width,
        height: height,
        fill,
        text_fill,
        name: "T14",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: true,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: -35,
            left: 15,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -70,
            left: 15,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "bottom_center",
            top: -118,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_top",
            top: -35,
            left: -65,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "right_bottom",
            top: -70,
            left: -65,
            width: c_width,
            height: c_height,
            number: 2
          }
        ]
      },
      {
        id: 10015,
        x: 739,
        y: 610,
        width: 350,
        height: 120,
        name: "DJ",
        text_fill: "#fff",
        fill: "transparent",
        stroke: "#777",
        type: "blank",
        shape: "rect",
        enableToSelect: false,
        glass: true
      },
      {
        id: "s6",
        x: 789,
        y: 670,
        width: 40,
        height: 40,
        fill,
        text_fill,
        name: "D5",
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: 25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: 25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "s7",
        x: 1035,
        y: 670,
        width: 40,
        height: 40,
        fill,
        text_fill,
        name: "D6",
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false,
        chairs: [{
            pos: "left_top",
            top: 25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 1
          },
          {
            pos: "left_bottom",
            top: -25,
            left: 25,
            width: c_width,
            height: c_height,
            number: 2
          },
          {
            pos: "right_top",
            top: -25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 3
          },
          {
            pos: "right_bottom",
            top: 25,
            left: -25,
            width: c_width,
            height: c_height,
            number: 4
          }
        ]
      },
      {
        id: "s8",
        x: 1170,
        y: 313,
        data: "M 37.92971801757812 1 L 1.000030517578125 28.26272583007812 L 1 196.4422454833984 L 38.00079345703125 231.7089385986328 L 177.4779815673828 231.7089385986328 L 177.4779815673828 376.6683349609375 L 252.6123199462891 376.6683349609375 L 252.6123199462891 231.7089385986328 L 392.1436767578125 231.7089385986328 L 429.1445007324219 196.4423522949219 L 429.14453125 28.26272583007812 L 392.2148132324219 1 L 37.92971801757812 1 M 37.6005859375 0 L 392.5439453125 0 L 430.14453125 27.75799560546875 L 430.1445007324219 196.8707275390625 L 392.5439453125 232.7089385986328 L 253.6123199462891 232.7089385986328 L 253.6123199462891 377.6683349609375 L 176.4779815673828 377.6683349609375 L 176.4779815673828 232.7089385986328 L 37.60055541992188 232.7089385986328 L 0 196.87060546875 L 3.0517578125e-05 27.75799560546875 L 37.6005859375 0 Z",
        width: 260,
        height: 260,
        fill: "#333330",
        type: "bar",
        shape: "path",
        haveOccasion: false,
        glass: false,
        enableToSelect: false,
        selectedSeate: false
      },
      {
        id: 's9',
        x: 1200,
        y: 345,
        width: 370,
        height: 170,
        fill,
        text_fill,
        name: "BAR A",
        type: "bar",
        shape: "rect",
        haveOccasion: false,
        glass: false,
        enableToSelect: false,
        selectedSeate: false
      },
      {
        id: 's10',
        x: 1105,
        y: 400,
        text_fill: "#fff",
        name: "A5",
        type: "text"
      },
      {
        id: 'd0',
        x: 1147,
        y: 390,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd1',
        x: 1147,
        y: 425,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd2',
        x: 1147,
        y: 460,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd3',
        x: 1640,
        y: 400,
        text_fill: "#fff",
        name: "A2",
        type: "text"
      },
      {
        id: 'd4',
        x: 1622,
        y: 390,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd5',
        x: 1622,
        y: 425,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd6',
        x: 1622,
        y: 460,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd7',
        x: 1272,
        y: 235,
        text_fill: "#fff",
        name: "A4",
        type: "text"
      },
      {
        id: 2954427610,
        x: 1252,
        y: 290,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd8',
        x: 1282,
        y: 290,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: 'd9',
        x: 1312,
        y: 290,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: "f0",
        x: 1472,
        y: 235,
        text_fill: "#fff",
        name: "A3",
        type: "text"
      },
      {
        id: "f1",
        x: 1452,
        y: 290,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: "f2",
        x: 1482,
        y: 290,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      {
        id: "f3",
        x: 1512,
        y: 290,
        width: 20,
        height: 20,
        fill: "#eabf24",
        text_fill,
        type: "bar",
        shape: "circle",
        haveOccasion: false,
        glass: false,
        enableToSelect: true,
        selectedSeate: false
      },
      // wake lines
      {
        id: "line1",
        points: [860, 0, 0, 0, 0, 0],
        x: 347,
        y: 222,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line2",
        points: [0, 356, 0, 0, 0, 0],
        x: 347,
        y: 222,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line3",
        points: [710, 0, 0, 0, 0, 0],
        x: 347,
        y: 590,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line4",
        points: [0, 180, 0, 0, 0, 0],
        x: 603,
        y: 400,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line5",
        points: [51, 0, 0, 0, 0, 0],
        x: 603,
        y: 400,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line6",
        points: [51, 0, 0, 0, 0, 0],
        x: 603,
        y: 400,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line7",
        points: [0, 166, 0, 0, 0, 0],
        x: 665,
        y: 230,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
      {
        id: "line8",
        points: [0, 549, 0, 0, 0, 0],
        x: 1094,
        y: 232,
        strokeWidth: 1,
        stroke: '#707070',
        type: "walk-line",
        shape: "line",
        dash: [10],
        enableToSelect: true,
        selectedSeate: false,
      },
    ],

    gallery: [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg"
    ],
  },
  getters: {
    upcomingEvents: state => {
      setTimeout(async function () {
        if (state.events === null) {
          const response = await fetch(state.apiUrl+'events');
          const json = await response.json()
          state.events = json;
        }
      });

      return state.events;
    },
    allEvents: state => {
      setTimeout(async function () {
        if (state.events === null) {
          const response = await fetch(state.apiUrl+'events');
          const json = await response.json()
          state.events = json;
        }
      });

      return state.events;
    },
    galeries: state => {
      setTimeout(async function () {
        if (state.events === null) {
          const response = await fetch(state.apiUrl+'events');
          const json = await response.json()
          state.events = json;
        }
      });

      return state.events.map(event => {
        const galeries = {}
        galeries.title = event.title;
        galeries.galeries = event.galeries;
        galeries.id = event.id;
        galeries.img = event.img

        return galeries
      })
    },
    seats: state => {
      return state.seats
    },

    // gallery: (state, gallery) => state.gallery = gallery,
  },
  mutations: {

    isAdmin: (state, isAdmin) => state.isAdmin = isAdmin,
    cuurentStep: (state, cuurentStep) => state.cuurentStep = cuurentStep,
    preparing: (state, preparing) => state.preparing = preparing,
    carousel: (state, carousel) => state.carousel = carousel,

  },
  actions: {},
  modules: {}
});