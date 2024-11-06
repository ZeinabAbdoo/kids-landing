<template>
  <div class="packages">
    <div class="kids-sec8-row">
      <h4>
        مرحلة التأسيس وإطلاق العنان<br />
        لمستقبل مشرق مع مونجلش
      </h4>
      <p>
        نفخر بتبنينا لأحدث الأساليب وأكثرها تأثيراً في تأسيس اللغة - منهج
        المعايشة. هذه الطريقة الفريدة والحصرية لدينا تُعد مفتاحنا لتحقيق نتائج
        استثنائية ومميزة، مما يضمن تجربة تعليمية غنية وعميقة لجميع متعلمينا.
      </p>
    </div>

    <!-- Package Duration Selection -->
    <div class="packages-menu-n" v-if="selectedFilter === 'kids'">
      <ul>
        <li
          @click="selectMenu('two-months')"
          :class="{ selected: selectedMenu === 'two-months' }"
        >
          شهرين
        </li>
        <li
          @click="selectMenu('four-months')"
          :class="{ selected: selectedMenu === 'four-months' }"
        >
          4 أشهر
        </li>
        <li
          @click="selectMenu('six-months')"
          :class="{ selected: selectedMenu === 'six-months' }"
        >
          6 أشهر
        </li>
      </ul>
    </div>

    <!-- Kids Packages -->
    <div v-if="selectedFilter === 'kids'">
      <div class="packages-cards" v-if="selectedMenu === 'two-months'">
        <!-- Two Months Cards -->
        <div class="package-card">
          <img src="@/assets/images/foundation/plus.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (شهرين) </span>
              <br />
              المعايشة بلس
            </h3>
          </div>

          <div class="card-body">
            <p>
              "المعايشة بلس" هي باقتك المثالية، تقدم أقصى قيمة مقابل السعر
              بميزات فريدة وخدمة شاملة تضمن راحتك.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(19) }}
              </div>
              <div class="after-price">{{ prices[19]?.price }}</div>
            </h2>

            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>
                نادى الكتــــــــــــــــــــابة:<span> مرة أسبوعياً</span>
              </li>
              <li>نادى الصوتــــــــــيات:<span> بترشيح المعلم</span></li>
              <li>نادى المـــــــــواهب:<span> مرة أسبوعياً</span></li>
              <li>نادى الرســـــــــــــــــــم:<span> مرة أسبوعياً</span></li>
              <li>لقاء تربوي مع ولي الأمر: <span> مرة شهرياً</span></li>
              <li>نادى لايف كوتش:<span> جلسة مجانية</span></li>
              <li>إجتماع شهري لأولياء الأمور</li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[19]?.packageId)">شراء</button>
          </div>
        </div>
        <div class="package-card">
          <img src="@/assets/images/foundation/immerse.png" class="card-img" />
          <div class="card-header">
            <h3><span> (شهرين)</span> <br />المعايشة</h3>
          </div>
          <div class="card-body">
            <p>
              باقة “المعيشة” توفر العديد من الميزات وهي الخيار المعتاد لعملائنا،
              تضمن الراحة والخدمات المتميزة بكفاءة.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(18) }}
              </div>
              <div class="after-price">{{ prices[18]?.price }}</div>
            </h2>

            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[18]?.packageId)">شراء</button>
          </div>
        </div>
        <div class="package-card">
          <img src="@/assets/images/foundation/standard.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (شهرين)</span>
              <br />
              أساسية
            </h3>
          </div>
          <div class="card-body">
            <p>
              باقة مونجلش الأساسية هي الأقل سعراً، ولكنها تحتوي على بعض ميزات
              دوراتنا التي توفر تجربة تعليمية مميزة.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(17) }}
              </div>
              <div class="after-price">{{ prices[17]?.price }}</div>
            </h2>

            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[17]?.packageId)">شراء</button>
          </div>
        </div>
      </div>

      <div class="packages-cards" v-else-if="selectedMenu === 'four-months'">
        <!-- Four Months Cards -->
        <div class="package-card">
          <img src="@/assets/images/foundation/plus.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (4 شهور)</span>
              <br />
              المعايشة بلس
            </h3>
          </div>
          <div class="card-body">
            <p>
              “المعيشة بلس” هي باقتك المثالية، تقدم أقصى قيمة مقابل السعر بميزات
              فريدة وخدمة شاملة تضمن راحتك.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
