<template>
  <main class="main-content">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="hero-content">
        <div class="container">
          <div class="hero-badge">LOS SANTOS POLICE DEPARTMENT</div>
          <h1 class="hero-title">
            <span class="title-main">LSPD</span>
            <span class="title-sub">MAJESTIC | DENVER</span>
          </h1>
          
          <div class="hero-features">
            <div class="feature-item">
              <div class="feature-icon">🛡️</div>
              <div class="feature-text">
                <strong>ПОСЛЕДНИЙ РУБЕЖ</strong>
                <span>Защита и безопасность города</span>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">👁️</div>
              <div class="feature-text">
                <strong>ТЕ, КТО СТОИТ В ТЕНИ</strong>
                <span>Невидимая защита общества</span>
              </div>
            </div>
            
            <div class="feature-item">
              <div class="feature-icon">⚖️</div>
              <div class="feature-text">
                <strong>ГАРАНТЫ ПРАВОПОРЯДКА</strong>
                <span>Справедливость и законность</span>
              </div>
            </div>
          </div>
          
          <div class="hero-mission">
            <p class="mission-text">
              Департамент полиции Лос-Сантоса – ключевая структура, обеспечивающая правопорядок, 
              безопасность граждан и борьбу с преступностью в городе.
            </p>
            
            <div class="mission-highlight">
              <strong>Наша миссия:</strong> Обеспечивать безопасность, защищать права граждан, 
              поддерживать законность и порядок.
            </div>
            
            <div class="mission-stats">
              <div class="stat-item">
                <div class="stat-number">24/7</div>
                <div class="stat-label">Работаем круглосуточно</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1000+</div>
                <div class="stat-label">Сотрудников</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">99%</div>
                <div class="stat-label">Довольных граждан</div>
              </div>
            </div>
          </div>
          
          <div class="hero-actions">
            <router-link to="/applications" class="btn-primary">
              🚨 Подать заявление
            </router-link>
            <button class="btn-secondary" @click="scrollToCareer">
              💼 Карьера в LSPD
            </button>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator">
        <span>ЛИСТАЙ ВНИЗ</span>
        <div class="arrow">↓</div>
      </div>
    </section>


    <transition name="slide-up" appear>
      <section id="career" class="career-section">
        <div class="container">
          <div class="career-header">
            <h2 class="career-title">🚀 НАЧНИ КАРЬЕРУ В LSPD</h2>
            <p class="career-subtitle">Стань частью элитного подразделения Лос-Сантоса</p>
          </div>

          <div class="career-steps-horizontal">
            <div class="step-horizontal">
              <div class="step-number">1</div>
              <div class="step-content">
                <h3>📝 ПОДАЙ ЗАЯВЛЕНИЕ</h3>
                <p>Заполни анкету и пройди первоначальный отбор</p>
                <div class="step-image">📄</div>
              </div>
            </div>

            <div class="step-horizontal">
              <div class="step-number">2</div>
              <div class="step-content">
                <h3>🎓 АКАДЕМИЯ LSPD</h3>
                <p>Пройди интенсивное обучение в полицейской академии</p>
                <div class="step-image">🏫</div>
              </div>
            </div>

            <div class="step-horizontal">
              <div class="step-number">3</div>
              <div class="step-content">
                <h3>🛡️ ВЫБЕРИ ОТДЕЛ</h3>
                <p>Определись с направлением службы</p>
                <div class="step-image">🎯</div>
              </div>
            </div>

            <div class="step-horizontal">
              <div class="step-number">4</div>
              <div class="step-content">
                <h3>📈 КАРЬЕРНЫЙ РОСТ</h3>
                <p>Повышай звание и достигай новых высот</p>
                <div class="step-image">⭐</div>
              </div>
            </div>
          </div>

          <div class="departments-preview">
            <h3>Наши подразделения ждут тебя!</h3>
            <button class="btn-departments" @click="scrollToDepartments">
              👇 СМОТРЕТЬ ВСЕ ОТДЕЛЫ
            </button>
          </div>
        </div>
      </section>
    </transition>

    <transition name="slide-up" appear>
      <section id="departments" class="departments-section">
        <div class="container">
          <h2>🏢 ПОДРАЗДЕЛЕНИЯ LSPD</h2>
          <div class="departments-grid">
          <!-- PAI -->
          <div class="department-card">
            <div class="dept-icon">👨‍🏫</div>
            <h3>Police Academy Instructors (PAI)</h3>
            <p>Обучение и подготовка новых кадетов LSPD</p>
            <ul>
              <li>Проведение наборов и экзаменов</li>
              <li>Контроль дисциплины кадетов</li>
              <li>Соблюдение Кодекса этики</li>
              <li>Назначение дисциплинарных взысканий</li>
            </ul>
          </div>

          <!-- CPD -->
          <div class="department-card">
            <div class="dept-icon">🚓</div>
            <h3>Central Patrol Division (CPD)</h3>
            <p>Патрулирование и обеспечение правопорядка</p>
            <ul>
              <li>Патрулирование округа Лос-Сантос</li>
              <li>Реагирование на вызовы граждан</li>
              <li>Пресечение дорожных правонарушений</li>
              <li>Помощь другим отделам</li>
            </ul>
          </div>

          <!-- IAD -->
          <div class="department-card">
            <div class="dept-icon">⚖️</div>
            <h3>Internal Affairs Division (IAD)</h3>
            <p>Внутренний контроль и дисциплина департамента</p>
            <ul>
              <li>Контроль всего состава LSPD</li>
              <li>Выдача дисциплинарных взысканий</li>
              <li>Проведение переаттестаций</li>
              <li>Официально-деловой дресс-код</li>
            </ul>
          </div>

          <!-- K-9 -->
          <div class="department-card">
            <div class="dept-icon">🐕</div>
            <h3>Canine (K-9)</h3>
            <p>Кинологическая служба с использованием служебных собак</p>
            <ul>
              <li>Пресечение наркотрафика</li>
              <li>Задержание правонарушителей</li>
              <li>Работа на ферме и Кайо-Перико</li>
              <li>Контроль за служебными собаками</li>
            </ul>
          </div>

          <!-- DB -->
          <div class="department-card">
            <div class="dept-icon">🕵️</div>
            <h3>Detective Bureau (DB)</h3>
            <p>Оперативно-розыскная деятельность и расследования</p>
            <ul>
              <li>Расследование преступлений ОПГ</li>
              <li>Контрольные закупки и допросы</li>
              <li>Сбор доказательств</li>
              <li>Воздушная и наземная разведка</li>
            </ul>
          </div>

          <!-- SWAT -->
          <div class="department-card">
            <div class="dept-icon">🚨</div>
            <h3>Special Weapons Assault Team (SWAT)</h3>
            <p>Элитное подразделение быстрого реагирования</p>
            <ul>
              <li>Реагирование на CODE 0, 1, 7</li>
              <li>Зачистка и спецоперации</li>
              <li>Патрулирование высокой готовности</li>
              <li>Специальное вооружение и техника</li>
            </ul>
          </div>

          <!-- AF -->
          <div class="department-card">
            <div class="dept-icon">🚁</div>
            <h3>Air Force (AF)</h3>
            <p>Воздушная поддержка и транспортное обеспечение</p>
            <ul>
              <li>Воздушное патрулирование</li>
              <li>Транспортировка сил LSPD</li>
              <li>Наблюдение за объектами</li>
              <li>Поддержка спецопераций</li>
            </ul>
          </div>

          <!-- DVD -->
          <div class="department-card">
            <div class="dept-icon">🔍</div>
            <h3>Detective and Vice Division (DVD)</h3>
            <p>Расследование тяжких преступлений и контроль мероприятий</p>
            <ul>
              <li>Расследование убийств и тяжких преступлений</li>
              <li>Контроль на официальных мероприятиях</li>
              <li>Обеспечение безопасности массовых событий</li>
              <li>Контроль дисциплины на стройках LSPD</li>
            </ul>
          </div>

          <!-- ALPHA -->
          <div class="department-card">
            <div class="dept-icon">⚡</div>
            <h3>ALPHA</h3>
            <p>Элитное тактическое подразделение</p>
            <ul>
              <li>Особо опасные операции</li>
              <li>Спецзачистки и антитеррор</li>
              <li>Специализированное вооружение</li>
              <li>Прямое подчинение руководству</li>
            </ul>
          </div>
        </div>

        <div class="career-cta">
            <h3>Готов стать частью нашей команды?</h3>
            <router-link to="/applications" class="btn-apply">
              🚀 ПОДАТЬ ЗАЯВКУ СЕЙЧАС
            </router-link>
          </div>
        </div>
      </section>
    </transition>
  </main>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    scrollToCareer() {
      document.getElementById('career')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    },
    scrollToDepartments() {
      document.getElementById('departments')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }
  }
}
</script>

