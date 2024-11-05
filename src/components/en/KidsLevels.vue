<template>
  <div class="adult-levels-container">
    <div class="top-half">
      <div class="text-section">
        <h1>Kid’s<br>Levels</h1>
        <p>
          We do a great adventure with our little friends! Together, we learn the language in a fun way and acquire magical (wonderful) speaking and listening skills, which opens a door full of unlimited ambitions and great opportunities to become the pioneers of the future.
        </p>
      </div>
      <div class="info-section" v-if="currentLevel">
        <div class="info-row">
          <div class="info-item">
            <p>{{ currentLevel.duration }}</p>
            <h3>The duration of the diploma</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.hours }}</p>
            <h3>Number of Clubs Hours</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.levels }}</p>
            <h3>The number of levels</h3>
          </div>
        </div>
        <div class="info-row">
          <div class="info-item">
            <p>{{ currentLevel.sessions }}</p>
            <h3>Number of hours of basic lectures</h3>
          </div>
          <div class="info-item">
            <p>{{ currentLevel.book }}</p>
            <h3>diploma’s textbook</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="slider-section">
      <Carousel
        :itemsToShow="itemsToShow"
        :itemsToScroll="1"
        :wrapAround="true"
        :snapAlign="'center'"
        @slideChange="onSlideChange"
        :transition="0.5"
      >
        <Slide
          v-for="(level, index) in levels"
          :key="index"
        >
          <div
            :class="['level-card', { active: activeIndex === index }]"
            @click="setActiveIndex(index)"
          >
            <div class="level-card-inner">
              <div class="level-main">{{ level.main }}</div>
              <div class="level-title">{{ level.title }}</div>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default {
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      activeIndex: 0,
      itemsToShow: 6, 
      levels: [
        {
          main: "1",
          title: "Foundation Stage Diploma",
          duration: "5 Months",
          hours: "264 Hours",
          levels: "4 Levels",
          sessions: "40 Sessions",
          book: "Oxford Phonics World",
        },
        {
          main: "2",
          title: "Basics Stage Diploma",
          duration: "4 Months",
          hours: "264 Hours",
          levels: "4 Levels",
          sessions: "32 Sessions",
          book: "Family and Friends 1",
        },
        {
          main: "3",
          title: "Starters Stage Diploma",
          duration: "4 Months",
          hours: "264 Hours",
          levels: "4 Levels",
          sessions: "32 Sessions",
          book: "Family and Friends 2",
        },
        {
          main: "4",
          title: "Juniors Stage Diploma",
          duration: "4 Months",
          hours: "264 Hours",
          levels: "4 Levels",
          sessions: "48 Sessions",
          book: "Family and Friends 3",
        },
        {
          main: "5",
          title: "Seniors Stage Diploma",
          duration: "5 Months",
          hours: "264 Hours",
          levels: "5 Levels",
          sessions: "40 Sessions",
          book: "Family and Friends 4",
        },
        {
          main: "6",
          title: "Winners Stage Diploma",
          duration: "6 Months",
          hours: "264 Hours",
          levels: "6 Levels",
          sessions: "32 Sessions",
          book: "Family and Friends 5",
        },
        {
          main: "7",
          title: "Leaders Stage Diploma",
          duration: "6 Months",
          hours: "264 Hours",
          levels: "4 Levels",
          sessions: "32 Sessions",
          book: "Family and Friends 6",
        },
        {
          main: "8",
          title: "Masters Stage Diploma",
          duration: "8 Months",
          hours: "264 Hours",
          levels: "8 Levels",
          sessions: "64 Sessions",
          book: "Interchange 3",
        },
        {
          main: "9",
          title: "Advanced Stage Diploma",
          duration: "4 Months",
          hours: "264 Hours",
          levels: "4 Levels",
          sessions: "32 Sessions",
          book: "Interchange 3",
        },
      ],
    };
  },
  computed: {
    currentLevel() {
      return this.levels[this.activeIndex];
    },
  },
  methods: {
    setActiveIndex(index) {
    this.activeIndex = index;
    this.currentLevel = this.levels[index]; 
    },
    onSlideChange({ index }) {
      this.setActiveIndex(index);
    },
    updateItemsToShow() {
      const width = window.innerWidth;
      if (width >= 1200) this.itemsToShow = 6;
      else if (width >= 992) this.itemsToShow = 5;
      else if (width >= 768) this.itemsToShow = 4;
      else if (width >= 576) this.itemsToShow = 3;
      else this.itemsToShow = 2;
    },
  },
  mounted() {
    this.updateItemsToShow();
    window.addEventListener('resize', this.updateItemsToShow);
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.updateItemsToShow);
  },
};
</script>

<style scoped>
.adult-levels-container {
  margin: auto;
  background-color: #fff;
  color: #165e84;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  direction: ltr;
}

.top-half {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.text-section {
  width: 40%;
  padding: 5%;
  padding-bottom: 0;
}

.text-section h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-family: 'DIN Next LT Arabic-n';
  font-weight: 700;
}

.text-section p {
  font-size: 1.1em;
  margin-bottom: 40px;
  color: #7c7c7c;
}

.info-section {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.info-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.info-item {
  width: 30%;
  text-align: center;
}

.info-item p {
  color: #ff6600;
  margin-bottom: 10px;
  font-family: 'DIN Next LT Arabic-n';
  font-weight: 700;
  font-size: 1.8em;
}

.info-item h3 {
  font-size: 1.4em;
  color: #666;
}


.slider-section {
  overflow: hidden;
  padding-bottom: 1%;
}

.level-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed #165e84;
  box-sizing: border-box;
  cursor: pointer;
  padding: 5%;
  border-radius: 15px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.level-card-inner {
  padding: 50px 10px 50px 10px;
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

.level-card-inner:hover {
  background-color: #165e84;
  color: #fff;
}

.level-card-inner:hover .level-main,
.level-card-inner:hover .level-title {
  color: #fff;
}

.level-card.active {
  border: 2px solid #165e84;
}

.level-main {
  font-size: 1.5rem;
  color: #333;
  font-weight: 700;
  font-family: 'DIN Next LT Arabic-n';
}

.level-title {
  font-size: 1.3rem;
  font-weight: 500;
  color: #333;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
  .top-half {
    flex-direction: column;
  }

  .text-section {
    width: 100%;
    padding: 5%;
  }

  .info-section {
    width: 100%;
  }

  .info-row {
    flex-direction: column;
  }

  .info-item {
    width: 100%;
  }

  .level-card {
    padding: 3%;
  }

  .level-card-inner {
    padding: 30px;
  }

  .level-main {
    font-size: 1.2rem;
  }

  .level-title {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .text-section h1 {
    font-size: 1.5em;
  }

  .text-section p {
    font-size: 0.9em;
  }

  .info-item p {
    font-size: 1.2em;
  }

  .info-item h3 {
    font-size: 1em;
  }

  .level-main {
    font-size: 1rem;
  }

  .level-title {
    font-size: 1.2rem;
  }
}
</style>
