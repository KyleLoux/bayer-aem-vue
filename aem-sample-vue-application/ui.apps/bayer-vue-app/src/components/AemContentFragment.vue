<template>
  <div v-html=content>
      
  </div>
</template>

<script>
export default {
  beforeMount() {
    const self = this;
    fetch('/content/we-retail/us/en/men/jcr:content/root/responsivegrid/contentfragment.model.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      self.content = json.elements.main.value;
    })
  },
  data() {
    return {
      content: ''
    };
  },
};
</script>