<style scoped>

.main-content {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}


.hero {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 50%, #34495e 100%);
  z-index: -2;
}

.hero-background::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(41, 128, 185, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(52, 152, 219, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(231, 76, 60, 0.05) 0%, transparent 50%);
  z-index: -1;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding: 120px 0 80px;
}

.hero-badge {
  display: inline-block;
  background: rgba(41, 128, 185, 0.9);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.hero-title {
  margin-bottom: 50px;
}

.title-main {
  display: block;
  font-size: 4.5rem;
  font-weight: 800;
  letter-spacing: 3px;
  margin-bottom: 10px;
  color: transparent;
  -webkit-text-stroke: 2px white;
  text-shadow: 
    0 0 10px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.3),
    0 0 30px rgba(255, 255, 255, 0.1);
  animation: strokeGlow 3s ease-in-out infinite;
  position: relative;
}

.title-main::before {
  content: 'LSPD';
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(135deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  z-index: 1;
  animation: fillPulse 2s ease-in-out infinite;
}

@keyframes strokeGlow {
  0%, 100% {
    text-shadow: 
      0 0 10px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.3);
  }
  50% {
    text-shadow: 
      0 0 15px rgba(255, 255, 255, 0.8),
      0 0 30px rgba(255, 255, 255, 0.5),
      0 0 45px rgba(255, 255, 255, 0.2);
  }
}

