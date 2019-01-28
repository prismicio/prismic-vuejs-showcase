<template>
  <div id="blog" v-if="bloghome">
    <div class="l-wrapper">
      <hr class="separator-hr" />
    </div>

    <section class="blog-home-section">
      <div class="blog-home-posts-wrapper">
        <div v-for="(document, index) in posts"
          :key="index"
          class="blog-home-post-wrapper">
          <article>
            <prismic-image class="blog-home-post-image" :field="document.data.image" />
            <p class="blog-home-post-title">
              {{ $prismic.richTextAsPlain(document.data.title) }}
            </p>
            <p class="blog-home-post-excerpt">
              {{ $prismic.richTextAsPlain(document.data.rich_content).substring(0, 158) }}
            </p>
            <div class="blog-home-post-button-wrapper">
              <button class="a-button" v-on:click="goToPost(document.uid)">
                Read post
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div :data-wio-id="bloghome.id"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    bloghome: null,
    posts: [],
  }),
  async created() {
    const posts = await this.$prismic.client.query(this.$prismic.Predicates.at('document.type', 'blog_post'), { pageSize: 50 });
    const blogHome = await this.$prismic.client.getSingle('blog_home');
    this.bloghome = blogHome;
    this.posts = posts.results;
  },
  methods: {
    goToPost(uid) {
      this.$router.push({ name: 'blogpost', params: { uid } });
    },
  },
};
</script>

<style lang="scss">
.blog-home-section {
  padding: 70px 0 130px;
}

.blog-home-posts-wrapper {
  max-width: 794px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.blog-home-post-wrapper {
  &:not(:first-child) {
    border-top: 1px solid #d6d6d6;
    margin-top: 60px;
    padding-top: 60px;
  }
}

.blog-home-post-image {
  width: 100%;
  max-height: 546px;
  object-fit: cover;
}

.blog-home-post-title {
  margin-top: 56px;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.786;
}

.blog-home-post-excerpt {
  margin-top: 20px;
  font-family: "PT Mono", monospace;
  font-size: 17px;
  line-height: 2.353;
}

.blog-home-post-button-wrapper {
  margin-top: 20px;
}
</style>
