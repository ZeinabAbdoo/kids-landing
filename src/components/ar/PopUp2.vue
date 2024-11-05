<template>
  <div v-if="showPopup2" class="popup-overlay" @click="closePopup2">
    <div class="popup-content" @click.stop :class="{ 'popup-disabled': loading }">
      <button class="close-button" @click="closePopup2" :disabled="loading">&times;</button>
      <div class="popup-body">
        <div class="popup-text">
          <h2>سجل الآن!</h2>
          <div class="pop-card">
            <p>واستمتع بخصومات الجمعة البيضاء </p>
          </div>
          <div class="inline-titles">
            <h1>(12 شهر)</h1><h2>بسعر 6 شهور!</h2>
          </div>
          <p class="pop-desc">احصل على عام كامل من الفوائد والمزايا بنفس تكلفة نصف العام! 🥳</p>
          <form @submit.prevent="register" class="pop-form" :class="{ 'form-disabled': loading }">
            <div class="inline-group">
              <div class="form-pop">
                <label for="fullName" class="pop-label">الاسم الكامل</label>
                <input type="text" class="pop-input" id="fullName" placeholder="الاسم الكامل" v-model="fullName" 
                  required :disabled="loading" />
              </div>
              <div class="form-pop">
                <label for="phoneNumber" class="pop-label">رقم الهاتف</label>
                <vue-tel-input 
                  class="pop-input" 
                  v-model:phoneNumber="phoneNumber" 
                  v-model:country="country" 
                  @input="onPhoneInput" 
                  @validate="onPhoneValidate" 
                  mode="international" 
                  :preferred-countries="['SA', 'KW', 'AE', 'QA', 'EG', 'JO', 'OM', 'YE', 'BH', 'IQ']" 
                  defaultCountry="SA" 
                  :inputOptions="inputOptions" 
                  :inputprops="{ name: 'phoneNumber', id: 'phoneNumber', required: true, placeholder: 'رقم الهاتف' }" 
                  :disabled="loading" 
                  style="direction: ltr;"
                />
              </div>
            </div>
            <div class="form-pop">
              <label for="email" class="pop-label">البريد الإلكتروني</label>
              <input type="email" class="pop-input" id="email" placeholder="example@email.com" v-model="email" 
                required :disabled="loading" />
            </div>
            <input type="hidden" v-model="fullPhoneNumber" />
            <button type="submit" class="pop-btn" :disabled="loading" id="kids-pop-ar">التسجيل في عروض الجمعة البيضاء</button>
          </form>
          <div v-if="loading" class="spinner-overlay">
            <div class="spinner"></div>
          </div>
          <p class="pop-bottom"> تُحفظ التفاصيل الشخصية وتستخدم فقط فيما يتعلق بطلبك فقط. يُرجى قراءة
            <a href="/ar/terms-and-conditions">شروط الاستخدام</a> لمزيد من المعلومات.</p>
        </div>
        <div class="popup-image"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  direction: rtl;
  font-family: 'DIN Next LT Arabic', sans-serif;
  overflow: auto;
}

.popup-content {
  background: white;
  display: flex;
  max-width: 900px;
  width: 100%;
  max-height: 100%;
  border-radius: 20px;
  position: relative;
}

.popup-body {
  display: flex;
  width: 100%;
}

.popup-text {
  flex: 1;
  padding: 30px;
  text-align: start;
  line-height: 1.5;
  margin-top: 10px;
}

.popup-text h2 {
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 10px;
}

.inline-titles {
  padding-top: 10px;
}

.inline-titles h1, .inline-titles h2 {
  display: inline; 
  margin: 0 5px; 
}

.popup-text h1 {
  font-size: 2em;
  font-weight: 500;
  line-height: 90%;
  color: #ff6f00;
  margin-bottom: 20px;
}

