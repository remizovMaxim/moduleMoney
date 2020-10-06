<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <router-link to="/"><a class="navbar-brand"><img src="http://crowd-s.com/images/logo.svg" alt="logo"></a></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/"><a class="nav-link">Генератор <span class="sr-only">(current)</span></a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list"><a class="nav-link">Список кодов</a></router-link>
        </li>
        <li class="nav-item">
          <router-link to="/check"><a class="nav-link">Проверить код</a></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'my-header'
}
</script>

<style>
  .header{
    display: flex;
    justify-content: space-between;
  }
  .header .menu{
    display: flex;
  }
  .header .menu .menu_item{

  }
</style>
