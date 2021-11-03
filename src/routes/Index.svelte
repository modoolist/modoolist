<script>
  import { Link, navigate } from "svelte-routing";
  if(!localStorage.logined) {
    navigate("/auth/login", { replace: true });
  }
</script>

<app>

</app>