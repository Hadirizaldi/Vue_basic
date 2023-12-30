<template>
  <div class="logos-wrapper">
    <h2 class="title-header">Find Best Logo</h2>
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
      <div class="item-logos">
        <img class="logo" alt="Macintonsh-logo" src="../assets/macintosh-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="travel-logo" src="../assets/travel-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="bts-logo" src="../assets/bts-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="Macintonsh-logo" src="../assets/macintosh-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="travel-logo" src="../assets/travel-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="bts-logo" src="../assets/bts-logo.png" />
      </div>
      <div class="item-logos">
        <img class="logo" alt="Macintonsh-logo" src="../assets/macintosh-logo.png" />
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
    width: 65%;
    margin: auto;
  }

  .title-header{
    text-align: left;
  }
  .list-logos {
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;

    margin-block-start: 80px;
    width: 100%;
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