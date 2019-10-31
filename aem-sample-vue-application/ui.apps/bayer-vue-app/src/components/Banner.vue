<template>
  <section class="banner" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <h1 class="banner__header">{{ header }}</h1>
      <p class="banner__text">{{ blurb }}</p>
  </section>
</template>

<script>
export default {
  beforeMount() {
    const self = this;
    const lang = sessionStorage.getItem("lang") || "en";    

    fetch('/content/dam/bayer/banners.infinity.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      self.header = json[lang]['banner-1']['jcr:content'].data.master.header;
      self.imageUrl = json[lang]['banner-1']['jcr:content'].data.master.image;
      self.blurb = json[lang]['banner-1']['jcr:content'].data.master.blurb;
    })
  },
  data() {
    return {
      header: '',
      blurb: '',
      imageUrl: ''
    };
  },
};
</script>

<style scoped>
  .banner{
    background-size: auto;
    background-position: right 0 bottom 0;
    background-color: #24211c;
    background-blend-mode: normal;
    height: 460px;
    background-size: cover;
    background-repeat: no-repeat;
    color: #45423c;
    padding: 40px 0 0 60px;
  }

  .banner__header{
    font-size: 34px;
    font-weight: 600;
  }

  .banner__text{
    width: 700px;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
  }
</style>
