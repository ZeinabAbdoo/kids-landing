<template>
  <div class="packages">
    <img src="@/assets/images/bundle1.png" alt="Bundle Image" class="bundle-image" />
    <div class="packages-text">
      <div class="bundle-info">
        <p class="offer-text">سنة كاملة ضعف المدة بسعر 1140 دولار فقط!</p>
      </div>
      <div class="blurred-box">
        <h2>اغتنم عروض الجمعة البيضاء <span>(لمرحلة التأسيس)</span></h2>
        <h1>احصل على <span>ضعف المدة بنفس السعر!</span></h1>
        <p>
          احتفالًا بمناسبة الجمعة البيضاء، نقدم لك فرصة استثنائية لتأسيس طفلك
          الصغير في اللغة الإنجليزية! سجّل الآن واحصل على 6 أشهر من التعليم
          الممتع، واحصل على 6 أشهر إضافية مجانًا! مع برامجنا المبتكرة والمصممة
          خصيصًا للأطفال الأصغر عمرًا، سيتحول تعلم اللغة الإنجليزية إلى تجربة
          تأسيسية مثيرة وملهمة لطفلك.
        </p>
        <h3>لا تفوت هذه الفرصة المميزة واستمتع بعروض الجمعة البيضاء!</h3>
        <button @click="addToCart(prices[35]?.packageId)">
          احجز لطفلك الآن!
        </button>
        <button @click="sendMessage" id="kids-wa5-ar">
          لمعرفة الأسعار للمدد الأقل، تواصل معنا!
          <i class="fab fa-whatsapp"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.packages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  direction: rtl;
  background-image: url("@/assets/images/foundation.png");
  background-size: cover;
  background-position: center;
  font-family: "DIN Next LT Arabic", sans-serif;
  padding: 2% 0;
}

.bundle-image {
  border-radius: 10px;
}

.bundle-info {
  background-color: #fff8f3;
  border: 2px solid #f47d21;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 20px;
  width: 50%;
}

.offer-text {
  color: #f47d21;
  font-size: 20px;
  font-weight: 500;
}

.blurred-box {
  background: rgba(44, 44, 44, 0.548);
  text-align: center;
  width: 100%;
}

.blurred-box h2,
.blurred-box h1,
.blurred-box p,
.blurred-box h3 {
  color: #fff;
  font-weight: 500;
}

.blurred-box h2 span,
.blurred-box h1 span {
  color: #f47d21;
}

.blurred-box h3 {
  margin-top: 10px;
}

button {
  max-width: 50%;
  padding: 0.4rem 1.2rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.2rem;
  margin: 1rem;
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

#kids-wa5-ar {
  background: transparent;
  border: 1px solid #fff;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prices: {},
    };
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
    fetchPackagePrices() {
      let url = sessionStorage.getItem("userInfo")
        ? "/api/user/get-course-packages"
        : "/api/session/get-course-packages";
      const userInfo = sessionStorage.getItem("userInfo");
      let headers = {};
      if (userInfo) {
        try {
          const parsedUserInfo = JSON.parse(userInfo);
          const token = parsedUserInfo.token;
          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
          }
        } catch (error) {
          console.error("Error parsing userInfo from sessionStorage:", error);
        }
      }
      axios
        .get(url, { headers })
        .then((response) => {
          const data = response.data;
          console.log("Full API response:", data);
          this.prices = {};

          if (data.success) {
            const packages = data.data;
            packages.forEach((packageData) => {
              console.log("Package Data:", packageData);

              const packageId = packageData.id;
              const packagePrice = packageData.packagePrice;
              const beforePrice = packageData.packageBeforePrice;
              const currency = packageData.currency_en;
              const packagePeriod = packageData.packagePeriod;

              console.log("beforePrice:", beforePrice);
              this.prices[packageId] = {
                price: `${packagePrice} ${currency}`,
                beforePrice: beforePrice ? `${beforePrice} ${currency}` : null,
                packagePeriod: packagePeriod,
                packageId: packageId,
              };
            });
          }
        })
        .catch((error) =>
          console.error("Error fetching package details:", error)
        );
    },
    addToCart(packageId) {
      let url = sessionStorage.getItem("userInfo")
        ? "/api/user/cart"
        : "/api/session/cart";
      const userInfo = sessionStorage.getItem("userInfo");
      let headers = {};
      if (userInfo) {
        try {
          const parsedUserInfo = JSON.parse(userInfo);
          const token = parsedUserInfo.token;

          if (token) {
            headers["Authorization"] = `Bearer ${token}`;
            headers["Content-type"] = "application/json";
          }
        } catch (error) {
          console.error("Error parsing userInfo from sessionStorage:", error);
        }
      }
      axios
        .post(
          url,
          {
            course_package_id: packageId,
            quantity: 1,
          },
          { headers }
        )
        .then((response) => {
          console.log("Item added to cart successfully:", response.data);
          this.$router.push({ name: "CartAr" }).then(() => {
            window.location.reload();
          });
        })
        .catch((error) => {
          console.error(
            "Error adding item to cart:",
            error.response ? error.response.data : error.message
          );
        });
    },
  },
  mounted() {
    this.fetchPackagePrices();
  },
  computed: {
    pricePerPeriod() {
      return (packageId) => {
        const priceData = this.prices[packageId];
        if (priceData && priceData.price && priceData.packagePeriod) {
          const price = parseFloat(priceData.price.split(" ")[0]);
          const period = parseFloat(priceData.packagePeriod);
          if (period !== 0) {
            return price / period;
          }
        }
        return null;
      };
    },
  },
};
</script>