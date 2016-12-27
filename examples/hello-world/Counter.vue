<template>
  <div id="app">
    {{$store.state.message}}
    <input v-model="$store.state.message">
  </div>
</template>