<template>
  <div class="carousel-cont">
    <Carousel
      ref="carousel"
      v-model="currentSlide" 
      :itemsToShow="itemsToShow"
      :wrapAround="true"
      :mouseDrag="true"
      :autoplay="3000"
      :transition="500"
    >
      <Slide v-for="(rev, index) in revs" :key="index">
        <div class="rev-info">
          <img :src="rev.img" alt="rev Image" :class="getImageClass(index)" />
        </div>
      </Slide>
    </Carousel>

    <!-- Navigation Buttons -->
    <button class="carousel-nav left" @click="moveCarousel('left')">
      <i class="fa-solid fa-angle-left"></i>
    </button>
    <button class="carousel-nav right" @click="moveCarousel('right')">
      <i class="fa-solid fa-angle-right"></i>
    </button>
  </div>
</template>


<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref } from "vue";

export default {
  components: {
    Carousel,
    Slide,
  },
  setup() {
    const currentSlide = ref(0);

    return {
      currentSlide,
    };
  },
  data() {
    return {
      revs: [
        { img: require("@/assets/images/rev/1.png") },
        { img: require("@/assets/images/rev/2.png") },
        { img: require("@/assets/images/rev/3.png") },
        { img: require("@/assets/images/rev/4.png") },
        { img: require("@/assets/images/rev/5.png") },
        { img: require("@/assets/images/rev/6.png") },
        { img: require("@/assets/images/rev/7.png") },
        { img: require("@/assets/images/rev/8.png") },
      ],
    };
  },
  computed: {
    itemsToShow() {
      return window.innerWidth <= 700 ? 1 : 5;
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction === "left") {
        this.currentSlide = (this.currentSlide - 1 + this.revs.length) % this.revs.length;
        this.$refs.carousel.prev();
      } else if (direction === "right") {
        this.currentSlide = (this.currentSlide + 1) % this.revs.length;
        this.$refs.carousel.next();
      }
    },
    getImageClass(index) {
      const diff = index - this.currentSlide;

      if (diff === 0) {
        return 'rev-image active'; 
      } else if (Math.abs(diff) === 1 || Math.abs(diff) === this.revs.length - 1) {
        return 'rev-image near'; 
      } else {
        return 'rev-image far';
      }
    },
  },
};
</script>



<style scoped>
.carousel-cont {
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 10px;
}

.rev-image {
  width: 100%;
  object-fit: cover;
  transition: transform 0.5s, opacity 0.5s; 
}

.rev-image.active {
  transform: scale(1);
  opacity: 1;
}

.rev-image.near {
  transform: scale(0.8);
  opacity: 0.8;
}

.rev-image.far {
  transform: scale(0.6);
  opacity: 0.6;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #165e84;
  border: none;
  font-size: 35px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}

.carousel-nav.left {
  left: -25px;
}

.carousel-nav.right {
  right: -25px;
}

@media (max-width: 1000px) {
  .carousel-cont {
    padding-bottom: 0;
  }

  .rev-image {
    width: 90%;
    margin-inline: 0;
  }
}
</style>
