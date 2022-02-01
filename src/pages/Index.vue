<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <h1>Hello, world!</h1>

    <p>
      Site is under construction.
    </p>

    <!-- <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p> -->

  </Layout>
</template>

<script>
  VANTA.NET('#background')
</script>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}




VANTA.NET({
  el: "#background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x1f4d30,
  backgroundColor: 0x617c84,
  points: 7.00,
  maxDistance: 21.00,
  spacing: 18.00
})


</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
