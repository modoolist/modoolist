<script>
  import { navigate } from "svelte-routing";
  import { onMount } from 'svelte';
  onMount(() => {
    if(localStorage.getItem("token")) navigate("/todo", { replace: true });
    else navigate("/auth/login", { replace: true });
  });
</script>