@keyframes fillPulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.title-sub {
  display: block;
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: 0.9;
}

/* Features Grid */
.hero-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 50px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, background 0.3s ease;
}

.feature-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature-text {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.feature-text strong {
  font-size: 1.1rem;
  font-weight: 600;
}

.feature-text span {
  font-size: 0.9rem;
  opacity: 0.8;
}


.hero-mission {
  margin-bottom: 50px;
}

.mission-text {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 25px;
  max-width: 800px;
  opacity: 0.9;
}

.mission-highlight {
  background: rgba(41, 128, 185, 0.2);
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #2980b9;
  margin-bottom: 30px;
  max-width: 800px;
}

.mission-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  max-width: 600px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 5px;
  color: #3498db;
}

.stat-label {
  font-size: 0.9rem;
  opacity: 0.8;
}


.hero-actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.btn-primary, .btn-secondary {
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.btn-primary {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}


.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  opacity: 0.7;
  animation: bounce 2s infinite;
}

.scroll-indicator span {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
}

.arrow {
  font-size: 1.5rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}


.career-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
}

.career-header {
  text-align: center;
  margin-bottom: 60px;
}

.career-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #3498db, #2980b9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.career-subtitle {
  font-size: 1.3rem;
  opacity: 0.9;
}

.career-steps-horizontal {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 15px;
  margin: 40px 0;
}

.step-horizontal {
  flex: 1;
  min-width: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 40px 30px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
}

.step-horizontal:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.15);
}

.step-horizontal .step-number {
  background: #2a5c8f;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  font-weight: bold;
  font-size: 20px;
}

.step-horizontal h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #fff;
}

.step-horizontal p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 15px;
  color: #ccc;
}

.step-horizontal .step-image {
  font-size: 2.5rem;
  margin-top: 10px;
}

.departments-preview {
  text-align: center;
  margin-top: 50px;
}

.departments-preview h3 {
  margin-bottom: 20px; 
}

.btn-departments {
  margin-top: 10px; 
}

.btn-departments {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-departments:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
}


.departments-section {
  padding: 100px 0;
  background: #f8f9fa;
}

.departments-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #2c3e50;
}

.departments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 50px 0;
}

.department-card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  border-left: 4px solid #3498db;
}

.department-card:hover {
  transform: translateY(-5px);
}

.dept-icon {
  font-size: 3rem;
  margin-bottom: 20px;
}

.department-card h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.department-card ul {
  text-align: left;
  margin-top: 15px;
}

.department-card li {
  margin-bottom: 8px;
  color: #7f8c8d;
}

.career-cta {
  text-align: center;
  margin-top: 50px;
}

.career-cta h3 {
  margin-bottom: 20px; 
}




.btn-apply {
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-apply:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
}


.slide-up-enter-active {
  transition: all 0.6s ease;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}


@media (max-width: 768px) {
  .title-main {
    font-size: 3rem;
  }
  
  .hero-features {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
  }
  
  .mission-stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .career-steps-horizontal {
    flex-direction: column;
    gap: 20px;
  }
  
  .step-horizontal {
    padding: 25px 20px;
  }

  .departments-grid {
    grid-template-columns: 1fr;
  }

  .career-title {
    font-size: 2rem;
  }
  
  .hero-content {
    padding: 100px 0 60px;
  }
    .slide-up-enter-active {
    transition: all 0.6s ease;
    }

    .slide-up-enter-from {
    opacity: 0;
    transform: translateY(50px);
    }

    .department-card {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }


    .step-horizontal {
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }


    .btn-primary, .btn-secondary, .btn-apply, .btn-departments {
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }
  
}
</style>