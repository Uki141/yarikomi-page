<template>
  <v-container fluid class="home-infomation">
    <v-row class="home-infomation-row d-flex align-center" data-aos="zoom-out-down" data-aos-duration="1500">
      <v-col class="col-1"></v-col>
      <v-col class="home-infomation-heading animate__animated animate__pulse animate__slow animate__infinite">
        <span>
          <slot name="heading"></slot>
        </span>
      </v-col>
      <v-col class="col-1"></v-col>
    </v-row>
    <v-row class="d-flex justify-center">
      <img src="@/assets/img/googlechat.png" class="google-chat-img" />
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-infomation {
  height: 100vh;
  background-color: #1A2E40;
}

.home-infomation-row {
  min-height: 50%;
}

.home-infomation-heading {
  position: relative;
  padding: 1.5rem 2rem;
  border: 3px solid #d8d8d8;
  border-radius: 10px;
  background: #f9f9f9;

  font-size: 12vh;
  font-family: 'Zen Kaku Gothic New', Courier, monospace;
  font-weight: bold;
  text-align: center;
}

.home-infomation-heading:before {
  position: absolute;
  bottom: -14px;
  left: 50%;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #d8d8d8 transparent transparent transparent;
}

.home-infomation-heading:after {
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 0;
  content: '';
  border-width: 14px 12px 0 12px;
  border-style: solid;
  border-color: #f9f9f9 transparent transparent transparent;
}

.google-chat-img {
  height: 40%;
  max-height: 40%;
}
</style>