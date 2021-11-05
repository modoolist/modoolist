<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./routes/Index.svelte";
  import Login from "./routes/auth/Login.svelte";
  import Join from "./routes/auth/Join.svelte";
  import Todo from "./routes/app/Todo.svelte";
  export let url = "";
</script>

<Router url="{url}">
  <div>
    <!-- / -->
    <Route path="/"><Index /></Route>
    <!-- /auth -->
    <Route path="/auth/login"><Login /></Route>
    <Route path="/auth/join"><Join /></Route>
    <!-- /app -->
    <Route path="/app/todo"><Todo /></Route>
  </div>
</Router>