<template>
  <div class="card-container">
    <div class="card-icon">
        <img :src="icon"/>
    </div>
    <div class="card-info">
      <p>{{ title }}</p>
      <p>{{ body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    icon: String,
  },
};
</script>

<style lang="css" scoped>
.card-container {
  display: flex;
  background: #f7f8fa;
  border-radius: 1rem;
  width: 35rem;
  height: 15.8rem;
  margin: 0 1.5rem;
  padding: 1.6rem;
  margin-top: 10rem;
}

.card-icon {
    background: white;
    width: 5.5rem;
    height: 5.5rem;
    min-width: 5.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-info {
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
}

.card-info p:first-child {
  font-family: Circular Std;
  font-style: normal;
  font-weight: bold;
  font-size: 2.1rem;
  line-height: 3.4rem;
  /* identical to box height, or 162% */

  color: #1d293f;
  margin-bottom: 0.6rem;
}

.card-info p:last-child {
  font-family: Circular Std;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.8rem;
  /* or 175% */

  color: #7c8087;
}
</style>