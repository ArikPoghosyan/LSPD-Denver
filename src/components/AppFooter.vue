<template>
  <footer class="lspd-footer">
    <div class="footer-content">
      <div class="footer-section">
        <div class="footer-logo">
          <h3>LOS SANTOS POLICE DEPARTMENT</h3>
          <p></p>
        </div>
        <p class="footer-description">
          Serving and protecting the citizens of Los Santos with integrity and courage since 1985.
        </p>
      </div>

      <div class="footer-section">
        <h4>CONTACT INFO</h4>
        <div class="contact-info">
          <p>📞 Emergency: 911</p>
          <p>✉️ Email: info@lspd-denver.com</p>
          <p>📍 Mission Row, 2047 Los-Santos</p>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Los Santos Police Department. All rights reserved.</p>
      <p class="developer-credit">Website developed by Arik</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
.lspd-footer {
  background: linear-gradient(135deg, #1a2b3c 0%, #2c3e50 100%);
  color: white;
  padding: 40px 20px 20px;
  margin-top: auto;
  position: relative;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-section h4 {
  color: #e0e0e0;   
  margin-bottom: 15px;
  font-size: 16px;
}

.footer-logo h3 {
  color: #e0e0e0;
  margin-bottom: 5px;
  font-size: 18px;
}

.footer-logo p {
  color: #e0e0e0;
  font-weight: bold;
}

.footer-description {
  color: #bdbdbd;
  line-height: 1.5;
  margin-top: 10px;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 8px;
}

.footer-links a {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: #e0e0e0;
}

.contact-info p {
  color: #e0e0e0;
  margin-bottom: 8px;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-link {
  color: #e0e0e0;
  text-decoration: none;
  transition: color 0.3s;
}

.social-link:hover {
  color: #e0e0e0;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid #3949ab;
  text-align: center;
  color: #bdbdbd;
  position: relative;
}

.developer-credit {
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0;
  font-size: 14px;
  color: #90a4ae;
  font-style: italic;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .social-links {
    align-items: center;
  }
  
  .developer-credit {
    position: static;
    margin-top: 10px;
  }
}
</style>