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
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  components: { Carousel, Slide },
  setup() {
    const carousel = ref(null)
    const currentSlide = ref(0)
    const itemsToShow = ref(3)
    const clubs = ref([
        { id: 1, img: require('@/assets/images/clubs/1.png'), title: 'Reading Club', description: 'Students are given a part of a story to practice listening to and reading it multiple times, repeating after the attached audio file. When they reach the desired level of proficiency, they join more advanced activities where they receive guidance from a specialized teacher who evaluates their performances and gives them different instructions for improvement.' },
        { id: 2, img: require('@/assets/images/clubs/5.png'), title: 'Cinema Club', description: 'In our club, students learn daily phrases by watching movies, focusing on specific sentences to master correct pronunciation. After the class, students record these phrases and send the recordings to the teacher via WhatsApp groups for correction.' },
        { id: 3, img: require('@/assets/images/clubs/8.png'), title: 'Debate Club', description: 'A monthly competition between two classes of the same or similar level on different topics, attended by the classes\' teachers. This club aims to foster a competitive spirit among students to showcase their best and encourage continuous progress in developing their language skills.' },
        { id: 4, img: require('@/assets/images/clubs/7.png'), title: 'Talent Club', description: 'In this club, students showcase their various skills such as singing, embroidery, traditional crafts, and different sports in a joyful and enjoyable atmosphere for both students and parents.' },
        { id: 5, img: require('@/assets/images/clubs/2.png'), title: 'Writing Club', description: 'In this club, students learn academic writing and various types of texts according to their level and age. It is considered a separate course from the core classes.' },
        { id: 6, img: require('@/assets/images/clubs/6.png'), title: 'Phonetics Club', description: 'This club provides support for students with pronunciation issues. A specialized teacher trains students in correct pronunciation through interactive activities, improving their ability to pronounce words and form sentences accurately.' },
        { id: 7, img: require('@/assets/images/clubs/1.png'), title: 'Life Coach', description: 'This club focuses on skill development programs with top trainers and helps trainees better understand life stages and individual personalities through individual and group sessions divided by age groups.' },
        { id: 8, img: require('@/assets/images/clubs/2.png'), title: 'Drawing Club', description: 'A fun space where students learn basic drawing skills through videos on YouTube, with instruction provided in English.' },
        { id: 9, img: require('@/assets/images/clubs/1.png'), title: 'Social Club', description: 'One of the main clubs focused on raising awareness among parents through specialists discussing behavioral issues that may affect us or our children. Key topics and home activities will be addressed.' },
        { id: 10, img: require('@/assets/images/clubs/3.png'), title: 'Mama Moongi Club', description: 'This club focuses on discussing and addressing various behavioral challenges. We offer a free initial consultation session for students and parents, identifying any negative behavior needing correction or positive behavior to be reinforced. This pre-booked session provides an individualized educational plan to meet each student\'s needs.' },
        { id: 11, img: require('@/assets/images/clubs/4.png'), title: 'Conversation Club', description: 'A free space for students to practice what they learn in class through conversation, where students meet daily with their peers and talk freely for a duration they decide. Teachers provide them with specific tasks after each class to complete in the Conversation Club.' }
      ]);

    let autoplayInterval = null;

    const updateItemsToShow = () => {
      itemsToShow.value = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    };

    const goToSlide = (index) => {
      currentSlide.value = index;
    };

   const autoplay = () => {
      currentSlide.value = (currentSlide.value + 1) % clubs.value.length;
    };

    onMounted(() => {
      updateItemsToShow();
      window.addEventListener('resize', updateItemsToShow);
      autoplayInterval = setInterval(autoplay, 3000);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateItemsToShow);
      clearInterval(autoplayInterval);
    });

    return {
      carousel,
      currentSlide,
      itemsToShow,
      clubs,
      goToSlide,
    };
  },
};
</script>

<style scoped>
.kids-carousel-container {
  width: 95%;
  margin: 0 auto;
  direction: ltr;
}
.kids-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  text-align: left;
  padding: 1rem;
  background: #fff;
  border-radius: 1em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin: 30px 10px; 
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-weight: 500;
  width: 100%;
  height: 95%;
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