150              </div>
              <div class="after-price">300 دولار</div>
              <span class="sloped-line">400 دولار</span>
            </h2>
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى المـــــــــواهب:<span>مرة أسبوعياً</span></li>
              <li>نادى الرســـــــــــــــــــم:<span>مرة أسبوعياً</span></li>
              <li>لقاء تربوي مع ولي الأمر:<span> مرة شهرياً</span></li>
              <li>نادى الصوتــــــــــيات:<span> بترشيح المعلم</span></li>
              <li>
                نادى الكتــــــــــــــــــــابة:<span>مرة أسبوعياً</span>
              </li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>إجتماع شهري لأولياء الأمور</li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[22]?.packageId)">شراء</button>
          </div>
        </div>

        <div class="package-card">
          <img src="@/assets/images/foundation/immerse.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (4 شهور)</span>
              <br />
              المعايشة
            </h3>
          </div>
          <div class="card-body">
            <p>
              باقة “المعيشة” توفر العديد من الميزات وهي الخيار المعتاد لعملائنا،
              تضمن الراحة والخدمات المتميزة بكفاءة.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(21) }}
              </div>
              <div class="after-price">{{ prices[21]?.price }}</div>
              <span class="sloped-line">{{ prices[21]?.beforePrice }}</span>
            </h2>
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[21]?.packageId)">شراء</button>
          </div>
        </div>

        <div class="package-card">
          <img src="@/assets/images/foundation/standard.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (4 شهور)</span>
              <br />
              أساسية
            </h3>
          </div>
          <div class="card-body">
            <p>
              باقة مونجلش الأساسية هي الأقل سعراً، ولكنها تحتوي على بعض ميزات
              دوراتنا التي توفر تجربة تعليمية مميزة.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(20) }}
              </div>
              <div class="after-price">{{ prices[20]?.price }}</div>
            </h2>

            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة شهرياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[20]?.packageId)">شراء</button>
          </div>
        </div>
      </div>

      <div class="packages-cards" v-else-if="selectedMenu === 'six-months'">
        <!-- Six Months Cards -->
        <div class="package-card">
          <img src="@/assets/images/foundation/plus.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (6 اشهر)</span>
              <br />
              المعايشة بلس
            </h3>
          </div>
          <div class="card-body">
            <p>
              “المعيشة بلس” هي باقتك المثالية، تقدم أقصى قيمة مقابل السعر بميزات
              فريدة وخدمة شاملة تضمن راحتك.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(24) }}
              </div>
              <div class="after-price">{{ prices[24]?.price }}</div>
              <span class="sloped-line">{{ prices[24]?.beforePrice }}</span>
            </h2>
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>
                نادى الكتــــــــــــــــــــابة:<span>مرة أسبوعياً</span>
              </li>
              <li>نادى الصوتــــــــــيات:<span> بترشيح المعلم</span></li>
              <li>نادى المـــــــــواهب:<span>مرة أسبوعياً</span></li>
              <li>نادى الرســـــــــــــــــــم:<span>مرة أسبوعياً</span></li>
              <li>لقاء تربوي مع ولي الأمر:<span> مرة شهرياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[24]?.packageId)">شراء</button>
          </div>
        </div>

        <div class="package-card">
          <img src="@/assets/images/foundation/immerse.png" class="card-img" />
          <div class="card-header">
            <h3>
              <span> (6 اشهر)</span>
              <br />
              المعايشة
            </h3>
          </div>
          <div class="card-body">
            <p>
              باقة “المعيشة” توفر العديد من الميزات وهي الخيار المعتاد لعملائنا،
              تضمن الراحة والخدمات المتميزة بكفاءة.
            </p>
            <h2>
              <div class="one-level">
                ســعر المســـــتوي
                <br />
                الواحد
                {{ pricePerPeriod(23) }}
              </div>
              <div class="after-price">{{ prices[23]?.price }}</div>
              <span class="sloped-line">{{ prices[23]?.beforePrice }}</span>
            </h2>
            <h6>واستمتع بالاتي:</h6>
            <ul>
              <li>حصص أســـــــاسية:<span> 8 شهرياً</span></li>
              <li>نادى القـــــــــــــــــراءة:<span> مرة أسبوعياً</span></li>
              <li>نادى الســــــــــــــينما:<span>مرة أسبوعياً</span></li>
              <li>نادى المــــــــــــحادثة:<span> يومياً</span></li>
              <li>نادى المـــــــناظرات:<span> مرة شهرياً</span></li>
              <li>نادى لايف كوتش:<span>جلسة مجانية</span></li>
              <li>تقاريــــــر شهريـــــــــــة مفصلة لمستوى اللغة</li>
            </ul>
            <button @click="addToCart(prices[23]?.packageId)">شراء</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selectedFilter: "kids",
      selectedMenu: "two-months",
      prices: {},
    };
  },
  methods: {
    toggleFilter(event) {
      this.selectedFilter = event.target.checked ? "kids" : "kids";
      if (this.selectedFilter === "kids") {
        this.selectedMenu = "two-months";
      } else {
        this.selectedMenu = "two-months";
      }
    },
    selectMenu(menu) {
      this.selectedMenu = menu;
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
        const price = parseFloat(priceData.price.split(' ')[0]); // Extract the numeric part of price
        const period = parseFloat(priceData.packagePeriod);
        if (period !== 0) {
          return price / period; // Return price per period
        }
      }
      return null;
    };
  },
},
};
</script>

