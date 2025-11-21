<template>
  <header class="header">
    <div class="header-top">
      <div class="container">
        <div class="logo-section">
          <div class="logo-main">
            <h1 class="logo">LSPD</h1>
            <div class="logo-badge">LOS SANTOS</div>
          </div>
          <div class="logo-subtitle">Majestic RP | Denver</div>
        </div>
        
        <nav class="main-nav">
          <ul class="nav-list">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                Главная
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/applications" class="nav-link">
                Заявления
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/guide" class="nav-link">
                Памятка
              </router-link>
            </li>
            <li class="nav-item">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScVP17gkQfBkpiitat27bgaXXUUJaYaRvpytyDiUGR79okmAA/viewform?usp=publish-editor" 
                 target="_blank" 
                 class="nav-link">
                Жалобы
              </a>
            </li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <router-link to="/applications" class="employment-btn">
            💼 Трудоустройство
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'MainHeader'
}
</script>

<style scoped>


.header {
  background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  font-family: 'Segoe UI', Arial, sans-serif;
  width: 100%;
  position: relative;
}

.header-top {
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.logo-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 28px;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: 3px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.logo-badge {
  background: linear-gradient(135deg, #2980b9, #3498db);
  color: white;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  letter-spacing: 1px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.logo-subtitle {
  font-size: 12px;
  color: #bdc3c7;
  margin-top: 3px;
  letter-spacing: 1px;
  font-weight: 500;
}

.main-nav {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
}

.nav-item {
  position: relative;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: #ecf0f1;
  font-weight: 500;
  font-size: 26px;
  padding: 10px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #3498db;
  transform: translateY(-1px);
}


.nav-link.router-link-active {
  background: rgba(255, 255, 255, 0.1);
  color: #3498db;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.employment-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
  text-decoration: none;
}

.employment-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(39, 174, 96, 0.4);
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .main-nav {
    display: none;
  }
  
  .employment-btn span:last-child {
    display: none;
  }
  
  .employment-btn {
    padding: 8px 12px;
  }
}


.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 80%;
  height: 2px;
  background: #3498db;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}


.logo {
  transition: all 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>