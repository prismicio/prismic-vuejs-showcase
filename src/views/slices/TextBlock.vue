<template>
  <section>
    <div class="l-wrapper">
      <div class="text-block-inner">
        <div class="text-block-title">
          <prismic-rich-text :field="slice.primary.title1" />
        </div>
        <div class="text-block-richtext">
          <prismic-rich-text :field="slice.primary.paragraph" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['slice'],
};
</script>

<style lang="scss">
.text-block-inner {
  display: flex;

  @media (max-width: 1190px) {
    flex-direction: column;
  }
}

.text-block-title {
  max-width: 366px;
  width: 100%;
  font-family: "PT Mono", monospace;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.786;

  margin-right: 30px;

  @media (max-width: 1190px) {
    margin-right: 0;
    margin-bottom: 70px;
  }
}

.text-block-richtext {
  font-family: "PT Mono", monospace;
  font-size: 17px;
  line-height: 2.353;

  p:not(:first-child) {
    margin-top: 40px;
  }
}

</style>
