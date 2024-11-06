<template>
  <div class="packages">
    <div class="packages-title-n">
      <h3>Pricing List</h3>
      <h1>Masterful Learning, Smart Investment</h1>
    </div>

    <!-- Package Duration Selection (Only for kids) -->
    <div class="packages-menu-n" v-if="selectedFilter === 'kids'">
      <ul>
        <li @click="selectMenu('two-months')" :class="{ selected: selectedMenu === 'two-months' }">2 Months</li>
        <li @click="selectMenu('four-months')" :class="{ selected: selectedMenu === 'four-months' }">4 Months</li>
        <li @click="selectMenu('six-months')" :class="{ selected: selectedMenu === 'six-months' }">6 Months</li>
      </ul>
    </div>

    <!-- kids Packages -->
    <div class="packages-cards" v-if="selectedFilter === 'kids'">
      <div class="packages-cards"  v-if="selectedMenu === 'two-months'">
        <!-- Two Months Cards -->
        <div class="package-card">
          <div class="card-header">
             <h3>
                <span> (2 months) </span>
                <br>
                Immersion Plus
             </h3>
          </div>

          <div class="card-body">
            <p>The "Immersion Plus" package offers the highest value with exceptional benefits and comprehensive learning support to enhance your language learning experience.</p>
            <h2>{{ prices[3]?.price }}</h2>
            
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Movie Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Phonetics Club<span>teacher's recommendation</span></li>
              <li>Live Coaching Club<span>Free session</span></li>
              <li>Speak with Foreigners<span>Twice a month</span></li>
              <li>Monthly meeting with trainees</li>
              <li>Detailed monthly language level reports</li>
            </ul>
            <button @click="addToCart(prices[3]?.packageId)">Buy</button>
          </div>
        </div>
        <div class="package-card">
          <div class="card-header">
            <h3><span> (2 months)</span>
            <br>Immersion</h3>
          </div>
          <div class="card-body">
          <p>The "Immersion" package offers numerous features and is the standard choice for our customers, ensuring comfort and excellent services with efficiency.</p>
            <h2>{{ prices[2]?.price }}</h2>
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Movie Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Detailed monthly language level reports</li>
            </ul>
            <button @click="addToCart(prices[2]?.packageId)">Buy</button>
          </div>
        </div>
        <div class="package-card">
          <div class="card-header">
            <h3><span> (2 months)</span>
            <br>
            Basic</h3>
          </div>
          <div class="card-body">
            <p>The Monglish Basic package is the most affordable, yet it includes some of our key features that provide a distinguished learning experience.</p>
            <h2>{{ prices[1]?.price }}</h2>
            
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Detailed monthly language level reports</li>
            </ul>
            <button @click="addToCart(prices[1]?.packageId)">Buy</button>
          </div>
        </div>
      </div>

      <div class="packages-cards" v-else-if="selectedMenu === 'four-months'">
        <!-- Four Months Cards -->
        <div class="package-card">
          <div class="card-header">
            <h3>
              <span> (4 months)</span>
              <br>
              Immersion Plus</h3>
          </div>
          <div class="card-body">
            <p>The "Immersion Plus" package offers the highest value with exceptional benefits and comprehensive learning support to enhance your language learning experience.</p>
            <h2>
              {{ prices[6]?.price }}
              <span class="sloped-line">{{ prices[6]?.beforePrice }}</span> 
            </h2>
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Movie Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Phonetics Club<span>teacher's recommendation</span></li>
              <li>Live Coaching Club<span>Free session</span></li>
              <li>Speak with Foreigners<span>Twice a month</span></li>
              <li>Monthly meeting with trainees</li>
              <li>Detailed monthly language level reports</li>
            </ul>
            <button @click="addToCart(prices[6]?.packageId)">Buy</button>
          </div>
        </div>

        <div class="package-card">
          <div class="card-header">
            <h3>
              <span> (4 months)</span>
              <br>
              Immersion</h3>
          </div>
          <div class="card-body">
          <p>The "Immersion" package offers numerous features and is the standard choice for our customers, ensuring comfort and excellent services with efficiency.</p>
            <h2>
              {{ prices[5]?.price }}
              <span class="sloped-line">{{ prices[5]?.beforePrice }}</span> 
            </h2>
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Movie Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Detailed monthly language level reports</li>
            </ul>
            <button @click="addToCart(prices[5]?.packageId)">Buy</button>
          </div>
        </div>

        <div class="package-card">
          <div class="card-header">
            <h3>
              <span> (4 months)</span>
              <br>
              Basic</h3>
          </div>
          <div class="card-body">
            <p>The Monglish Basic package is the most affordable, yet it includes some of our key features that provide a distinguished learning experience.</p>
            <h2>{{ prices[4]?.price }}</h2>
          
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Detailed monthly language level reports</li>
            </ul>
            <button @click="addToCart(prices[4]?.packageId)">Buy</button>
          </div>
        </div>
      </div>

      <div class="packages-cards" v-else-if="selectedMenu === 'six-months'">
      <!-- Six Months Cards -->      
      <div class="package-card">
        <div class="card-header">
            <h3>
              <span> (6 months)</span>
              <br>
              Immersion Plus</h3>
             <p class="badge"><span>الأفضل <br><bold>قيمة</bold></span></p>
          </div>
        <div class="card-body">
            <p>The "Immersion Plus" package offers the highest value with exceptional benefits and comprehensive learning support to enhance your language learning experience.</p>
          <h2>
              {{ prices[10]?.price }}
              <span class="sloped-line">{{ prices[10]?.beforePrice }}</span> 
            </h2>
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Movie Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Phonetics Club<span>teacher's recommendation</span></li>
              <li>Live Coaching Club<span>Free session</span></li>
              <li>Speak with Foreigners<span>Twice a month</span></li>
              <li>Monthly meeting with trainees</li>
              <li>Detailed monthly language level reports</li>
            </ul>
          <button @click="addToCart(prices[10]?.packageId)">Buy</button>
        </div>
      </div>
      <div class="package-card">
        <div class="card-header">
            <h3>
              <span> (6 months)</span>
              <br>
              Immersion</h3>
             <p class="badge"><span>الأفضل <br><bold>مبيعاً</bold></span></p>
        </div>
        <div class="card-body">
          <p>The "Immersion" package offers numerous features and is the standard choice for our customers, ensuring comfort and excellent services with efficiency.</p>
          <h2>
              {{ prices[9]?.price }}
              <span class="sloped-line">{{ prices[9]?.beforePrice }}</span> 
            </h2>
            <h6>Enjoy the following:</h6>
            <ul>
              <li>Basic Sessions<span>8 sessions per month</span></li>
              <li>Reading Club<span>Once a week</span></li>
              <li>Movie Club<span>Once a week</span></li>
              <li>Speaking Club<span> Daily</span></li>
              <li>Debate Club<span>Once a month</span></li>
              <li>Detailed monthly language level reports</li>
            </ul>
          <button @click="addToCart(prices[9]?.packageId)">Buy</button>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        selectedFilter: 'kids',
        selectedMenu: 'two-months',
        prices: {},
      };
    },
    methods: {
      toggleFilter(event) {
        this.selectedFilter = event.target.checked ? 'kids' : 'kids';
        if (this.selectedFilter === 'kids') {
          this.selectedMenu = 'two-months';
        } else {
          this.selectedMenu = 'two-months';
        }
      },
      selectMenu(menu) {
        this.selectedMenu = menu;
      },
      fetchPackagePrices() {
        let url = sessionStorage.getItem('userInfo') ? '/api/user/get-course-packages' : '/api/session/get-course-packages';
        const userInfo = sessionStorage.getItem('userInfo');
        let headers = {};
        if (userInfo) {
          try {
            const parsedUserInfo = JSON.parse(userInfo);
            const token = parsedUserInfo.token;
            if (token) {
              headers['Authorization'] = `Bearer ${token}`;
            }
          } catch (error) {
            console.error('Error parsing userInfo from sessionStorage:', error);
          }
        }
        axios.get(url, { headers })
        .then(response => {
          const data = response.data;
          console.log('Full API response:', data); 
          this.prices = {};

          if (data.success) {
            const packages = data.data;
            packages.forEach((packageData) => {
              console.log('Package Data:', packageData); 

              const packageId = packageData.id;
              const packagePrice = packageData.packagePrice;
              const beforePrice = packageData.packageBeforePrice;
              const currency = packageData.currency_en;

              console.log('beforePrice:', beforePrice); 
              this.prices[packageId] = {
                price: `${packagePrice} ${currency}`,
                beforePrice: beforePrice ? `${beforePrice} ${currency}` : null,
                packageId: packageId
              };
            });
          }
        })
        .catch(error => console.error('Error fetching package details:', error));

      },
      addToCart(packageId) {
        let url = sessionStorage.getItem('userInfo') ? '/api/user/cart' : '/api/session/cart';
        const userInfo = sessionStorage.getItem('userInfo');
        let headers = {};
        if (userInfo) {
          try {
            const parsedUserInfo = JSON.parse(userInfo);
            const token = parsedUserInfo.token;

            if (token) {
              headers['Authorization'] = `Bearer ${token}`;
              headers['Content-type'] = 'application/json';
            }
          } catch (error) {
            console.error('Error parsing userInfo from sessionStorage:', error);
          }
        }
        axios.post(url, {
          course_package_id: packageId,
          quantity: 1 
        }, { headers })
        .then(response => {
          console.log('Item added to cart successfully:', response.data);
          this.$router.push({ name: 'CartAr' }).then(() => {
              window.location.reload();
          });
        })
        .catch(error => {
          console.error('Error adding item to cart:', error.response ? error.response.data : error.message);
        });
      }
    },
    mounted() {
      this.fetchPackagePrices();
    },
  };
