<script>
  import { navigate } from "svelte-routing";
  if(localStorage.getItem("token")) navigate("/todo", { replace: true });
</script>