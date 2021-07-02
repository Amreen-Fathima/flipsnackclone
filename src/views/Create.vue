<template>
  <div style="d-flex flex-column">
    <div id="create-container">
      <div
        class="m-auto d-flex flex-column align-items-center"
        style="width: 880px"
      >
        <div class="title">
          <div>Choose a size</div>
          <div>to create a beautiful flipbook from scratch</div>
        </div>
        <div class="d-flex align-items-center page-size-setting w-100">
          <label class="me-2">Width</label>
          <input
            type="number"
            id="page-width"
            class="me-4"
            v-model="page_width"
          />
          <label class="me-2">Height</label>
          <input type="number" id="page-height" v-model="page_height" />
        </div>
        <div class="page-type w-100" style="height: 155px">
          <template v-for="(item, index) in page_types" :key="item.id">
            <div
              class="
                d-flex
                justify-content-between
                align-items-center
                flex-column
                page-type-item
              "
              :class="index ? '' : 'selected'"
              style="padding: 10px 0px; cursor: pointer"
              @click="selectPageType(index)"
            >
              <div
                class="
                  border-0
                  w-100
                  d-flex
                  justify-content-center
                  align-items-center
                "
                style="border: none; margin-top: 10px; height: 70px"
              ></div>
              <div class="border-0" style="text-align: center">
                <h5
                  style="font-size: 14px; margin: 0"
                  :class="index ? '' : 'selected'"
                >
                  {{ item.type }}
                </h5>
                <h6
                  style="
                    font-size: 11px;
                    color: rgba(255, 255, 255, 0.33);
                    margin-top: 3px;
                    margin-bottom: 0px;
                  "
                >
                  {{ item.width }} x {{ item.height }} px
                </h6>
              </div>
            </div>
          </template>
        </div>
        <MDBBtn color="primary" style="margin-top: 18px" @click="navigateToDesign()">Create</MDBBtn>
      </div>
    </div>
  </div>
</template>

<script>
import Router from "@/router/index.js";
import { MDBBtn } from "mdb-vue-ui-kit";