</script>

<style scoped>
.packages{
  direction: ltr;
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
    background-image: url('@/assets/images/bg.jpg');
    background-size: cover;
    background-position: center;
    font-family: 'DIN Next LT Arabic', sans-serif;
    padding: 50px 0;
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
}
.packages-title-n h3 {
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 100%;
}
.packages-title-n h1 {
    font-size: 3rem;
    font-weight: 500;
}
.packages-menu-n {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 1.5rem;
}
.packages-menu-n ul {
    list-style: none;
    padding: 10px;
    display: flex;
    border-bottom: 1px solid black;
}
.packages-menu-n li {
    margin: 0 20px;
    color: white;
    cursor: pointer;
    position: relative;
}
.packages-menu-n li:hover, .packages-menu li:focus, .packages-menu li:active, .packages-menu li.selected {
    color: #ffa500;
}
.packages-menu-n li.selected::after {
  content: '';
  display: inline-block;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9.2793 2.82026L4.10131 7.99818L9.2793 13.1761L7.22864 15.2268L-8.29697e-05 7.99818L7.22864 0.769531L9.2793 2.82026Z" fill="white"/><path d="M13.9493 15.2268L6.72069 7.99818L13.9493 0.769531L16 2.82026L10.8221 7.99818L16 13.1761L13.9493 15.2268Z" fill="white"/></svg>');
  background-repeat: no-repeat;
  background-size: contain;
  transform: scaleX(-1); /* Flip horizontally */  width: 16px;
  height: 16px;
  position: absolute;
  left: -25px; 
  top: 50%;
}
.packages-menu-n li.selected::before {
  content: '';
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
}
.card-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}
.card-header h3{
    color: #000000;
    font-size: 27px;
    margin-top: 50px;
    margin-bottom: -25px;
}
.card-header h3 span{
    color: #175f87;
    font-size: 24px;
}
.card-header .badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-left: 160px solid transparent;
    border-top: 160px solid #ff8901;
    margin-top: -0.5px;
    border-radius: 0 20px 0 0;
}
.card-header .badge span {
    position: absolute;
    right: 15px;
    top:-150px;
    transform: rotate(45deg);
    white-space: nowrap;
    font-size: 20px;
    color: #fff;
}
.card-header .badge bold{
    font-size: 32px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}    
.card-body p {
    color: #666;
    margin-bottom: 20px;
    margin-top: 20px;
    font-size: 13px;
}
.card-body h2 {
    color: #F47D21 ;
    font-weight: 600;
    font-size: 34px;
    margin-bottom: 25px;
    margin-top: -15px;
}
.card-body h6{
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
    padding-left: 20px;
    margin-bottom: 10px;
    color: #666;
    border-bottom: 1px solid #e9e9e9;
    padding-bottom: 5px;
}
.card-body li span{
    color: #f47e23;
    padding-left: 5px;
}
.card-body li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #f48026;
    font-weight: bold;
}
.card-body li:last-child {
    border-bottom: none;
    margin-bottom: 0;
}
.card-body button{
    width: 100%;
    padding: 10px;
    background: linear-gradient(45deg, #fe9b4f, #f47e23);
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    margin-bottom: 10px;
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
.sloped-line {
  position: relative;
  display: inline-block;
  color: #165E84;
  font-size: 30px;
  margin-right: 5%;
  opacity: 0.7; 
}
.sloped-line::after {
  content: '';
  position: absolute;
  top: 80%;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #FF4646; 
  transform: rotate(-15deg); 
  transform-origin: left center;
}
</style>