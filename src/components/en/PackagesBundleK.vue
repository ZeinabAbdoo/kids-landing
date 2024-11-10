<template>
  <div class="packages">
    <img
      src="@/assets/images/bundle2-en.png"
      alt="Bundle Image"
      class="bundle-image"
    />
    <div class="packages-text">
      <div class="bundle-info">
        <p class="offer-text">
          A full year, double the duration, for only $1140!
        </p>
      </div>
      <div class="blurred-box">
        <h4>White Friday Deals <span>(For Children)</span></h4>
        <h2><span>Double the time, same price!</span></h2>
        <p>
          Celebrate White Friday! Register now for 6 months of fun learning and
          get 6 extra months free! Our innovative programs make English learning
          exciting for your child.
        </p>
        <h3>
          Don’t miss this special opportunity and enjoy the White Friday offers!
        </h3>
        <button @click="addToCart(prices[36]?.packageId)" id="pg-en-kids">
          Book for your child now!
        </button>
        <button @click="sendMessage" id="kids-wa6-en">
          For shorter durations, contact us!
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
  direction: ltr;
  background-image: url("@/assets/images/kids-en.png");
  background-size: cover;
  background-position: right center;
  font-family: "DIN Next LT Arabic", sans-serif;
  padding: 3% 0;
}

.packages-text {
  width: 60%;
}

.bundle-image {
  z-index: 1;
  width: 30%;
  margin-left: 150px;
}

.bundle-info {
  background-color: #fff8f3;
  border: 1px solid #f47d21;
  border-radius: 20px;
  text-align: center;
  width: 50%;
}

.offer-text {
  color: #f47d21;
  font-size: 20px;
  font-weight: 500;
}

.blurred-box {
  background: rgba(44, 44, 44, 0.548);
  text-align: left;
  margin-left: -100px;
}

.blurred-box h4,
.blurred-box h2,
.blurred-box p,
.blurred-box h3 {
  color: #fff;
  font-weight: 500;
  padding-left: 6%;
  line-height: 0px;
}

.blurred-box h4 {
  padding-top: 2%;
  font-size: 48px;
}

.blurred-box h2 {
  font-size: 48px;
  margin-top: -25px;
}

.blurred-box h4 span {
  background-color: #f47d21;
  border-radius: 20px;
  display: inline-block;
  padding: 0 5px;
  height: 25px;
  line-height: 0px;
}

.blurred-box h2 span {
  color: #f47d21;
}

.blurred-box h3 {
  margin-top: 10px;
  font-size: 32px;
}

.blurred-box p {
  font-size: 20px;
  line-height: 30px;
  width: 75%;
}

button {
  max-width: 50%;
  padding: 0.6rem 2rem 1rem 2rem;
  background: linear-gradient(45deg, #fe9b4f, #f77919);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.3rem;
  margin: 0.5rem 0;
  margin-left: 6%; /* Adjust to LTR layout */
  font-weight: 500;
  transition: background 0.3s ease, transform 0.3s ease;
  font-family: "DIN Next LT Arabic", sans-serif;
}

button:hover {
  background: linear-gradient(45deg, #f47e23, #fe9b4f);
  transform: scale(1.05);
}

#kids-wa5-en {
  background: transparent;
  border: 1px solid #fff;
}

/* Media Queries */
/* 1440px */
@media (max-width: 1440px) {
  .packages-text {
    width: 65%;
  }

  .bundle-image {
    margin-left: 140px;
  }

  .blurred-box h4,
  .blurred-box h2,
  .blurred-box p,
  .blurred-box h3 {
    line-height: 0px;
  }

  .blurred-box h4 {
    font-size: 38px;
  }

  .blurred-box h2 {
    font-size: 44px;
  }

  .blurred-box h3 {
    margin-top: 5px;
    font-size: 27px;
  }

  .blurred-box p {
    font-size: 18px;
    width: 75%;
    line-height: 24px;
  }
}

/* 1280px */
@media (max-width: 1280px) {
  .packages-text {
    width: 55%;
  }

  .bundle-image {
    margin-left: 180px;
    width: 30%;
  }

  .bundle-info {
    width: 60%;
  }

  .blurred-box h4,
  .blurred-box h2,
  .blurred-box p,
  .blurred-box h3 {
    line-height: 0px;
  }

  .blurred-box h4 {
    font-size: 35px;
  }

  .blurred-box h2 {
    font-size: 40px;
  }

  .blurred-box h3 {
    margin-top: 5px;
    font-size: 25px;
  }

  .blurred-box p {
    font-size: 18px;
    width: 80%;
    line-height: 24px;
  }

  button {
    font-size: 18px;
  }
}

/* 1020px */
@media (max-width: 1024px) {
  .packages-text {
    width: 65%;
  }

  .bundle-image {
    margin-left: 100px;
    width: 28%;
  }

  .blurred-box h4 {
    font-size: 34px;
  }

  .blurred-box h2 {
    font-size: 40px;
  }

  .blurred-box h3 {
    font-size: 24px;
  }

  .blurred-box p {
    font-size: 18px;
    width: 90%;
  }

  button {
    max-width: 60%;
  }
}

/* 768px */
@media (max-width: 769px) {
  .packages-text {
    width: 65%;
  }

  .bundle-info {
    width: 80%;
    margin: 0px;
  }

  .blurred-box h4,
  .blurred-box h2,
  .blurred-box p,
  .blurred-box h3 {
    line-height: 0px;
  }

  .offer-text {
    font-size: 18px;
  }

  .bundle-image {
    margin-left: 20px;
    width: 28%;
  }

  .blurred-box h4 {
    font-size: 26px;
  }

  .blurred-box h2 {
    font-size: 31px;
  }

  .blurred-box h3 {
    font-size: 20px;
  }

  .blurred-box p {
    font-size: 16px;
    width: 90%;
    line-height: 18px;
  }

  button {
    max-width: 60%;
    font-size: 14px;
  }
}

/* 440px */
@media (max-width: 440px) {
  .bundle-image {
    display: none;
  }

  .packages {
    background: url("@/assets/images/kids2.png"),
      linear-gradient(180deg, rgba(64, 64, 64, 0) 30%, #1e1e1e 100%);
    min-height: 140vh;
    background-size: cover;
    background-position: center;
  }

  .packages-text {
    width: 100%;
    text-align: center;
  }
  .bundle-info {
    margin: 0 auto;
    margin-top: -200px;
  }

  .blurred-box {
    background: transparent;
    text-align: center;
    margin-left: 0;
  }
  .blurred-box h4,
  .blurred-box h2,
  .blurred-box h3 {
    line-height: 30px;
  }

  .offer-text {
    font-size: 19px;
  }

  .blurred-box h4 {
    font-size: 28px;
  }

  .blurred-box h4 span {
    margin-bottom: -25px;
  }

  .blurred-box h2 {
    font-size: 28px;
  }

  .blurred-box h3 {
    font-size: 23px;
    margin-bottom: -5px;
  }

  .blurred-box p {
    font-size: 18px;
    width: 90%;
    line-height: 25px;
  }

  button {
    max-width: 100%;
    font-size: 19px;
    margin-bottom: 0;
  }
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