<script>
  import { navigate } from "svelte-routing";
  if(localStorage.getItem("token")) navigate("/todo", { replace: true });
</script>

<main>
  <img src="/images/logo.png" alt="Modoo-list">
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80vh;
  }

  img {
    width: 40vw;
  }
</style>