<template>
  <div class="adult-levels-container">
    <div class="text-section">
      <h1>مستويات <br />تدريب الصغار</h1>
      <p>
        نقوم بمغامرة رائعة مع أصدقائنا الصغار! نتعلم سويًا اللغة بطريقة ممتعة
        ونكتسب مهارات سحرية للتحدث والاستماع، مما يفتح لنا باباً مليئًا
        بالطموحات والفرص الكبيرة ليصبحوا رواد المستقبل.
      </p>
      <button @click="sendMessage" id="kids-wa4-ar">
        إشترك معنا الأن
        <i class="fab fa-whatsapp"></i>
      </button>
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
        <Slide v-for="(level, index) in levels" :key="index">
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
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

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
        { main: "Stage", title: "A1" },
        { main: "Stage", title: "A1+" },
        { main: "Stage", title: "A2" },
        { main: "Stage", title: "A2+" },
        { main: "Stage", title: "B1" },
        { main: "Stage", title: "B1+" },
        { main: "Stage", title: "B2" },
        { main: "Stage", title: "B2+" },
      ],
    };
  },
  computed: {
    currentLevel() {
      return this.levels[this.activeIndex];
    },
  },
  methods: {
    async sendMessage() {
      try {
        const response = await fetch(
          `https://service.monglish.co.uk/api/get-phone-number`
        );
        if (!response.ok) {
          console.log("Network response was not ok");
        }
        const data = await response.json();
        this.getNumber = data.phone_number;

        if (this.getNumber) {
          const baseUrl =
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            )
              ? "whatsapp://send"
              : "https://web.whatsapp.com/send";

          // Encode the Arabic message
          const arabicMessage = encodeURIComponent(
            "تفاصيل منهج المعايشة للأطفال"
          );

          // Create the WhatsApp URL with the predefined message
          const url = `${baseUrl}?phone=${this.getNumber}&text=${arabicMessage}`;

          // Open WhatsApp
          window.open(url, "_blank");
        }
      } catch (error) {
        console.error("Error fetching phone number:", error);
      }
    },
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
    window.addEventListener("resize", this.updateItemsToShow);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateItemsToShow);
  },
};
</script>

<style scoped>
.adult-levels-container {
  margin: auto;
  background-color: #fff;
  color: #165e84;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  direction: rtl;
  background-image: url("@/assets/images/level.png");
  background-size: cover;
  background-position: center;
}

.text-section {
  padding: 0 5%;
  text-align: center;
}

.text-section h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}

.text-section p {
  font-size: 1.1em;
  color: #7c7c7c;
  padding: 0 25%;
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
  font-family: "DIN Next LT Arabic-n";
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
  background-color: #fff;
}

.level-card-inner {
  padding: 50px;
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
  font-weight: 500;
}

.level-title {
  font-family: "DIN Next LT Arabic";
  font-size: 1.8rem;
  font-weight: 500;
  color: #333;
}

/* Media Queries for Responsiveness */
@media (max-width: 768px) {
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
button {
  width: 30%;
  padding: 0.5rem 1.5rem 1rem 1.5rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}
</style>