<template>
  <component :is="name" v-bind="$props" />
</template>
<script>
import Loading from "./Loading.vue";
import Copy from "./Copy.vue";
import ChevronDown from "./ChevronDown.vue";
import Chat from "./Chat.vue";
import ArrowRight from "./ArrowRight.vue";
import Close from "./Close.vue";
import Check from "./Check.vue";
import Attention from "./Attention.vue";

export default {
  components: {
    Loading,
    Copy,
    ChevronDown,
    Chat,
    ArrowRight,
    Close,
    Check,
    Attention,
  },
  props: {
    name: { type: String, required: true },
  },
};
</script>
