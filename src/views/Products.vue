<template>
  <div v-if="productsDocument" id="products">
    <div class="l-wrapper">
      <hr class="separator-hr" />
    </div>

    <section class="products-section">
      <div class="l-wrapper">
        <header class="products-grid-header">
          <div class="products-grid-header-title">
            <prismic-rich-text :field="productsDocument.data.title" />
          </div>
        </header>
      </div>
      <div class="products-grid-items-wrapper">
        <div v-for="(document, index) in productList"
          :key="index"
          class="products-grid-item-wrapper">
          <div class="product" v-on:click="goToProduct(document.uid)">
            <prismic-image class="products-grid-item-image" :field="document.data.product_image" />
            <p class="products-grid-item-name">
              {{ $prismic.richTextAsPlain(document.data.product_name) }}
            </p>
          </div>
          <p class="products-grid-item-subtitle">
            {{ $prismic.richTextAsPlain(document.data.sub_title) }}
          </p>
        </div>
      </div>
    </section>

    <div :data-wio-id="productsDocument.id"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    productsDocument: null,
    productList: [],
  }),
  async created() {
    const productList = await this.$prismic.client.query(this.$prismic.Predicates.at('document.type', 'product'), { pageSize: 50 });
    const productsDocument = await this.$prismic.client.getSingle('products');
    this.productList = productList.results;
    this.productsDocument = productsDocument;
  },
  methods: {
    goToProduct(uid) {
      this.$router.push({ name: 'product', params: { uid } });
    },
  },
};
</script>

<style lang="scss">
.products-section {
  padding: 70px 0 130px;
}
.products-grid-header {
  display: flex;
  justify-content: space-between;

  @media (max-width: 774px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
}

.products-grid-header-title {
  max-width: 592px;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.786;
}

.products-grid-header-button-wrapper {
  @media (min-width: 775px) {
    margin-left: 30px;
  }

  @media (max-width: 774px) {
    margin-top: 30px;
  }
}

/**
 * Items
 */

.products-grid-items-wrapper {
  display: flex;
  flex-wrap: wrap;
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1189px) {
    max-width: 792px;
  }

  @media (max-width: 791px) {
    max-width: 396px;
  }
}

.products-grid-item-wrapper {
  max-width: 366px;
  margin: 70px 15px 0;
}

.products-grid-item-image {
  width: 100%;
  max-height: 340px;
  object-fit: cover;
}

.products-grid-item-name {
  margin-top: 30px;
  color: #001000;
  font-family: "PT Mono", monospace;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  &::before {
    content: "⇥";
  }

  a {
    text-decoration: underline
  }
}

.products-grid-item-subtitle {
  margin-top: 10px;
  color: #7f7d7c;
  text-align: center;
}

.product {
  cursor: pointer;
}
</style>
