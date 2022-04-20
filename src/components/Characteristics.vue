<template>
  <div id="characteristics" v-if="characteristics.length > 0">
    <div
      class="characteristic"
      :class="{
        enabled: characteristic.value,
        disabled: !characteristic.value && characteristic.value != null,
      }"
      v-for="(characteristic, index) in characteristics"
      :key="index"
      @click="toggleCharacteristic(characteristic)"
    >
      <div class="icon">
        <font-awesome-icon
          :icon="['far', 'check-square']"
          v-if="characteristic.value"
        />
        <font-awesome-icon
          :icon="['fa', 'times-square']"
          v-if="!characteristic.value && characteristic.value != null"
        />
        <font-awesome-icon
          :icon="['far', 'square']"
          v-if="characteristic.value == null"
        />
      </div>
      {{ characteristic.question }}
    </div>
  </div>
</template>

<script lang="ts">
import Characteristic from "@/interfaces/Characteristic";
import { Vue } from "vue-class-component";

export default class Characteristics extends Vue {
  get characteristics(): Characteristic[] {
    return this.$store.getters.characteristics;
  }

  toggleCharacteristic(characteristic: Characteristic): void {
    this.$store.commit("UPDATE_CHARACTERISTIC_STATE", characteristic);
    console.log(characteristic.value);
  }
}
</script>

<style scoped lang="scss">
#characteristics {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px 25px;
  border-bottom: 1px solid black;

  @media screen and (max-width: 2100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 1275px) {
    grid-template-columns: 1fr;
  }

  .characteristic {
    display: flex;
    align-items: center;

    padding: 5px;

    cursor: pointer;
    user-select: none;

    font-weight: 400;
    font-size: 18px;

    transition: 0.2s;

    &.enabled {
      color: $positive-text;
    }

    &.disabled {
      color: $negative-text;
    }

    .icon {
      margin-right: 7px;
      font-size: 1rem;

      .fa-square-check {
        color: $positive;
      }
      .fa-square-xmark {
        color: $negative;
      }
    }
  }
}
</style>
