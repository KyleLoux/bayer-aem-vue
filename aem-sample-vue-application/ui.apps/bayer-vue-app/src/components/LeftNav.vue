<template>
  <nav class="left-nav">
      <section class="left-nav--logo">
          <img src="https://www.slalom.com/sites/default/files/2019-02/slalom-logo-for-seo.png" width="38"/>
      </section>
      <hr />
      <div class="left-nav__links">
          <div class="left-nav__link"><router-link to="/home">My Profile</router-link></div>
          <div class="left-nav__link"><router-link to="/faq">FAQ</router-link></div>
          <div class="left-nav__link">Contact Us</div>
          <div class="left-nav__link">Feedback</div>
      </div>
  </nav>
</template>


<style scoped>
  .left-nav{
    background-color: #f5f5f5;
    padding: 26px;
    color: #45423c;
  }
  
  .left-nav__logo{
    
  }

  .left-nav__links{
    margin: 0;
    padding: 8px 0;
    line-height: 1.75;
  }
  
  .left-nav__link{
    cursor: pointer;
  }

  .left-nav__link a{
    text-decoration: none;
    color: #45423c;
  }
</style>