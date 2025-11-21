<template>
  <div class="guide-page">
    <section class="guide-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">ПАМЯТКА LSPD</h1>
          <p class="hero-subtitle">Раздел находится в стадии разработки</p>
        </div>
      </div>
    </section>

    <section class="guide-content">
      <div class="container">
        <div class="development-message">
          <div class="message-icon">🚧</div>
          <h2>Страница в разработке</h2>
          <p>Мы активно работаем над созданием полезной памятки для сотрудников LSPD.</p>
          
          <router-link to="/" class="back-btn">
            ← Вернуться на главную
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GuideView'
}
</script>

<style scoped>
.guide-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.guide-hero {
  position: relative;
  padding: 120px 0 80px;
  color: white;
  text-align: center;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

.guide-content {
  padding: 80px 0;
}

.development-message {
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  border-top: 5px solid #f39c12;
}

.message-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.development-message h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 2rem;
}

.development-message p {
  color: #7f8c8d;
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 1.1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 25px 0 35px;
  text-align: left;
}

.features-list li {
  padding: 10px 0;
  color: #27ae60;
  font-size: 1rem;
  border-bottom: 1px solid #ecf0f1;
}

.features-list li:last-child {
  border-bottom: none;
}

.back-btn {
  display: inline-block;
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  text-decoration: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(52, 152, 219, 0.3);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .development-message {
    padding: 40px 20px;
    margin: 0 20px;
  }
  
  .message-icon {
    font-size: 3rem;
  }
}
</style>