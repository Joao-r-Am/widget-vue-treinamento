<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21.9999 0.333496C10.0399 0.333496 0.333252 10.0402 0.333252 22.0002C0.333252 33.9602 10.0399 43.6668 21.9999 43.6668C33.9599 43.6668 43.6666 33.9602 43.6666 22.0002C43.6666 10.0402 33.9599 0.333496 21.9999 0.333496ZM24.1666 32.8335H19.8333V28.5002H24.1666V32.8335ZM24.1666 24.1668H19.8333V11.1668H24.1666V24.1668Z"
      :fill="color" />
  </svg>
</template>
<script>
export default {
  props: {
    size: { type: [String, Number], default: 22 },
    color: { type: String, default: "white" },
  },
};
</script>
<style></style>
