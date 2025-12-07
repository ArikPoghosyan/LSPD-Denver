<template>
  <div class="applications-page">
    <section class="applications-hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">ЗАЯВЛЕНИЯ LSPD</h1>
          <p class="hero-subtitle">Выберите тип заявления для подачи в Департамент полиции Лос-Сантоса</p>
        </div>
      </div>
    </section>

    <section class="applications-options">
      <div class="container">
        <div class="options-grid">
          <!-- Трудоустройство -->
          <div class="option-card">
            <div class="option-icon">💼</div>
            <h3 class="option-title">ТРУДОУСТРОЙСТВО</h3>
            <p class="option-description">
              Подача заявления на трудоустройство в Департамент полиции Лос-Сантоса
            </p>
            <ul class="option-features">
              <li>✅ Первичное трудоустройство</li>
              <li>✅ Все подразделения LSPD</li>
              <li>✅ Полный соцпакет</li>
              <li>✅ Карьерный рост</li>
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAvTvnEpS1TG3qf-nfj5iTJSduC70YE4Gov-qFo9IAHtigcA/viewform?usp=publish-editor" 
               target="_blank" 
               class="option-btn">
              ПОДАТЬ ЗАЯВЛЕНИЕ
            </a>
          </div>

          <!-- Восстановление -->
          <div class="option-card">
            <div class="option-icon">🔄</div>
            <h3 class="option-title">ВОССТАНОВЛЕНИЕ</h3>
            <p class="option-description">
              Восстановление в должности после увольнения или перерыва в службе
            </p>
            <ul class="option-features">
              <li>✅ Бывшим сотрудникам LSPD</li>
              <li>✅ После академического отпуска</li>
              <li>✅ После увольнения по собственному</li>
              <li>✅ С сохранением звания</li>
            </ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeN9YsaIJWdVHVlC2VBs6D6NYRBYqQk1dUOb6sKNQdGFnTcRQ/viewform" 
               target="_blank" 
               class="option-btn">
              ПОДАТЬ ЗАЯВЛЕНИЕ
            </a>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ApplicationsView'
}
</script>

<style scoped>
.applications-page {
  min-height: 100vh;
  background: #f8f9fa;
}

.applications-hero {
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

.applications-options {
  padding: 80px 0;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.option-card {
  background: white;
  padding: 40px 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  border-top: 4px solid #3498db;
}

.option-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.option-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.option-title {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 700;
}

.option-description {
  color: #7f8c8d;
  margin-bottom: 25px;
  line-height: 1.6;
}

.option-features {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  text-align: left;
}

.option-features li {
  padding: 8px 0;
  color: #27ae60;
  font-size: 0.9rem;
}

.option-btn {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 12px 30px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  text-decoration: none;
  display: block;
}

.option-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(39, 174, 96, 0.3);
}

.applications-info {
  display: flex;
  justify-content: center;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
}

.info-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.contacts {
  margin-top: 20px;
}

.contacts p {
  margin: 8px 0;
  color: #7f8c8d;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .options-grid {
    grid-template-columns: 1fr;
  }
  
  .option-card {
    padding: 30px 20px;
  }
}
</style>