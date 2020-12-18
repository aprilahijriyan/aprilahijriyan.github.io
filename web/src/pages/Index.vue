<template>
  <q-page class="flex bg-light-blue-7">
    <div
      class="q-pa-lg row justify-center items-start content-start q-gutter-lg"
    >
      <div class="col-xs-12 col-sm-12 col-md-3">
        <profile-card style="height: 500px"></profile-card>
      </div>
      <div class="col-xs-12 col-sm-12 col-md">
        <q-card
          class="shadow-10"
          :style="
            ($q.platform.is.desktop ? 'height: 600px;' : 'height: auto;') +
            'border-radius: 15px'
          "
        >
          <q-card-section>
            <vgl-slidein text="Projects" class="text-h5"></vgl-slidein>
          </q-card-section>
          <q-card-section class=""
            ><q-carousel
              v-model="slide"
              transition-prev="scale"
              transition-next="scale"
              swipeable
              animated
              arrows
              :height="$q.platform.is.desktop ? 'auto' : '100%'"
              control-color="grey"
              class="text-white rounded-borders"
            >
              <q-carousel-slide
                v-for="p in projects"
                :key="p.title"
                :name="p.title"
                class="col-md col-sm-12"
              >
                <!-- <div class="flex justify-center">
                  <q-img
                    src="https://raw.githubusercontent.com/zemfrog/zemfrog/master/docs/_static/logo.png"
                    :style="
                      $q.platform.is.desktop
                        ? 'height: 150px; width: 550px'
                        : 'height: 150px; width: 100%'
                    "
                  >
                  </q-img>
                </div>
                <div class="">
                  <div class="flex q-gutter-sm">
                    <q-badge outline color="indigo-10" label="python" />
                    <q-badge outline color="indigo-10" label="flask" />
                  </div>
                  <div class="q-py-md text-dark text-subtitle1">
                    <p>
                      Zemfrog is a simple framework based on flask for building
                      a REST API quickly. Which focuses on building a
                      customizable, flexible and manageable REST API!
                    </p>
                    <p>
                      It is equipped with JWT authentication, background task,
                      swagger-ui (OpenAPI), RBAC, auto create CRUD base and
                      more.
                    </p>
                  </div>
                  <div class="flex justify-end q-gutter-md q-py-md">
                    <q-btn
                      to="/"
                      icon="lab la-github"
                      label="View on Github"
                      outline
                      color="dark"
                    />
                  </div>
                </div> -->
                <div class="flex justify-center">
                  <q-img
                    :ratio="1"
                    :src="p.image"
                    :style="
                      $q.platform.is.desktop
                        ? 'height: 150px; width: 550px'
                        : 'height: 150px; width: 100%'
                    "
                  >
                  </q-img>
                </div>
                <div class="q-pa-md q-ml-md">
                  <div class="flex q-gutter-sm">
                    <q-badge
                      v-for="c in p.categories"
                      :key="c"
                      outline
                      color="indigo-10"
                      :label="c"
                    />
                  </div>
                  <div class="q-py-md text-dark text-subtitle1">
                    <p>
                      Zemfrog is a simple framework based on flask for building
                      a REST API quickly. Which focuses on building a
                      customizable, flexible and manageable REST API!
                    </p>
                    <p>
                      It is equipped with JWT authentication, background task,
                      swagger-ui (OpenAPI), RBAC, auto create CRUD base and
                      more.
                    </p>
                  </div>
                  <div class="flex justify-end q-gutter-md q-py-md">
                    <q-btn
                      :to="p.repository"
                      icon="lab la-github"
                      label="View on Github"
                      outline
                      color="dark"
                    />
                  </div>
                </div>
              </q-carousel-slide>
            </q-carousel>
          </q-card-section>
          <q-card-section
            v-if="$q.platform.is.desktop"
            class="absolute-bottom no-padding"
          >
            <q-tabs
              class="bg-indigo-6"
              align="justify"
              style="border-radius: 15px"
            >
              <q-route-tab
                exact
                to="/experience"
                label="Experience"
                class="text-white"
              />
              <q-route-tab
                exact
                to="/education"
                label="Education"
                class="text-white"
              />
              <q-route-tab
                exact
                to="/contact"
                label="Contact"
                class="text-white"
              />
            </q-tabs>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import ProfileCard from "components/ProfileCard.vue";

export default {
  components: { ProfileCard },
  name: "PageIndex",
  data() {
    return {
      tab: "python",
      slide: "Zemfrog",
      projects: [
        {
          categories: ["python", "flask", "zemfrog"],
          title: "Zemfrog",
          description:
            "Zemfrog is a simple framework based on flask for building a REST API quickly.",
          repository: "https://github.com/zemfrog/zemfrog",
          image:
            "https://raw.githubusercontent.com/zemfrog/zemfrog/master/docs/_static/logo.png",
        },
        // {
        //   categories: ["python", "kivy", "desktop"],
        //   title: "POSThink",
        //   description: "",
        //   repository: "https://github.com/zemfrog/zemfrog",
        //   image: "https://posthink.id/image/logo_p_posthink.png",
        // },
      ],
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  border-radius: 15px
</style>
