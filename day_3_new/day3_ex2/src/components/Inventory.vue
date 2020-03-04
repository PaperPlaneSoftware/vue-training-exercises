<template>
  <div class="inventory">
    <armour class="item" name="Shield" image="🛡️" :rating="2" :weight="1" />
    <weapon class="item" name="Bow" image="🏹" :dps="2" :ammo="99" />
  </div>
</template>

<script>
import Armour from "./Armour";
import Weapon from "./Weapon";

export default {
  name: "Inventory",

  components: {
    Armour,
    Weapon
  }
};
</script>

<style lang="scss" scoped>
.inventory {
  display: flex;
  flex-direction: row;
}

.item {
  margin: 1em;
}
</style>