<style scoped>
.packages {
  margin-top: -50px;
  direction: rtl;
}
.packages-filter-switch {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}

.label-out {
  position: absolute;
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 20px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 120px;
  height: 45px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-radius: 34px;
  cursor: pointer;
  transition: background-color 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 35px;
  width: 35px;
  left: 5px;
  bottom: 5px;
  background-color: orange;
  border-radius: 50%;
  transition: transform 0.4s;
}

input:checked + .slider:before {
  transform: translateX(75px);
}

input:checked ~ .slider .label-left {
  opacity: 1;
}

input:checked ~ .slider .label-right {
  opacity: 0;
}

input:not(:checked) ~ .slider .label-left {
  opacity: 0;
}

input:not(:checked) ~ .slider .label-right {
  opacity: 1;
}

.label {
  position: absolute;
  font-size: 20px;
  font-weight: bold;
  color: orange;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.label-left {
  left: 15px;
}

.label-right {
  right: 15px;
}

.packages {
  background-image: url("@/assets/images/foundation.png");
  background-size: cover;
  background-position: center;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  padding: 50px 0 110px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
}
.packages-title-n {
  text-align: center;
  color: white;
  margin-bottom: 40px;
  padding-top: 50px;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.packages-title-n h3 {
  font-size: 2.5rem;
  line-height: 100%;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.packages-title-n h1 {
  font-size: 3rem;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.packages-menu-n {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.packages-menu-n ul {
  list-style: none;
  padding: 10px;
  display: flex;
  border-bottom: 1px solid black;
}
.packages-menu-n li {
  margin: 0 20px;
  color: #808080;
  cursor: pointer;
  position: relative;
}
.packages-menu-n li:hover,
.packages-menu li:focus,
.packages-menu li:active,
.packages-menu li.selected {
  color: #ffa500;
}
.packages-menu-n li.selected::after {
  content: "";
  display: inline-block;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.2793 2.82026L4.10131 7.99818L9.2793 13.1761L7.22864 15.2268L-8.29697e-05 7.99818L7.22864 0.769531L9.2793 2.82026Z" fill="orange"/><path d="M13.9493 15.2268L6.72069 7.99818L13.9493 0.769531L16 2.82026L10.8221 7.99818L16 13.1761L13.9493 15.2268Z" fill="orange"/></svg>');
  width: 16px;
  height: 16px;
  position: absolute;
  right: -25px;
  top: 50%;
  transform: translateY(-50%);
}
.packages-menu-n li.selected::before {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background-color: #ffa500;
  position: absolute;
  bottom: -10px;
  left: 0;
}
.packages-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 120px;
}
.card-header h3 {
  color: #000000;
  font-size: 27px;
  margin-top: 50px;
  margin-bottom: -25px;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.card-header h3 span {
  color: #175f87;
  font-size: 24px;
}
.card-header .badge {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-right: 160px solid transparent;
  border-top: 160px solid #ff8901;
  margin-top: -0.5px;
  border-radius: 20px 0 0 0;
}
.card-header .badge span {
  position: absolute;
  left: 15px;
  top: -150px;
  transform: rotate(-45deg);
  white-space: nowrap;
  font-size: 20px;
  color: #fff;
}
.card-header .badge bold {
  font-size: 32px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.card-body p {
  color: #666;
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 13px;
}
.card-body h6 {
  font-weight: 900;
  color: #000000;
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 5px;
}
.card-body ul {
  list-style: none;
  padding: 0;
}
.card-body li {
  position: relative;
  padding-right: 20px;
  margin-bottom: 10px;
  color: #666;
  border-bottom: 1px solid #e9e9e9;
  padding-bottom: 5px;
}
.card-body li span {
  color: #f47e23;
}
.card-body li::before {
  content: "✓";
  position: absolute;
  right: 0;
  color: #f48026;
  font-weight: bold;
}
.card-body li:last-child {
  border-bottom: none;
  margin-bottom: 0;
}
.card-body button {
  width: 100%;
  padding: 10px;
  background: linear-gradient(45deg, #fe9b4f, #f47e23);
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 10px;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
  font-size: larger;
}

@media (max-width: 800px) {
  .packages-title-n h3 {
    font-size: 1.5rem;
  }
  .packages-title-n h1 {
    font-size: 2rem;
  }
}
.card-body h2 {
  color: #f47d21;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 25px;
  margin-top: -15px;
  background-color: #eaeaea66;
  padding: 0 0.3em 0.2em 0;
  border-radius: 10px;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
}

.one-level {
  border: 1px solid #f47d21;
  border-radius: 20px;
  font-size: 15px;
  background-color: #fff;
  padding: 5px 8px 7px 0px;
  margin-top: 5px;
  width: 31%;
}
.after-price {
  margin: 0 1%;
}
.sloped-line {
  position: relative;
  display: inline-block;
  color: #165e84;
  font-size: 24px;
  opacity: 0.7;
}

.sloped-line::after {
  content: "";
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #ff4646;
  transform: rotate(-15deg);
  transform-origin: left center;
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
  font-size: 40px;
  font-family: "DIN Next LT Arabic";
  font-weight: 500;
}
.kids-sec8-row p {
  font-size: 1.3rem;
  color: gray;
  max-width: 75%;
  margin: 0 auto;
}
@media (min-width: 769px) {
  .kids-sec8-row {
    flex-direction: row;
    justify-content: center;
    text-align: right;
  }
  .kids-sec8-row h4 {
    width: 30%;
    margin: 0;
    padding-right: 1%;
  }
  .kids-sec8-row p {
    width: 65%;
    margin: 0;
    padding-left: 2%;
  }
}
@media (max-width: 768px) {
  .kids-sec8-row {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .kids-sec8-row h4 {
    width: 100%;
    margin: 0;
    font-size: 1.5em;
  }
  .kids-sec8-row p {
    width: 100%;
    margin: 0;
    font-size: 1em;
  }
}

.package-card {
  background: #fff;
  border-radius: 30px;
  padding: 20px;
  width: 100%;
  max-width: 320px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
}
.card-img {
  position: absolute;
  top: -13%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
}
@media (max-width: 768px) {
.card-img {
  width: 85%;
  margin-top: 13%;
}
}
</style>
