<template>
  <div class="kids-carousel-container">
    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="itemsToShow"
      :wrap-around="true"
      snap-align="center"
      @mouseover="stopAutoplay" 
      @mouseleave="startAutoplay"
    >
      <Slide v-for="club in clubs" :key="club.id">
        <div
          class="kids-card"
          @mouseover="stopAutoplay"
          @mouseleave="startAutoplay"
          @click="stopAutoplay"
        >
          <img :src="club.img" :alt="club.title" class="kids-card-img" />
          <div class="kids-card-content">
            <h3 class="kids-card-title">{{ club.title }}</h3>
            <p class="kids-card-description" v-html="club.description"></p>
          </div>
        </div>
      </Slide>
    </Carousel>

    <div class="pagination">
      <button
        v-for="(_, index) in clubs"
        :key="index"
        @click="goToSlide(index)"
        :class="{ active: currentSlide === index }"
      ></button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: { Carousel, Slide },
  setup() {
    const carousel = ref(null);
    const currentSlide = ref(0);
    const itemsToShow = ref(3);
    const clubs = ref([
      {
        id: 1,
        img: require("@/assets/images/clubs/1.png"),
        title: "نادي القراءة",
        description:
          "يتم إعطاء الطالب جزء من قصة يتدرب على سماعها<br> مع قراءتها عدة مرات، مع الترديد خلف الملف الصوتي المرفق، وعندما يكون جاهزا للقراءة بنفس الكفاءة ينضم لأنشطة متقدمة أكثر حيث يقرأ خلالها على معلم متخصص، ليُقيِّم أداءه ويعطيه تعليمات مختلفة للتحسن .",
      },
      {
        id: 2,
        img: require("@/assets/images/clubs/5.png"),
        title: "نادي السينما",
        description:
          "في نادينا، يتعلم الطلاب عبارات يومية من خلال مشاهدة أجزاء من أفلام، مع التركيز على جمل محددة لإتقان النطق الصحيح. بعد المحاضرة، يسجل الطلاب هذه العبارات ويرسلون التسجيلات للمدرس عبر مجموعات الواتساب للتصحيح.",
      },
      {
        id: 3,
        img: require("@/assets/images/clubs/8.png"),
        title: "نادي المناظرات",
        description:
          "هو مسابقة تتم شهريا بين فصليين في نفس المستوى أومتتقاربين في المستوى علي موضوعات مختلفة بحضور معلمين الفصول ويعمل هذا النادي على خلق روح المنافسة بين الطلاب لإبراز أفضل ما عندهم وتشجيعهم على التقدم المستمر في تنمية مهارتهم في اللغة",
      },
      {
        id: 4,
        img: require("@/assets/images/clubs/2.png"),
        title: "نادي الكتابة",
        description:
          "في هذا النادي يتعلم الطالب الكتابة الأكاديمية وكتابة أنواع مختلفة من النصوص حسب مستواهم وعمرهم، وهي تعتبر دورة منفصلة عن الحصص الأساسية",
      },
      {
        id: 5,
        img: require("@/assets/images/clubs/6.png"),
        title: "نادي الصوتيات",
        description:
          "هذا النادي يقدم الدعم للطالب الذين لديهم مشکلات تتعلق بالنطق . حيث يقوم معلم متخصص بتدريب الطالب على كيفية النطق الصحيح، لكي يتمكن الطالب من خلال العديد من الأنشطة التفاعلية من ضبط النطق لديه تحسين مهارة النطق الصحيح الكلمات والجمل",
      },
      {
        id: 6,
        img: require("@/assets/images/clubs/1.png"),
        title: "اللايف كوتش – Life Coach",
        description:
          "الاهتمام في هذا النادي خاص ببرامج تنمية المهارات بشكل متطور وعن طريق أفضل المحاضرين و يساعد المتدرب أكثر علي فهم مراحل الحياة وطبيعة الشخصية في كل مراحلة بشكل فردي وجماعي في مجموعات مقسمة لفئات عمرية تشمل جميع الاعمار",
      },
      {
        id: 7,
        img: require("@/assets/images/clubs/4.png"),
        title: "نادي المحادثة",
        description:
          "هو مساحة حرة للطلاب لممارسة ما يتعلمونه أثناء الحصص عن طريق الحوار، حيث يتقابل الطلاب يومياً مع زملائهم، ويتحدثون بحرية لمدة يحددونها هم بأنفسهم. ويقوم معلمو الفصول بتزويدهم بمهام خاصة بعد كل حصة، لينجزوها في نادي المحادثة.",
      },
    ]);

    let autoplayInterval = null;

    const updateItemsToShow = () => {
      itemsToShow.value =
        window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

    const autoplay = () => {
      currentSlide.value = (currentSlide.value + 1) % clubs.value.length;
    };

    const stopAutoplay = () => {
      clearInterval(autoplayInterval);
    };

    const startAutoplay = () => {
      autoplayInterval = setInterval(autoplay, 3000);
    };

    onMounted(() => {
      updateItemsToShow();
      window.addEventListener("resize", updateItemsToShow);
      startAutoplay();
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateItemsToShow);
      clearInterval(autoplayInterval);
    });

    return {
      carousel,
      currentSlide,
      itemsToShow,
      clubs,
      goToSlide,
      stopAutoplay,
      startAutoplay
    };
  },
};
</script>

<style scoped>
.kids-carousel-container {
  width: 95%;
  margin: 0 auto;
  direction: rtl;
}

.kids-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: right;
  padding: 1rem;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 30px 10px;
  font-family: "DIN Next LT Arabic", sans-serif;
  font-weight: 500;
  width: 100%;
  height: 95%;
}

.kids-card:hover {
  background: linear-gradient(111.84deg, #2c80ac 0%, #165e84 100%);
  color: #ffffff;
}

.kids-card:hover .kids-card-title,
.kids-card:hover .kids-card-description {
  color: #ffffff;
}

.kids-card-img {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.5em;
  margin-left: auto;
}

.kids-card-content {
  height: auto;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.kids-card-title {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 30px;
  font-family: "DIN Next LT Arabic";
}

.kids-card-description {
  font-size: 1.25em;
  color: #6b6b6b;
}

.pagination {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.pagination button {
  margin: 0 0.5rem;
  padding: 0.5rem 0.5rem;
  border: none;
  background-color: #e0e0e0;
  border-radius: 0.5rem;
  cursor: pointer;
}

.pagination button.active {
  background-color: #165e84;
  padding: 0.5rem 1rem;
}

@media (max-width: 768px) {
  .kids-card {
    width: 100%;
  }

  .pagination button {
    margin: 0 0.25rem;
    padding: 0.4rem 0.4rem;
  }

  .pagination button.active {
    padding: 0.4rem 0.8rem;
  }

  .kids-card-content {
    padding: 0rem;
  }
  .kids-card-title {
    font-size: 1.3rem;
    line-height: 20px;
    margin-bottom: 0;
  }
}

@media (min-width: 768px) {
  .kids-card {
    width: 95%;
  }
}

@media (min-width: 1024px) {
  .kids-card {
    width: 95%;
  }
}
</style>
