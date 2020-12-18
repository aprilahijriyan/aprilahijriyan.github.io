<template>
  <q-card class="profile-card shadow-10">
    <q-card-section class="img-profile">
      <q-avatar class="shadow-10" size="140px">
        <img src="~assets/profile.jpg" class="fit" />
      </q-avatar>
    </q-card-section>
    <q-card-section class="body-profile">
      <div class="q-gutter-sm text-center">
        <div class="text-h5">Aprila Hijriyan</div>
        <div class="text-subtitle1 q-mb-md">
          Since 2017 I started learning python and have studied web scraping for
          more than 1 year and I also studied REST API development for about 4
          months.
        </div>
        <div class="text-caption">- Evolve to help others -</div>
      </div>
    </q-card-section>
    <q-card-section class="absolute-bottom">
      <div class="q-gutter-sm text-center">
        <q-btn round color="dark" icon="lab la-github" />
        <q-btn round color="primary" icon="lab la-facebook-f" />
        <q-btn round color="blue-10" icon="lab la-linkedin-in" />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.profile-card {
  height: 450px;
  border-radius: 15px;
  margin-top: 100px;
}
// top: 1; right: -25%; transform: translateY(-60%)
.img-profile {
  position: absolute;
  top: 1;
  left: 50%;
  transform: translate(-50%, -50%);
}
// top: -10%; transform: translateY(-20%)
.body-profile {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
