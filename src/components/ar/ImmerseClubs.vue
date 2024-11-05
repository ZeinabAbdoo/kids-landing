<template>
  <div class="kids-carousel-container">
    <Carousel
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="itemsToShow"
      :wrap-around="true"
      snap-align="center"
    >
      <Slide v-for="club in clubs" :key="club.id">
        <div class="kids-card">
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
      >
      </button>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'

export default {
  components: { Carousel, Slide },
  setup() {
    const carousel = ref(null)
    const currentSlide = ref(0)
    const itemsToShow = ref(3)
    const clubs = ref([
      { id: 1, img: require('@/assets/images/clubs/1.png'), title: 'نادي القراءة', description: 'يتم إعطاء الطالب جزء من قصة يتدرب على سماعها<br> مع قراءتها عدة مرات، مع الترديد خلف الملف الصوتي المرفق، وعندما يكون جاهزا للقراءة بنفس الكفاءة ينضم لأنشطة متقدمة أكثر حيث يقرأ خلالها على معلم متخصص، ليُقيِّم أداءه ويعطيه تعليمات مختلفة للتحسن .' },
      { id: 2, img: require('@/assets/images/clubs/5.png'), title: 'نادي السينما', description: 'في نادينا، يتعلم الطلاب عبارات يومية من خلال مشاهدة أجزاء من أفلام، مع التركيز على جمل محددة لإتقان النطق الصحيح. بعد المحاضرة، يسجل الطلاب هذه العبارات ويرسلون التسجيلات للمدرس عبر مجموعات الواتساب للتصحيح.' },
      { id: 3, img: require('@/assets/images/clubs/8.png'), title: 'نادي المناظرات', description: 'هو مسابقة تتم شهريا بين فصليين في نفس المستوى أومتتقاربين في المستوى علي موضوعات مختلفة بحضور معلمين الفصول ويعمل هذا النادي على خلق روح المنافسة بين الطلاب لإبراز أفضل ما عندهم وتشجيعهم على التقدم المستمر في تنمية مهارتهم في اللغة' },
      { id: 4, img: require('@/assets/images/clubs/2.png'), title: 'نادي الكتابة', description: 'في هذا النادي يتعلم الطالب الكتابة الأكاديمية وكتابة أنواع مختلفة من النصوص حسب مستواهم وعمرهم، وهي تعتبر دورة منفصلة عن الحصص الأساسية' },
      { id: 5, img: require('@/assets/images/clubs/6.png'), title: 'نادي الصوتيات', description: 'هذا النادي يقدم الدعم للطالب الذين لديهم مشکلات تتعلق بالنطق . حيث يقوم معلم متخصص بتدريب الطالب على كيفية النطق الصحيح، لكي يتمكن الطالب من خلال العديد من الأنشطة التفاعلية من ضبط النطق لديه تحسين مهارة النطق الصحيح الكلمات والجمل' },
      { id: 6, img: require('@/assets/images/clubs/1.png'), title: 'اللايف كوتش – Life Coach', description: 'الاهتمام في هذا النادي خاص ببرامج تنمية المهارات بشكل متطور وعن طريق أفضل المحاضرين و يساعد المتدرب أكثر علي فهم مراحل الحياة وطبيعة الشخصية في كل مراحلة بشكل فردي وجماعي في مجموعات مقسمة لفئات عمرية تشمل جميع الاعمار' },
      { id: 7, img: require('@/assets/images/clubs/4.png'), title: 'نادي المحادثة', description: 'هو مساحة حرة للطلاب لممارسة ما يتعلمونه أثناء الحصص عن طريق الحوار، حيث يتقابل الطلاب يومياً مع زملائهم، ويتحدثون بحرية لمدة يحددونها هم بأنفسهم. ويقوم معلمو الفصول بتزويدهم بمهام خاصة بعد كل حصة، لينجزوها في نادي المحادثة.' }
    ])

    const updateItemsToShow = () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : 3
      console.log('Items to show:', itemsToShow.value)
    }

    const goToSlide = (index) => {
      console.log('Attempting to go to slide:', index)
      currentSlide.value = index
    }

    watch(currentSlide, (newValue) => {
      console.log('Current slide changed to:', newValue)
    })

    onMounted(() => {
      updateItemsToShow()
      window.addEventListener('resize', updateItemsToShow)
      console.log('Component mounted')
    })

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsToShow)
    })

    return {
      carousel,
      currentSlide,
      itemsToShow,
      clubs,
      goToSlide,
    }
  },
}
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
  align-items: flex-end; 
  text-align: right;
  padding: 1rem;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 10px; 
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  width: 100%;
  height: 100%;
}
.kids-card:hover {
  background: linear-gradient(111.84deg, #2C80AC 0%, #165E84 100%);
  color: #ffffff;
}

.kids-card:hover .kids-card-title,
.kids-card:hover .kids-card-description {
  color: #ffffff;
}

.kids-card-img {
  width: 20%; 
  height: auto; 
  object-fit: cover;
  border-radius: 0.5em;
}
.kids-card-content {
  height: auto; 
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center; 
}
.kids-card-title {
  font-size: 1.6rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: 'DIN Next LT Arabic';
}
.kids-card-description {
  font-size: 1.25em;
  color: #6b6b6b;
}
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
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
  background-color: #165E84;
  padding: 0.5rem 1rem;
}
@media (max-width: 767px) {
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
