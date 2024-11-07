<template>
  <!--Section One Content-->
  <div class="kids-sec1">
    <div class="text-container">
      <h3>Kids Courses</h3>
      <h1>Laying the groundwork for a bright future with Monglish</h1>
      <h2>where privilege becomes reality.</h2>
      <p>
        We are proud to have adopted the latest and most influential methods of
        language teaching the cohabitation “Live/Communicative/Immersive”
        curriculum. This unique and exclusive method is key to achieving
        exceptional and distinctive results, ensuring a rich and deep learning
        experience for all our learners.
      </p>
      <button @click="sendMessage" id="kids-wa1-en">
        Join Us Now
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>
  </div>

  <!--Section Two Content-->
  <div class="kids-sec2">
    <div class="kids-space">
      <h1>OUR DIPLOMA</h1>
      <button @click="sendMessage" id="kids-wa2-en">
        Join Us Now
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>
    <div class="kids-sec2-cards">
      <div class="sec2-card card-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="106"
          height="272"
          viewBox="0 0 106 272"
          fill="none"
        >
          <path
            d="M49.1672 63.2H48.3672L5.16719 92.8C2.23386 94.6667 0.76719 93.8667 0.76719 90.4V40.8C0.76719 38.6667 1.70052 36.8 3.56719 35.2L49.1672 2.39999C51.0339 0.799995 53.4339 -2.86102e-06 56.3672 -2.86102e-06H101.167C103.834 -2.86102e-06 105.167 1.33333 105.167 3.99999V268C105.167 270.667 103.834 272 101.167 272H53.1672C50.5005 272 49.1672 270.667 49.1672 268V63.2Z"
            fill="url(#paint0_linear_718_34540)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_718_34540"
              x1="64"
              y1="-2"
              x2="64"
              y2="272"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#A8D0FF"></stop>
              <stop offset="1" stop-color="#F1F1F1"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h1>Basic Training Lessons</h1>
        <p>
          Our lesson schedules are flexible and varied, tailored to fit your
          daily schedule without any negative impact, providing you with a
          comfortable learning experience that is in harmony with your
          lifestyle.
        </p>
      </div>
      <div class="sec2-card card-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="162"
          height="263"
          viewBox="0 0 162 263"
          fill="none"
        >
          <path
            d="M0.62383 223.86C0.62383 221.833 1.25716 220.06 2.52383 218.54L93.3438 110.62C98.4105 104.793 102.211 99.0933 104.744 93.52C107.277 87.6933 108.544 81.4867 108.544 74.9C108.544 66.2867 106.01 59.1933 100.944 53.62C96.1305 48.0467 89.2905 45.26 80.4238 45.26C62.4372 45.26 52.3038 55.3933 50.0238 75.66C50.0238 78.1933 48.6305 79.2067 45.8438 78.7L4.04383 71.86C1.5105 71.3533 0.497162 69.8333 1.00383 67.3C1.76383 58.4333 4.04383 49.9467 7.84383 41.84C11.6438 33.7333 16.9638 26.64 23.8038 20.56C30.8972 14.48 39.2572 9.66664 48.8838 6.11998C58.7638 2.31998 69.9105 0.419983 82.3238 0.419983C94.7372 0.419983 105.757 2.31998 115.384 6.11998C125.264 9.91999 133.624 15.1133 140.464 21.7C147.304 28.2867 152.497 36.14 156.044 45.26C159.844 54.1267 161.744 63.7533 161.744 74.14C161.744 86.5533 159.337 97.8267 154.524 107.96C149.964 117.84 143.631 127.467 135.524 136.84L67.5038 217.02V217.78H157.944C160.477 217.78 161.744 219.047 161.744 221.58V259.2C161.744 261.733 160.477 263 157.944 263H4.42383C1.8905 263 0.62383 261.733 0.62383 259.2V223.86Z"
            fill="url(#paint0_linear_718_34525)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_718_34525"
              x1="82"
              y1="-2"
              x2="82"
              y2="272"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFA8A8"></stop>
              <stop offset="1" stop-color="#F1F1F1"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h1>Additional Immersion Clubs</h1>
        <p>
          A fun trip to the adventurous world of Monglish! At Munglish
          Interactive Clubs, every door you open takes you to an enchanting
          world of games and stories that make learning English an exciting
          journey.
        </p>
      </div>
      <div class="sec2-card card-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="162"
          height="253"
          viewBox="0 0 162 253"
          fill="none"
        >
          <path
            d="M1.64047 196.8C1.16047 194.4 2.12047 192.84 4.52047 192.12L44.1205 184.56C46.2805 184.32 47.7205 185.28 48.4405 187.44C50.6005 193.92 54.3205 199.44 59.6005 204C64.8805 208.32 71.8405 210.48 80.4805 210.48C89.8405 210.48 97.1605 207.48 102.44 201.48C107.96 195.48 110.72 187.92 110.72 178.8C110.72 167.76 107.6 159.24 101.36 153.24C95.3605 147.24 87.0805 144.24 76.5205 144.24H66.0805C63.6805 144.24 62.4805 143.04 62.4805 140.64V105.72C62.4805 103.32 63.6805 102.12 66.0805 102.12H75.8005C84.9205 102.12 92.2405 99.36 97.7605 93.84C103.28 88.32 106.04 80.88 106.04 71.52C106.04 62.88 103.52 55.92 98.4805 50.64C93.6805 45.36 86.9605 42.72 78.3205 42.72C70.6405 42.72 64.5205 44.76 59.9605 48.84C55.6405 52.92 52.5205 58.44 50.6005 65.4C49.8805 67.56 48.4405 68.4 46.2805 67.92L7.04047 60.36C4.64047 59.88 3.68047 58.56 4.16047 56.4C5.60047 48.24 8.36047 40.8 12.4405 34.08C16.5205 27.12 21.8005 21.12 28.2805 16.08C35.0005 11.04 42.6805 7.19999 51.3205 4.55999C60.2005 1.67999 70.0405 0.239984 80.8405 0.239984C92.8405 0.239984 103.52 1.91998 112.88 5.27998C122.24 8.63998 130.16 13.32 136.64 19.32C143.12 25.32 148.04 32.52 151.4 40.92C154.76 49.08 156.44 58.08 156.44 67.92C156.44 78.48 154.04 88.08 149.24 96.72C144.68 105.36 137.96 112.56 129.08 118.32V119.04C132.68 120.96 136.4 123.6 140.24 126.96C144.08 130.32 147.56 134.52 150.68 139.56C153.8 144.36 156.32 150 158.24 156.48C160.16 162.96 161.12 170.28 161.12 178.44C161.12 189.72 159.08 199.92 155 209.04C151.16 218.16 145.64 225.96 138.44 232.44C131.24 238.92 122.72 243.96 112.88 247.56C103.28 251.16 92.7205 252.96 81.2005 252.96C60.3205 252.96 42.6805 248.04 28.2805 238.2C13.8805 228.36 5.00047 214.56 1.64047 196.8Z"
            fill="url(#paint0_linear_718_34532)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_718_34532"
              x1="82"
              y1="-6"
              x2="82"
              y2="268"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD9749"></stop>
              <stop offset="1" stop-color="#F1F1F1"></stop>
            </linearGradient>
          </defs>
        </svg>
        <h1>Specialized Support</h1>
        <p>
          Our educational programs are designed to provide additional support
          and guidance for individuals with specific needs or requirements,
          ensuring they receive the help they need to succeed.
        </p>
      </div>
    </div>
  </div>

  <!-- Section Three Content (English) -->
  <div class="content-slider-container">
    <!-- Text Content Section -->
    <div class="text-content">
      <h1>Your Child Deserves to Shine! 🌟</h1>
      <p>
        Discover the remarkable progress of our students at Monglish Academy.
        Achieving these skills is within reach with our advanced programs. Let
        us help your child become a top achiever, gaining confidence and
        language fluency smoothly and effectively!
      </p>
      <button @click="sendMessage" id="kids-wa3-en">
        Join Us Now
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>

    <!-- Slider Section -->
    <div class="video-slider-component">
      <div class="slider-container">
        <button class="slider-nav left" @click="prevSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div class="image-container">
          <img
            :src="currentImage.src"
            :alt="currentImage.alt"
            @click="openPopup(currentImage.videoSrc)"
            class="image-thumbnail"
          />
          <svg
            height="80px"
            width="80px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 491.444 491.444"
            xml:space="preserve"
            fill="#000000"
            class="video-icon"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                style="fill: #ff9d52"
                d="M0.11,245.721c-1.434,61.225,11.068,122.791,39.645,145.883c80.101,64.726,331.832,64.726,411.932,0c28.577-23.093,41.079-84.659,39.646-145.883H0.11z"
              ></path>
              <path
                style="fill: #f47d21"
                d="M451.687,105.91c-72.82-72.82-339.111-72.82-411.932,0C15.231,130.434,1.463,187.925,0.11,245.721h491.223C489.98,187.925,476.213,130.434,451.687,105.91z"
              ></path>
              <path
                style="fill: #ffffff"
                d="M320.941,232.105L190.51,136.284c-11.159-8.199-26.9-0.231-26.9,13.617v95.82h164.225C327.834,240.6,325.537,235.481,320.941,232.105z"
              ></path>
              <path
                style="fill: #ffffff"
                d="M190.51,355.161l130.432-95.823c4.595-3.375,6.893-8.496,6.893-13.617H163.609v95.824C163.609,355.391,179.351,363.359,190.51,355.161z"
              ></path>
            </g>
          </svg>
        </div>

        <button class="slider-nav right" @click="nextSlide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Popup Overlay -->
    <div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
      <div class="popup-content" @click.stop>
        <button class="close-button" @click="closePopup">&times;</button>
        <iframe
          v-if="currentVideoSrc"
          :src="currentVideoSrc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="popup-video"
        ></iframe>
      </div>
    </div>
  </div>

  <!--Section Four Content-->
  <div class="kids-sec4">
    <h3>Internationally Certified</h3>
    <h1>and High quality performance</h1>
    <p>
      The Academy is recognized as an Accredited Training Provider, as
      accredited by the International Organization for Training Quality (IOTQ
      USA). This accreditation signifies the quality of the training courses and
      encompasses all entities, locations, and activities of the Monglish Global
      Academy.
    </p>
    <div class="kids-sec4-imgs">
      <img src="@/assets/images/accreditations/1.webp" />
      <img src="@/assets/images/accreditations/2.webp" />
      <img src="@/assets/images/accreditations/3.webp" />
      <img src="@/assets/images/accreditations/4.webp" />
      <img src="@/assets/images/accreditations/5.webp" />
      <img src="@/assets/images/accreditations/6.webp" />
      <img src="@/assets/images/accreditations/7.webp" />
      <img src="@/assets/images/accreditations/8.webp" />
      <img src="@/assets/images/accreditations/9.webp" />
      <img src="@/assets/images/accreditations/10.webp" />
      <img src="@/assets/images/accreditations/11.webp" />
      <img src="@/assets/images/accreditations/12.webp" />
    </div>
  </div>

  <!--Section Five Content-->
  <div class="kids-sec5">
    <img
      src="@/assets/images/kids/Vector.png"
      alt="vector"
      class="vector-img"
    />
    <h1>MONGI-IMMERSE CLUBS</h1>
    <ImmerseClubs />
  </div>

  <!--Section Seven Content-->

  <!--Section Eight Content-->
  <div class="kids-sec8">
    <div class="kids-sec8-row">
      <h4>
        ARE YOU SEEKING TO IMMERSE YOURSELF IN THE LANGUAGE IMMEDIATELY?
        <br /><span>WELCOME!</span>
      </h4>
      <p>
        The positive feedback from our students clearly reflects the profound
        impact of our courses/ dedicated work on their career paths. They
        consistently affirm how these courses contribute to enhancing their
        performance at work and strengthening their practical skills. This
        underscores the significant value and immense benefit provided by our
        academy.
      </p>
    </div>

    <div class="adult-swiper">
      <div ref="swiperContainer" class="swiper-container">
        <div class="swiper-wrapper">
          <div
            v-for="(review, index) in reviews"
            :key="index"
            class="swiper-slide"
          >
            <div class="quote-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 40 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.18 17.808H2.8C2.96 8.46795 4.8 6.92796 10.54 3.52796C11.2 3.12796 11.42 2.28796 11.02 1.60796C10.9279 1.45051 10.8053 1.31298 10.6595 1.2034C10.5137 1.09381 10.3475 1.01436 10.1706 0.96968C9.99376 0.925 9.80977 0.915984 9.62939 0.943158C9.44901 0.970333 9.27585 1.03315 9.12 1.12796C2.36 5.12796 0 7.56796 0 19.188V29.968C0 33.388 2.78 36.148 6.18 36.148H12.18C15.7 36.148 18.36 33.488 18.36 29.968V23.968C18.36 20.468 15.7 17.808 12.18 17.808ZM33.818 17.808H24.438C24.598 8.46795 26.438 6.92796 32.178 3.52796C32.838 3.12796 33.058 2.28796 32.658 1.60796C32.5638 1.45003 32.4393 1.31227 32.2916 1.20261C32.144 1.09295 31.9762 1.01353 31.7978 0.968927C31.6193 0.924324 31.4339 0.915412 31.252 0.942703C31.0701 0.969995 30.8955 1.03295 30.738 1.12796C23.978 5.12796 21.618 7.56796 21.618 19.208V29.988C21.618 33.408 24.398 36.168 27.798 36.168H33.798C37.318 36.168 39.978 33.508 39.978 29.988V23.988C39.998 20.468 37.338 17.808 33.818 17.808Z"
                  fill="#0C1B2A"
                />
              </svg>
            </div>
            <p class="review-by">{{ review.by }}</p>
            <p>{{ review.review }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PackagesFoundation />

  <!--Section Nine Content-->
  <div class="kids-sec9">
    <div class="kids-sec9-content">
      <div class="kids-sec9-text">
        <h2>
          We promise you quality and perfection because our team is the
          strongest academically
        </h2>
        <div
          @click="toggleDescription(1)"
          class="kids-sec9-title"
          :class="{ active: activeDescription === 1 }"
        >
          <span>Specialists</span>
          <span class="caret"
            ><svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z"
                  fill="#6f8286"
                ></path>
              </g></svg
          ></span>
        </div>
        <p v-if="activeDescription === 1">
          We have specialized academic teams to train young people and adult
          learners.
        </p>

        <div
          @click="toggleDescription(2)"
          class="kids-sec9-title"
          :class="{ active: activeDescription === 2 }"
        >
          <span>Global</span>
          <span class="caret"
            ><svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z"
                  fill="#6f8286"
                ></path>
              </g></svg
          ></span>
        </div>
        <p v-if="activeDescription === 2">
          We have more than 20 years of academic experience working with major
          international organizations in the Middle East, Asia, Europe, and
          America.
        </p>

        <div
          @click="toggleDescription(3)"
          class="kids-sec9-title"
          :class="{ active: activeDescription === 3 }"
        >
          <span>Qualified</span>
          <span class="caret"
            ><svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z"
                  fill="#6f8286"
                ></path>
              </g></svg
          ></span>
        </div>
        <p v-if="activeDescription === 3">
          Expert native and near native teachers to elevate your fluency level.
        </p>

        <div
          @click="toggleDescription(4)"
          class="kids-sec9-title"
          :class="{ active: activeDescription === 4 }"
        >
          <span>Creative</span>
          <span class="caret"
            ><svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z"
                  fill="#6f8286"
                ></path>
              </g></svg
          ></span>
        </div>
        <p v-if="activeDescription === 4">
          Experts in teaching the art of speaking English fluently like
          Americans.
        </p>

        <div
          @click="toggleDescription(5)"
          class="kids-sec9-title"
          :class="{ active: activeDescription === 5 }"
        >
          <span>Able</span>
          <span class="caret"
            ><svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z"
                  fill="#6f8286"
                ></path>
              </g></svg
          ></span>
        </div>
        <p v-if="activeDescription === 5">
          Experts in laying the foundations as well as teaching phonetics and
          reading at an excellent level.
        </p>

        <div
          @click="toggleDescription(6)"
          class="kids-sec9-title"
          :class="{ active: activeDescription === 6 }"
        >
          <span>Technicians</span>
          <span class="caret"
            ><svg
              width="24px"
              height="24px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M917.333333 364.8L851.2 298.666667 512 637.866667 172.8 298.666667 106.666667 364.8 512 768z"
                  fill="#6f8286"
                ></path>
              </g></svg
          ></span>
        </div>
        <p v-if="activeDescription === 6">
          Experts in conversation and fluency training.
        </p>
      </div>
      <div class="kids-sec9-images">
        <img src="@/assets/images/kids/sec11.png" />
      </div>
    </div>
  </div>

  <PackagesKids ref="packagesSection" />

  <!--Section Ten Content-->
  <FormSection />
</template>

<script>
import ImmerseClubs from "../../components/en/ImmerseClubs.vue";
import PackagesKids from "../../components/en/PackagesKids.vue";
import PackagesFoundation from "../../components/en/PackagesFoundation.vue";
import FormSection from "../../components/en/FormSection.vue";

import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "KidsCourses",
  components: {
    ImmerseClubs,
    PackagesKids,
    PackagesFoundation,
    FormSection,
  },
  data() {
    return {
      activeDescription: null,
      isPopupOpen: false,
      currentVideoSrc: "",
      currentSlide: 0,
      images: [
        {
          videoSrc: "https://www.youtube.com/embed/jtEK65Jkb2c?autoplay=1",
          src: require("@/assets/images/video/6.png"),
          alt: "Video 1 Thumbnail",
        },
        {
          videoSrc: "https://www.youtube.com/embed/jdWsjo_IpWE?autoplay=1",
          src: require("@/assets/images/video/7.png"),
          alt: "Video 2 Thumbnail",
        },
      ],
      totalSections: 3,
      currentIndex: 0,
      reviews: [
        {
          stars: 5,
          review:
            "جزاك الله خير انا حضرت المحاضرة كامله معاها ماشاء الله أسلوبه متميز يتسم بالهدوء أثناء الشرح",
          by: "عبد الله عوده",
        },
        {
          stars: 5,
          review:
            "الله يعطيكم العافية بصراحه تمنيت اني دخلت عبد الرحمن من زمان لاني لاحظت تطور كبير و هذا بفضل الله وتوفيقة ثم بفضل جهدكم معانا واهتمامكم بأدق ادق التفاصيل و متابعة الواجابات و حرصكم بتذكيرنا بمواعيد الاندية كانه ابن لكم",
          by: "ام عبد الرحمن",
        },
        {
          stars: 5,
          review:
            "لا بجد ما شاء الله ربنا يبارك فيها من أجمل واحسن المدرسين اللي في الأكاديمية و غير الضمير الي عندها ربنا يرضيها يارب في حياتها",
          by: "والدة إياد",
        },
        {
          stars: 5,
          review:
            "السلام عليكم ورحمة الله وبركاته نادي القراءة حقيقي اللي مسؤوله عنه مره ممتازة ما شاء الله و بترد في اسرع وقت وتقوم بتحديد الموعد و ملتزمة جدا جزاها الله خيرا",
          by: "فهد محمد",
        },
      ],
      swiper: null,
    };
  },
  computed: {
    currentImage() {
      return this.images[this.currentSlide];
    },
  },
  mounted() {
    this.scrollToPackagesWithDelay();

    this.$nextTick(() => {
      this.initSwiper();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    async sendMessage() {
      try {
        const response = await fetch(
          `https://service.monglish.co.uk/api/get-phone-number`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const url = `https://wa.me/${data.phone_number}`;
        window.open(url, "_blank");
      } catch (error) {
        console.error("Error fetching phone number:", error);
      }
    },
    initSwiper() {
      const swiperContainer = this.$refs.swiperContainer;
      if (swiperContainer) {
        if (this.swiper) {
          this.swiper.destroy(true, true);
        }

        this.swiper = new Swiper(swiperContainer, {
          loop: true,
          slidesPerView: window.innerWidth <= 768 ? 1 : 3,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        this.startAutoNavigate();
      }
    },

    handleResize() {
      this.initSwiper();
    },
    openPopup(videoSrc) {
      this.currentVideoSrc = videoSrc;
      this.isPopupOpen = true;
    },
    closePopup() {
      this.isPopupOpen = false;
      this.currentVideoSrc = "";
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    startAutoNavigate() {
      setInterval(() => {
        if (this.swiper) {
          this.swiper.slideNext();
        }
      }, 3000);
    },
    toggleDescription(id) {
      this.activeDescription = this.activeDescription === id ? null : id;
    },
    scrollToPackagesWithDelay() {
      setTimeout(() => {
        if (this.$route.hash === "#packages-section") {
          const packagesSection = this.$refs.packagesSection;
          if (packagesSection) {
            packagesSection.$el.scrollIntoView({ behavior: "smooth" });
          }
        }
      }, 300);
    },
  },
  watch: {
    "$route.hash"() {
      this.scrollToPackagesWithDelay();
    },
    reviews(newReviews) {
      if (newReviews.length > 0) {
        this.initSwiper();
      }
    },
  },
};
</script>

<style scoped>
/*section 1 style */
.kids-sec1 {
  background-image: url("@/assets/images/bg.png");
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: left;
  padding: 1rem 4rem 4rem 4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  margin-top: -85px;
  transform: scalex(-1);
  z-index: 1;
  position: relative;
}

.kids-sec1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.text-container {
  position: relative;
  z-index: 2;
  padding: 7rem 2rem 2rem 2rem;
  transform: scalex(-1);
  direction: ltr;
  padding-right: 55%;
}

.kids-sec1 h3,
.kids-sec1 h1,
.kids-sec1 h2,
.kids-sec1 p {
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Large desktop */
.kids-sec1 h3 {
  font-size: 30px;
  line-height: 35px;
}

.kids-sec1 h1 {
  font-size: 54px;
  line-height: 75px;
}

.kids-sec1 h2 {
  font-size: 42px;
  line-height: 45px;
}

.kids-sec1 p {
  font-size: 20px;
  line-height: 29px;
}

.kids-sec1 button,
.kids-sec2 button {
  max-width: 50%;
  padding: 0.5rem 0.75rem 0.7rem 0.75rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

.kids-sec1 button:hover,
.kids-sec2 button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

/* Laptop view */
@media (max-width: 1440px) {
  .kids-sec1 {
    padding: 3rem 2rem;
  }

  .kids-sec1 h1 {
    font-size: 40px;
    line-height: 50px;
  }

  .kids-sec1 h2 {
    font-size: 26px;
    line-height: 30px;
  }

  .kids-sec1 p {
    font-size: 18px;
    line-height: 26px;
  }
}

/* Tablet view */
@media (max-width: 1280px) {
  .kids-sec1 h1 {
    font-size: 38px;
    line-height: 50px;
  }

  .kids-sec1 h2 {
    font-size: 24px;
    line-height: 25px;
  }

  .kids-sec1 p {
    font-size: 18px;
    line-height: 25px;
  }
}

/* Mobile view */
@media (max-width: 768px) {
  .kids-sec1 {
    background-image: url("@/assets/images/bg2.jpg");
    text-align: center;
    padding: 1rem;
    z-index: 0;
  }

  .kids-sec1::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(64, 64, 64, 0) 30%, #1e1e1e 100%);
    z-index: 1;
  }

  .text-container {
    max-width: 100%;
    padding-top: 90%;
  }

  .kids-sec1 h3 {
    font-size: 20px;
    line-height: 20px;
  }

  .kids-sec1 h1 {
    font-size: 30px;
    line-height: 30px;
  }

  .kids-sec1 h2 {
    font-size: 24px;
    line-height: 30px;
  }

  .kids-sec1 p {
    font-size: 16px;
    line-height: 22px;
  }

  .kids-sec1 button {
    max-width: 80%;
  }
}

/* Small mobile view */
@media (max-width: 480px) {
  .text-container {
    max-width: 100%;
    padding: 0;
    padding-top: 100%;
  }
  .text-container h3 {
    font-weight: bold;
    font-size: 23px;
    line-height: 1px;
  }

  .kids-sec1 h1 {
    font-size: 22px;
    line-height: 30px;
  }

  .kids-sec1 h2 {
    font-size: 20px;
    line-height: 23px;
  }

  .kids-sec1 p {
    font-size: 17px;
    line-height: 23px;
  }
}

/*section 2 style*/
.kids-sec2 {
  direction: ltr;
  text-align: center;
  background-color: #fff;
  color: #165e84;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  padding: 2em 1em;
}
.kids-space {
  padding: 4em 2em;
}
.kids-space h1 {
  font-size: 3.2em;
  font-family: "DIN Next LT Arabic-n";
  font-weight: 700;
}
.kids-space h3 {
  font-size: 2.2em;
}
.kids-sec2-cards {
  display: flex;
  justify-content: center;
  gap: 3em;
  padding: 3em;
  flex-wrap: wrap;
}
.sec2-card {
  border-radius: 1em;
  padding: 1em;
  flex: 1 1 15em;
  max-width: 95%;
  height: 30em;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: rgba(104, 104, 104, 0.3) 1px solid;
  margin-bottom: 1em;
}
.sec2-card.card-1 {
  background: linear-gradient(180deg, #d9d9d900 0%, #eff6fe 100%);
}
.sec2-card.card-2 {
  background: linear-gradient(180deg, #d9d9d900 0%, #faebeb 100%);
}
.sec2-card.card-3 {
  background: linear-gradient(180deg, #d9d9d900 0%, #ffefe3 100%);
}
.sec2-card svg {
  width: 100%;
  height: 100%;
  margin-bottom: 3em;
  margin-top: -6em;
}
.sec2-card h1 {
  font-size: 2.3em;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.sec2-card p {
  font-size: 1.3em;
  color: #666;
  margin: 0 1em;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
@media (max-width: 768px) {
  .kids-space h1 {
    font-size: 2em;
    line-height: 30px;
  }
  .kids-space h3 {
    font-size: 1.6em;
    line-height: 30px;
  }
  .sec2-card {
    flex: 1 1 100%;
    max-width: 100%;
  }
  .sec2-card h1 {
    font-size: 1.5em;
  }
  .sec2-card p {
    font-size: 1em;
  }
  .kids-sec2 button {
    max-width: 100%;
  }
}
@media (max-width: 480px) {
  .kids-space {
    padding-bottom: 0;
  }
  .kids-space h1 {
    font-size: 1.5em;
  }
  .kids-space h3 {
    font-size: 1.3em;
  }
  .sec2-card {
    height: auto;
  }
  .sec2-card svg {
    width: 80px;
    height: 120px;
    margin-top: 0;
    margin-bottom: 0;
  }
  .sec2-card h1 {
    font-size: 1.2em;
  }
  .sec2-card p {
    font-size: 0.9em;
  }
  .kids-sec2-cards {
    gap: 1em;
  }
}

/* Section 3 style */
/* Section 3 style */
.content-slider-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  direction: rtl;
  background-image: url("@/assets/images/vid.png");
  background-size: cover;
  background-position: center;
}

.text-content {
  flex: 1;
  padding-right: 5%;
}

.text-content h1 {
  color: #165e84;
  font-size: 48px;
  font-weight: 500;
  font-family: "DIN Next LT Arabic";
  margin-bottom: 3%;
}

.text-content h2 {
  color: #3d3d3d;
  font-size: 40px;
  font-weight: 500;
  font-family: "DIN Next LT Arabic";
  line-height: 52px;
}

.text-content h2 span {
  color: #165e84;
  line-height: 52px;
}

.text-content p {
  color: #4b4b4b;
  font-size: 20px;
  width: 90%;
  margin-bottom: 2%;
  font-weight: 500;
  font-family: "DIN Next LT Arabic";
}

.text-content button {
  padding: 12px;
  background: linear-gradient(45deg, #fe9b4f, #f47e23);
  color: white;
  border: none;
  border-radius: 25px;
  width: 40%;
  cursor: pointer;
  font-size: 20px;
}

.video-slider-component {
  flex: 1;
}

.slider-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.image-container {
  position: relative;
  display: inline-block;
}

.image-thumbnail {
  width: 400px;
  object-fit: cover;
  cursor: pointer;
}

.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.3s ease;
  pointer-events: none;
}

.image-container:hover .video-icon {
  transform: translate(-50%, -50%) scale(1.5);
}

.video-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.3s ease;
  pointer-events: none;
}

.image-container:hover .video-icon {
  transform: translate(-50%, -50%) scale(1.5);
}

.slider-nav {
  color: #165e84;
  cursor: pointer;
  position: absolute;
  z-index: 10;
  background-color: transparent;
  transition: color 0.3s ease;
  border: none;
}
.slider-nav svg {
  width: 50px;
  height: 50px;
}

.slider-nav.left {
  left: 5vw;
}

.slider-nav.right {
  right: 5vw;
}

.slider-nav:hover {
  color: #2178a6;
}

.slider-nav:active {
  color: #fff;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  width: 26vw;
  height: 95vh;
  overflow: hidden;
  position: relative;
}

.popup-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes popupIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.close-button {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 4rem;
  cursor: pointer;
  transition: color 0.3s ease;
  color: #fff;
}

.close-button:hover {
  color: #d9534f;
}
@media (max-width: 850px) {
  .content-slider-container {
    display: block;
  }

  .content-slider-container h1 {
    font-size: 28px;
  }

  .slider-nav.left {
    left: 0;
  }

  .slider-nav.right {
    right: 0;
  }

  .popup-content {
    width: 95%;
    height: auto;
  }

  .popup-video {
    height: calc(100vw * (16 / 9));
    width: 100%;
  }

  .carousel-track {
    justify-content: center;
  }

  .item {
    transform: none !important;
    opacity: 1 !important;
  }

  img {
    width: 80%;
    height: auto;
  }
  .text-content h1,
  .text-content p,
  .text-content h2,
  .text-content button {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    width: 100%;
  }
  .content-slider-container p {
    font-size: 19px;
  }
  .content-slider-container button {
    padding-right: 0;
    padding-left: 0;
    text-align: center;
    width: 60%;
    margin: 0 auto;
    display: block;
  }
}

/* Section 4 style */
.kids-sec4 {
  background-color: #fff;
  direction: ltr;
  text-align: center;
  color: #808080;
  padding: 2em 2em 8em 2em;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}

/* Large desktop */
.kids-sec4 h3 {
  font-size: 30px;
  line-height: 35px;
}

.kids-sec4 h2 {
  font-size: 42px;
  line-height: 45px;
}

.kids-sec4 p {
  font-size: 20px;
  line-height: 29px;
  padding: 0 12%;
}

/* Laptop view */
@media (max-width: 1440px) {
  .kids-sec4 {
    padding: 3rem 2rem;
  }

  .kids-sec4 h2 {
    font-size: 26px;
    line-height: 30px;
  }

  .kids-sec4 p {
    font-size: 18px;
    line-height: 26px;
  }
}

/* Tablet view */
@media (max-width: 1280px) {
  .kids-sec4 h2 {
    font-size: 24px;
    line-height: 25px;
  }

  .kids-sec4 p {
    font-size: 18px;
    line-height: 25px;
  }
}

/* Mobile view */
@media (max-width: 768px) {
  .kids-sec4 h3 {
    font-size: 20px;
    line-height: 28px;
  }

  .kids-sec4 h2 {
    font-size: 24px;
    line-height: 32px;
  }

  .kids-sec4 p {
    font-size: 16px;
    line-height: 22px;
  }
}

/* Small mobile view */
@media (max-width: 480px) {
  .kids-sec4 h2 {
    font-size: 20px;
    line-height: 30px;
  }

  .kids-sec4 p {
    font-size: 14px;
    line-height: 20px;
    padding: 0;
  }
}

.kids-sec4-imgs {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3em;
  padding: 0 6%;
}
.kids-sec4-imgs img {
  width: 10%;
}
@media (max-width: 1200px) {
  .kids-sec4-imgs img {
    width: 12%;
  }
}
@media (max-width: 992px) {
  .kids-sec4-imgs img {
    width: 15%;
  }
}
@media (max-width: 768px) {
  .kids-sec4-imgs img {
    width: 20%;
  }
}
@media (max-width: 576px) {
  .kids-sec4-imgs img {
    width: 25%;
  }
}
@media (max-width: 400px) {
  .kids-sec4-imgs img {
    width: 30%;
  }
}

/* Section 5 style */
.kids-sec5 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("@/assets/images/kids/sec3-bg.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 2rem;
}
.kids-sec5 h1 {
  font-size: 2.8rem;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  color: #165e84;
  padding: 2em;
}
.vector-img {
  margin-top: -7em;
}
@media (max-width: 1440px) {
  .vector-img {
    margin-top: -6em;
    width: 150px;
  }
}

@media (max-width: 1280px) and (max-height: 720px) {
  .vector-img {
    margin-top: 6em;
    width: 120px;
  }
}

@media (max-width: 1280px) and (min-height: 1024px) {
  .vector-img {
    margin-top: -13em;
    width: 120px;
  }
}

@media (max-width: 768px) {
  .kids-sec5 {
    height: auto;
    padding: 1rem;
  }
  .kids-sec5 h1 {
    font-size: 2rem;
    padding: 1rem;
  }
  .vector-img {
    margin-top: -4em;
    width: 100px;
  }
}
@media (max-width: 480px) {
  .kids-sec5 h1 {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
  .vector-img {
    margin-top: -2.7em;
    width: 50px;
  }
}

/* Section 7 style */
.kids-sec7 {
  background-color: #fff;
  text-align: center;
  color: #165e84;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  width: 100%;
  position: relative;
  align-items: center;
  overflow: hidden;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  padding: 2em 0;
}
.corner2-img {
  position: absolute;
  top: 0;
  left: 10%;
  width: 8%;
  height: auto;
}
.kids-sec7 h1 {
  font-size: 3em;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  margin: 0.5em;
}
.kids-sec7 p {
  font-size: 1.3em;
  padding: 0 20%;
  padding-bottom: 3%;
}

/* Section 8 style */
.kids-sec8 {
  padding: 1% 2% 0 2%;
  background-color: white;
  height: auto;
  direction: ltr;
}
.kids-sec8-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1em;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  color: #165e84;
}
.kids-sec8-row h4 {
  font-size: 2.5vw;
}
.kids-sec8-row span {
  font-size: 3vw;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.kids-sec8-row p {
  font-size: 1.3rem;
  color: gray;
  max-width: 60%;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .kids-sec8-row {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  .kids-sec8-row h4 {
    width: 40%;
    margin: 0;
    padding-left: 1em;
  }
  .kids-sec8-row p {
    width: 60%;
    margin: 0;
    padding-right: 1em;
  }
}
.adult-swiper {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 1em;
}

.swiper-container {
  width: 100%;
  overflow: hidden;
}

.swiper-slide {
  position: relative;
  padding: 20px;
  text-align: center;
  background: linear-gradient(296.63deg, #f47d21 -0.48%, #ff9d52 100.48%);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  color: #000;
  font-size: 1.2em;
}
.quote-icon {
  position: absolute;
  top: 8%;
  left: 10%;
  transform: translateX(-50%);
  font-size: 2em;
  color: #fff;
  z-index: 10;
}

.swiper-slide p {
  font-family: "DIN Next LT Arabic", sans-serif;
  font-weight: 500;
  padding: 0 0.5rem;
}

.review-stars {
  color: #000;
  font-size: 2.5rem;
}
.review-by {
  margin-top: 15px;
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
  text-decoration: underline;
  text-decoration-color: #ffffff;
  text-decoration-thickness: 2px;
  text-underline-offset: 10px;
  font-family: "DIN Next LT Arabic", sans-serif;
}
/* Mobile styles */
@media (max-width: 768px) {
  .swiper-slide {
    height: 200px;
    font-size: 20px;
  }
  .review-by {
    font-size: 22px;
  }
}

/* Section 9 style */
.kids-sec9 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  color: #4e5354;
  position: relative;
  direction: ltr;
}
.kids-sec9-content {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: auto;
}
.kids-sec9-images img {
  width: 100%;
  height: auto;
  transform: scaleX(-1);
}
.kids-sec9-text {
  padding-left: 1em;
  max-width: 100%;
  text-align: left;
}
.kids-sec9-text h2 {
  font-size: 2rem;
  font-weight: 700;
  max-width: 80%;
  margin-bottom: 1rem;
  text-align: left;
  color: #165e84;
  font-family: "DIN Next LT Arabic-n";
}
.kids-sec9-text .kids-sec9-title {
  font-size: 1.3rem;
  font-weight: 500;
  margin: 1rem 0;
  cursor: pointer;
  color: #6f8286;
  font-family: "DIN Next LT Arabic";
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.kids-sec9-text .kids-sec9-title.active {
  color: #ff6f00;
}
.kids-sec9-text .caret svg path {
  fill: #6f8286;
  transition: fill 0.3s ease;
}
.kids-sec9-text .kids-sec9-title.active .caret svg path {
  fill: #ff6f00;
}
.kids-sec9-text .caret {
  transition: transform 0.3s ease;
}
.kids-sec9-text .kids-sec9-title.active .caret {
  transform: rotate(180deg);
}
.kids-sec9-text p {
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.6;
  text-align: left;
}
@media (min-width: 768px) {
  .kids-sec9-content {
    flex-direction: row;
  }
  .kids-sec9-images img {
    width: 100%;
    margin: 0;
  }
  .kids-sec9-text {
    max-width: 100%;
    text-align: right;
  }
  .kids-sec9-text h2 {
    font-size: 2.4rem;
  }
  .kids-sec9-text .kids-sec9-title {
    font-size: 1.5rem;
  }
  .kids-sec9-text p {
    font-size: 1.2rem;
  }
}
@media (min-width: 1024px) {
  .kids-sec9-content {
    padding: 40px;
  }
  .kids-sec9-text h2 {
    font-size: 2.8rem;
  }
  .kids-sec9-text .kids-sec9-title {
    font-size: 1.6rem;
  }
  .kids-sec9-text p {
    font-size: 1.3rem;
  }
}

/* Section 10 style */
.kids-sec10-space {
  padding: 50px;
  background-color: #fff;
}
.kids-sec10 {
  position: relative;
  width: 100%;
  height: 70vh;
  background-image: url("@/assets/images/kids/sec12.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 25px;
  overflow: hidden;
  transform: scale(0.9);
  direction: ltr;
}
.kids-sec10-inner {
  border-radius: 25px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.kids-sec10-content {
  position: relative;
  z-index: 1;
  color: #fff;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.kids-sec10-content h1 {
  font-size: 3.3rem;
  font-family: "DIN Next LT Arabic-n";
  font-weight: 700;
}
.kids-sec10-content p {
  font-size: 1.5rem;
  max-width: 80%;
  line-height: 1.6;
}
@media (max-width: 1200px) {
  .kids-sec10-content h1 {
    font-size: 2.5rem;
  }
  .kids-sec10-content p {
    font-size: 1.2rem;
    max-width: 90%;
  }
}
@media (max-width: 992px) {
  .kids-sec10 {
    height: 60vh;
  }
  .kids-sec10-content h1 {
    font-size: 2rem;
  }
  .kids-sec10-content p {
    font-size: 1rem;
    max-width: 95%;
  }
}
@media (max-width: 768px) {
  .kids-sec10 {
    height: 50vh;
    padding: 10px;
  }
  .kids-sec10-content h1 {
    font-size: 1.8rem;
  }
  .kids-sec10-content p {
    font-size: 0.9rem;
    max-width: 100%;
  }
}
@media (max-width: 576px) {
  .kids-sec10 {
    height: 40vh;
  }
  .kids-sec10-content h1 {
    font-size: 1.5rem;
  }
  .kids-sec10-content p {
    font-size: 0.8rem;
    max-width: 100%;
  }
}
</style>
