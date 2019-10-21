<template>
  <div class="layout">
    <header>
      <img
        src="http://icons.iconarchive.com/icons/custom-icon-design/mono-business-2/72/coffee-icon.png"
        width="64"
        height="64"
        alt="logo"
      />
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <article>
      <slot></slot>
    </article>
  </div>
</template>

<style scoped>
.layout {
  width: 640px;
  margin: 0 auto;
  background: white;
  padding: 1rem;
  box-shadow: 0 0 0.5rem black;
}

header {
  display: flex;
  align-items: center;
}

header img {
  margin-right: 1rem;
}

header a {
  display: block;
  padding: 5px 10px;
  color: black;
}

header a.router-link-exact-active {
  text-decoration: none;
  background: #ffc600;
}
</style>