export default {
  name: "Create",
  components: {
    MDBBtn,
  },
  data() {
    return {
      page_types: [
        {
          id: 1,
          icon: `<svg xmlns="https://www.w3.org/2000/svg" width="54px" height="71px"><g fill="none" fill-rule="evenodd"><path fill="#898E9F" d="M34.861 42.358c-.86.267-1.943.423-3.126.467.913-1.481 3.537-7.134 4.66-10.762l-.18 8.003c.002.979-.279 1.96-1.354 2.292m-7.82.08c.085-1.904-.07-6.556-.164-9.022-.186-4.853 6.073-2.507 9.354-2.815-1.78 3.277-5.28 7.456-7.467 9.223 2.568 1.847 2.632 3.01 1.575 3 .132.005-.047 0-.047 0h.013a20.394 20.394 0 0 1-3.265-.386m-.247-11.985c-2.566-1.273-6.724-1.824-9.41-1.187-.713 3.676-.305 8.548.207 12.255.256 1.862.415 2.104 1.785 1.71 5.186-1.497 9.837 1.452 15.058.165 1.743-.43 2.43-1.335 2.471-2.92l.27-10.675c-2.673-.03-8.637-1.036-10.38.652"></path><rect width="52" height="68.475" x="1" y="1" stroke="#898E9F" stroke-width="2" opacity=".721" rx="1"></rect></g></svg>`,
          type: "A4",
          width: "794",
          height: "1123",
        },
        {
          id: 2,
          icon: `<svg xmlns="https://www.w3.org/2000/svg" width="56px" height="67px"><g fill="none" fill-rule="evenodd"><path fill="#898E9F" d="M35.861 39.358c-.86.267-1.943.423-3.126.467.913-1.481 3.537-7.134 4.66-10.762l-.18 8.003c.002.979-.279 1.96-1.354 2.292m-7.82.08c.085-1.904-.07-6.556-.164-9.022-.186-4.853 6.073-2.507 9.354-2.815-1.78 3.277-5.28 7.456-7.467 9.223 2.568 1.847 2.632 3.01 1.575 3 .132.005-.047 0-.047 0h.013a20.394 20.394 0 0 1-3.265-.386m-.247-11.985c-2.566-1.273-6.724-1.824-9.41-1.187-.713 3.676-.305 8.548.207 12.255.256 1.862.415 2.104 1.785 1.71 5.186-1.497 9.837 1.452 15.058.165 1.743-.43 2.43-1.335 2.471-2.92l.27-10.675c-2.673-.03-8.637-1.036-10.38.652"></path><rect width="54" height="65" x="1" y="1" stroke="#898E9F" stroke-width="2" opacity=".721" rx="1"></rect></g></svg>`,
          type: "Letter",
          width: "816",
          height: "1056",
        },
        {
          id: 3,
          icon: `<svg xmlns="https://www.w3.org/2000/svg" width="77px" height="50px"><g fill="none" fill-rule="evenodd"><path fill="#898E9F" d="M45.861 31.358c-.86.267-1.943.423-3.126.467.913-1.481 3.537-7.134 4.66-10.762l-.18 8.003c.002.979-.279 1.96-1.354 2.292m-7.82.08c.085-1.904-.07-6.556-.164-9.022-.186-4.853 6.073-2.507 9.354-2.815-1.78 3.277-5.28 7.456-7.467 9.223 2.568 1.847 2.632 3.01 1.575 3 .132.005-.047 0-.047 0h.013a20.394 20.394 0 0 1-3.265-.386m-.247-11.985c-2.566-1.273-6.724-1.824-9.41-1.187-.713 3.676-.305 8.548.207 12.255.256 1.862.415 2.104 1.785 1.71 5.186-1.497 9.837 1.452 15.058.165 1.743-.43 2.43-1.335 2.471-2.92l.27-10.675c-2.673-.03-8.637-1.036-10.38.652"></path><path stroke="#898E9F" stroke-width="2" d="M1 1h75v47.5H1z" opacity=".721"></path></g></svg>`,
          type: "Tabloid",
          width: "1632",
          height: "1056",
        },

        {
          id: 4,
          icon: `<svg xmlns="https://www.w3.org/2000/svg" width="32px" height="64px"><g fill="none" fill-rule="evenodd"><rect width="30" height="62" x="1" y="1" stroke="#898E9F" stroke-width="2" opacity=".721" rx="1"></rect><path fill="#898E9F" d="M23.861 38.358c-.86.267-1.943.423-3.126.467.913-1.481 3.537-7.134 4.66-10.762l-.18 8.003c.002.979-.279 1.96-1.354 2.292m-7.82.08c.085-1.904-.07-6.556-.164-9.022-.186-4.853 6.073-2.507 9.354-2.815-1.78 3.277-5.28 7.456-7.467 9.223 2.568 1.847 2.632 3.01 1.575 3 .132.005-.047 0-.047 0h.013a20.394 20.394 0 0 1-3.265-.386m-.247-11.985c-2.566-1.273-6.724-1.824-9.41-1.187-.713 3.676-.305 8.548.207 12.255.256 1.862.415 2.104 1.785 1.71 5.186-1.497 9.837 1.452 15.058.165 1.743-.43 2.43-1.335 2.471-2.92l.27-10.675c-2.673-.03-8.637-1.036-10.38.652"></path></g></svg>`,
          type: "Flyer",
          width: "416",
          height: "865",
        },

        {
          id: 5,
          icon: `<svg xmlns="https://www.w3.org/2000/svg" width="52px" height="51px"><g fill="none" fill-rule="evenodd"><rect width="50" height="49" x="1" y="1" stroke="#898E9F" stroke-width="2" opacity=".721" rx="1"></rect><path fill="#898E9F" d="M33.861 31.358c-.86.267-1.943.423-3.126.467.913-1.481 3.537-7.134 4.66-10.762l-.18 8.003c.002.979-.279 1.96-1.354 2.292m-7.82.08c.085-1.904-.07-6.556-.164-9.022-.186-4.853 6.073-2.507 9.354-2.815-1.78 3.277-5.28 7.456-7.467 9.223 2.568 1.847 2.632 3.01 1.575 3 .132.005-.047 0-.047 0h.013a20.394 20.394 0 0 1-3.265-.386m-.247-11.985c-2.566-1.273-6.724-1.824-9.41-1.187-.713 3.676-.305 8.548.207 12.255.256 1.862.415 2.104 1.785 1.71 5.186-1.497 9.837 1.452 15.058.165 1.743-.43 2.43-1.335 2.471-2.92l.27-10.675c-2.673-.03-8.637-1.036-10.38.652"></path></g></svg>`,
          type: "Booklet",
          width: "793",
          height: "793",
        },

        {
          id: 6,
          icon: `<svg xmlns="https://www.w3.org/2000/svg" width="72px" height="55px"><g fill="none" fill-rule="evenodd"><rect width="52" height="68.475" x="10" y="-7" stroke="#898E9F" stroke-width="2" opacity=".721" rx="1" transform="rotate(90 36 27.237)"></rect><path fill="#898E9F" d="M43.861 34.358c-.86.267-1.943.423-3.126.467.913-1.481 3.537-7.134 4.66-10.762l-.18 8.003c.002.979-.279 1.96-1.354 2.292m-7.82.08c.085-1.904-.07-6.556-.164-9.022-.186-4.853 6.073-2.507 9.354-2.815-1.78 3.277-5.28 7.456-7.467 9.223 2.568 1.847 2.632 3.01 1.575 3 .132.005-.047 0-.047 0h.013a20.394 20.394 0 0 1-3.265-.386m-.247-11.985c-2.566-1.273-6.724-1.824-9.41-1.187-.713 3.676-.305 8.548.207 12.255.256 1.862.415 2.104 1.785 1.71 5.186-1.497 9.837 1.452 15.058.165 1.743-.43 2.43-1.335 2.471-2.92l.27-10.675c-2.673-.03-8.637-1.036-10.38.652"></path></g></svg>`,
          type: "Presentation",
          width: "1123",
          height: "793",
        },
      ],
    };
  },
  computed: {
    page_width() {
      return this.$store.state.page_width;
    },
    page_height() {
      return this.$store.state.page_height;
    },
  },
  methods: {
    selectPageType(index) {
      let pageTypeItemEles = document.querySelectorAll(".page-type-item");

      for (let i = 0; i < pageTypeItemEles.length; i++) {
        pageTypeItemEles[i].classList.remove("selected");
        pageTypeItemEles[i].querySelector("h5").classList.remove("selected");
      }
      pageTypeItemEles[index].classList.add("selected");
      pageTypeItemEles[index].querySelector("h5").classList.add("selected");

      //Set the size of the page
      this.$store.commit("Reset_Page_Size", {
        width: this.page_types[index].width,
        height: this.page_types[index].height,
      });
    },

    navigateToDesign() {
      console.log(Router)
      Router.push({path: '/pad'})
    }
  },
  mounted() {
    for (let i = 0; i < this.page_types.length; i++) {
      document.querySelectorAll(".page-type-item")[i].firstChild.innerHTML =
        this.page_types[i].icon;
    }
  },
};
</script>

<style scoped>
#create-container {
  height: calc(100vh - 54px);
  background-color: black;
  color: white;
}

.title {
  font-size: 22px;
  padding: 60px 0px;
  text-align: center;
}

.page-size-setting {
  justify-content: flex-end;
}

.page-size-setting input {
  font: inherit;
  color: #ffffff;
  width: 50px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 1.1876em;
  margin: 0;
  display: block;
  padding: 10px 12px;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  border-radius: 3px;
  animation-name: mui-auto-fill-cancel;
  letter-spacing: inherit;
  background-color: transparent;
  animation-duration: 10ms;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
}

.page-size-setting label {
  font-weight: 600;
}

.page-size-setting input:focus {
  border: 1px solid #0362fc;
  outline: none;
}

input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  cursor: pointer;
  display: block;
  width: 8px;
  color: #333;
  text-align: center;
  position: relative;
}

.page-type {
  height: 155px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 8px;
  margin-top: 15px;
}

.page-type-item.selected {
  border: 2px solid #0362fc;
}

h5.selected {
  color: #0362fc;
}

.page-type-item:hover {
  border: 2px solid #0362fc;
}

.page-type div {
  border: 2px solid #1f283a;
}
</style>