.pop-card {
  background: linear-gradient(45deg, #ff9442, #ff6f00);
  color: white;
  border-radius: 25px 0 0 25px;
  margin-inline-start: -30px;
  padding-inline-start: 30px;
  padding-top: 0.5px;
  padding-bottom: 1px;
}

.pop-card p {
  line-height: 100%;
  font-size: 2em;
}

.pop-desc {
  line-height: 1.5;
  font-size: 19px;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #808080;
}

.popup-image {
  flex: 1;
  background-image: url('@/assets/images/poup2-ar.jpeg');
  background-size: cover;
  background-position: top center;
  border-radius: 20px 0 0 20px;
  padding: 3.75em;
  width: 100%;
}

.close-button {
  position: absolute;
  top: -1.25rem;
  right: 0.625em;
  background: none;
  border: none;
  font-family: 'DIN Next LT Arabic', sans-serif;
  font-size: 3.75em;
  font-weight: 500;
  cursor: pointer;
}

.pop-form {
  text-align: right;
  direction: rtl;
  padding: 2%;
}

.pop-input {
  box-sizing: border-box;
  width: calc(100% - 1.25em);
  padding: 0.625em;
  margin: 0;
  border-radius: 15px;
  background-color: #f3f7ff;
  border: none;
  height: 50px; 
}

form .form-pop {
  margin-bottom: 20px;
}

.pop-label {
  display: block;
  margin-right: 0.75em;
  text-align: right;
  font-weight: 500;
  color: #bababa;
  margin-top: 0;
  margin-bottom: 5px; 
}

.pop-bottom {
  color: #979797;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
  padding: 0 2%;
}

.pop-bottom a {
  color: #165e84;
  text-decoration: underline;
}

.inline-group {
  display: flex;
  justify-content: space-between;
}

.inline-group .form-group {
  width: 48%;
}

.pop-btn {
  background: linear-gradient(45deg, #ff9442, #ff6f00);
  color: white;
  border: none;
  padding: 0.25rem 0.25rem 0.5rem 0.25rem;
  cursor: pointer;
  border-radius: 20px;
  width: 100%; 
  font-size: 1.4em;
  font-family: 'DIN Next LT Arabic', sans-serif;
}

@media (max-width: 1000px) {
  .popup-overlay {
    align-items: flex-start;
  }

  .popup-content {
    max-width: 90%;
    margin-block: 50px;
  }

  .popup-text {
    padding: 1.5em;
  }

  .popup-text h2 {
    font-size: 1.5em;
  }

  .popup-text h1 {
    font-size: 2.25em;
  }

  .pop-card {
    margin-inline-start: -1.5em;
  }

  .pop-card p {
    font-size: 1.25em;
  }
  .pop-desc {
    font-size: 1.25em;
  }
  .popup-image {
    display: none;
  }
  .close-button {
    top: -35px;
    right: 10px;
  }
  .pop-input {
    width: 100%;
  }
}
</style>

<script>
  import axios from "axios";
  import { VueTelInput } from 'vue3-tel-input';
  import 'vue3-tel-input/dist/vue3-tel-input.css';

  export default {
    components: {
      VueTelInput,
    },
    data() {
      return {
        showPopup2: false,
        fullName: '',
        email: '',
        phoneNumber: '',
        country: null,
        inputOptions: {
          hiddenInput: true,
        },
        isValidPhone: false,
        fullPhoneNumber: '',
        loading: false,
      };
    },
    mounted() {
      const popupShown2 = sessionStorage.getItem('popupShown2');
      if (!popupShown2) {
        this.showPopup2 = true;
      }
    },
    methods: {
      onPhoneInput(formattedNumber, phoneObject) {
        if (phoneObject && phoneObject.number) {
          console.log('Phone Input:', formattedNumber, phoneObject);
          this.fullPhoneNumber = phoneObject.number;
        }
      },
      onPhoneValidate(isValid, phoneObject) {
        console.log('Validation Result:', isValid);
        this.isValidPhone = isValid;

        if (isValid && phoneObject && phoneObject.number) {
          this.fullPhoneNumber = isValid.number;
        } else if (!isValid) {
          console.warn('Phone number is not valid.');
        }
      },
      closePopup2() {
        this.showPopup2 = false;
        sessionStorage.setItem('popupShown2', 'true');
      },
      register() {
      if (!this.fullPhoneNumber) {
        console.error('Phone number is missing or invalid.');
        return;
      }
      this.loading = true;
      const payload = {
        name: this.fullName,
        email: this.email,
        phone: this.fullPhoneNumber,
        stage: 'kids-landing-popup', 
      };
      
      console.log("Payload before sending:", payload);

      let headers = { 'Content-Type': 'application/json' };
      axios.post(`/api/free-session-forms`, payload, { headers })
        .then(response => {
          const data = response.data;
          if (response.status === 201) {
            console.log('Form submitted successfully:', data);
            this.successMessage = 'تم التسجيل بنجاح!'; 
            this.fullName = '';
            this.email = '';
            this.phoneNumber = '';
            this.fullPhoneNumber = '';
            this.country = null; 

            this.closePopup2();
          } else {
            console.error('Error in response:', data.message || 'Unknown error');
          }
        })
        .catch(error => {
          console.error('Error submitting form:', error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    },
  };
</script>