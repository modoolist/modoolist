<script>
  import { Router, Route } from "svelte-routing";
  import Index from "./routes/Index.svelte";
  import Login from "./routes/auth/Login.svelte";
  import Join from "./routes/auth/Join.svelte";
  import Todo from "./routes/app/Todo.svelte";
  import Assessment from "./routes/app/Assessment.svelte";
  import More from "./routes/app/More.svelte";
  export let url = "";
  document.documentElement.style.setProperty('--div-height', `${window.innerHeight}px`);
  document.documentElement.style.setProperty('--div-width', `${window.innerWidth}px`);
</script>

<Router url="{url}">
  <div id="appContainer">
    <!-- / -->
    <Route path="/"><Index /></Route>
    <!-- /auth -->
    <Route path="/auth/login"><Login /></Route>
    <Route path="/auth/join"><Join /></Route>
    <!-- /app -->
    <Route path="/app/todo"><Todo /></Route>
    <Route path="/app/assessment"><Assessment /></Route>
    <Route path="/app/more"><More /></Route>
  </div>
</Router>

<style>
  div {
    height: calc(var(--div-height) - max(env(safe-area-inset-bottom), 3vh));
    width: var(--div-width);
  }
</style>