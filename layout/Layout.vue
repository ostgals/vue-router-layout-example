<template>
  <div class="layout">
    <header>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <article>
      <slot></slot>
    </article>
  </div>
</template>
