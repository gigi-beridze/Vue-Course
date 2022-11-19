<template>
    <h3>
        {{ counter }}
        <p>we do more...</p>
    </h3>
</template>

<script>
export default{
computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter']
    }
  }
}
</script>