<script>
  import { Link } from "svelte-routing";
  export let selection;
</script>

<div id="container">
  <div class="spliter">
    {#if selection == 0}
      <img src="/resources/icons/home-blue.svg" alt="">
      <span class="menuText selected">오늘 할 일</span>
    {:else}
      <Link to="/app/todo" replace={true}>
        <img src="/resources/icons/home.svg" alt="">
        <span class="menuText">오늘 할 일</span>
      </Link>
    {/if}
  </div>
  <div class="spliter">
    {#if selection == 1}
      <img src="/resources/icons/assessment-blue.svg" alt="">
      <span class="menuText selected">달성률</span>
    {:else}
      <Link to="/app/assessment" replace={true}>
        <img src="/resources/icons/assessment.svg" alt="">
        <span class="menuText">달성률</span>
      </Link>
    {/if}
  </div>
  <div class="spliter">
    {#if selection == 2}
      <img src="/resources/icons/more-blue.svg" alt="">
      <span class="menuText selected">더보기</span>
    {:else}
      <Link to="/app/more" replace={true}>
        <img src="/resources/icons/more.svg" alt="">
        <span class="menuText">더보기</span>
      </Link>
    {/if}
  </div>
</div>

<style>
  img {
    height: 4vh;
  }

  :global(a) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  .spliter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 30vw;
  }

  .menuText {
    color: #999;
    margin-top: -2px;
    font-size: 1.5vh;
    font-weight: 400;
  }

  .menuText.selected {
    color: #4B90FF;
    font-weight: 500;
  }

  #container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 3vh;
    margin-top: 3vh;
    background-color: #fff;
    height: 9vh;
    width: 90vw;
    box-shadow: 0 3px 10px rgba(0,0,0,0.04);
  }
</style>