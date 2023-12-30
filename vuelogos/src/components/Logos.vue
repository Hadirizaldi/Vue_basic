<template>
  <div class="logos-wrapper">
    <h2>Find Best Logo</h2>
    <div class=" list-logos">
      <div class="item-logos">
        <img class="logo" alt="Macintonsh-logo" src="../assets/macintosh-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="travel-logo" src="../assets/travel-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="bts-logo" src="../assets/bts-logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BestLogo"
  }
</script>

<style scoped>
  .logos-wrapper {
    width: 70%;
    margin: auto;
  }

  .list-logos {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;

    margin-block-start: 80px;
  }
  .item-logos{
    width: 150px;
    height: 150px;
    background-color: aqua;
  }

  .item-logos .logo{
    width: 150px;
    height: 150px;
  }
</style>