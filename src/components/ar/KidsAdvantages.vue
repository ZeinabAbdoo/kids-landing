<template>
  <div class="Kids-advantages">
    <div 
      v-for="(advantage, index) in advantages" 
      :key="index" 
      :class="[
        'advantage-card', 
        ((Math.floor(index / 4) + index % 2) % 2 === 0) ? 'even-card' : 'odd-card'
      ]"
    >
      <div class="advantage-svg" v-html="advantage.svg"></div>
      <h2>{{ advantage.title }}</h2>
      <p>{{ advantage.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KidsAdvantages',
  data() {
    return {
    advantages: [
    {
      "title": "الفعالية",
      "content": "نحن نقدم أحدث طرق تدريس اللغة وأكثرها فعالية.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "التأسيس",
      "content": "منذ تأسيسها ، دربت أكاديمية مونجلش أكثر من مليون طالب في اللغة الإنجليزية.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "الحصري",
      "content": "منهج فريد حصري لتدريس اللغة. والذي يعتمد على أفضل نظام معتمد عالميا (CEFR).",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "الفريد",
      "content": "فريدون في تطوير وتقديم منهجنا التعلم اللغة الإنجليزية.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "الاعتماد",
      "content": "نحن وكلاء معتمدون وشركاء المدارس اللغة للدراسة في الخارج في أمريكا وإنجلترا.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "الشمول",
      "content": "تقدم الاكاديمية اكثر من 12 نادي تفاعلي يومي للوصول لأقصى استفادة ولمعايشة اللغة.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "الاستمرارية",
      "content": "إجمالي ساعات الدراسة اليومية يتراوح حوالي 50-70 ساعة في الشهر.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    },
    {
      "title": "الجودة",
      "content": "يتم اختيار المدربين ذوي المستوى العالي وفقًا لأفضل معايير الجودة التعليمية.",
      "svg": `<svg fill="#fff" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4,23a1,1,0,0,1-1-1V19a1,1,0,0,1,2,0v3A1,1,0,0,1,4,23Zm9-1V15a1,1,0,0,0-2,0v7a1,1,0,0,0,2,0Zm7-11a1,1,0,0,0-1,1V22a1,1,0,0,0,2,0V12A1,1,0,0,0,20,11Zm.382-9.923A.991.991,0,0,0,20,1H16a1,1,0,0,0,0,2h1.586L12,8.586,8.707,5.293a1,1,0,0,0-1.414,0l-4,4a1,1,0,0,0,1.414,1.414L8,7.414l3.293,3.293a1,1,0,0,0,1.414,0L19,4.414V6a1,1,0,0,0,2,0V2a1,1,0,0,0-.618-.923Z"></path></g></svg>`
    }
    ]
    };
  }
};
</script>

<style scoped>
.Kids-advantages {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
  direction: rtl;
  width: 98%;
  padding: 0;
}

.advantage-card {
  background-color: #fff;
  border-radius: 1.5em;
  padding: 30px;
  text-align: center;
  width: 180px;
  flex: 1 1 calc(20% - 20px); 
}

.advantage-svg {
  margin: 30px auto 10px; 
  border-radius: 1em; 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px; 
  height: 64px; 
}

.advantage-card h2 {
  font-size: 1.4em;
  margin: 10px 0;
  color: black;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.advantage-card p {
  font-size: 1em;
  color: #aaaaaa;
  font-family: 'DIN Next LT Arabic';
  font-weight: 500;
}

.odd-card {
  border: rgba(252, 181, 181, 1) 1px solid; 
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(252, 181, 181, 0.2) 100%);
}

.odd-card .advantage-svg {
  background-color: rgba(252, 181, 181, 0.7); 
}

.even-card {
  border: rgba(253, 151, 73, 1) 1px solid; 
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(253, 151, 73, 0.1) 100%);
}

.even-card .advantage-svg {
  background-color: rgba(253, 151, 73, 0.6); 
}
</style>