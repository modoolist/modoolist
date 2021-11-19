<script>
  import Navbar from "../../components/Navbar.svelte";
  import { navigate, Link } from "svelte-routing";
  import { onMount } from 'svelte';
import { dataset_dev } from "svelte/internal";
  onMount(() => {
    // 로그인 후 token 설정까지 되면 주석 해제
    // if(!localStorage.getItem("token")) navigate("/auth/login", { replace: true });
  });
</script>

<main>
  <div id="dateContainer">
    <br>
    <span id="titleText">더보기</span>
  </div>
  <div id="buttonsContainer">
  </div>

  <div id="scrollContainer">
    <div id="menuContainer">
      <button id="menuButton">
        <img src="/resources/icons/help.svg" alt="?">
        <span id="menuText">궁금해요!</span>
      </button>
    </div>
    <div id="menuContainer">
      <button id="menuButton">
        <img src="/resources/icons/previous.svg" alt="←">
        <span id="menuText">지난 목표 보기</span>
      </button>

      <hr>

      <button id="menuButton">
        <img src="/resources/icons/reset_blue.svg" alt="↺">
        <span id="menuText">이번 주 목표 다시 정하기</span>
      </button>

      <hr>

      <button id="menuButton">
        <img src="/resources/icons/reset_red.svg" alt="↺">
        <span id="menuText">목표 달성 초기화</span>
      </button>
    </div>
  </div>

  <Navbar selection={2}></Navbar>
</main>

<style>
  main {
    width: 100vw;
    height: calc(90% - max(env(safe-area-inset-bottom), 3vh));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  #menuButton {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.3vh 1vw;
    background-color: #fff;
    /* height: 61vh; */
    width: 84vw;
    border: none;
  }

  hr {
    width: 84vw;
    margin: 0;
    border-top: 1px solid #E3E3E3;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
  }

  #menuText {
    margin-left: 8px;
    margin-top: 2px;
    font-size: 1.3em;
    border: none;
  }

  #dateContainer {
    width: 100vw;
    height: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #titleText {
    color: #222;
    font-weight: 600;
    font-size: 4vh;
  }

  #buttonsContainer {
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 90vw;
  }

  #scrollContainer {
    height: 75%;
    overflow: auto;
    margin-top: 2vh;
  }

  #menuContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0.3vh 3vw;
    border-radius: 3vh;
    margin-bottom: 2vh;
    background-color: #fff;
    /* height: 61vh; */
    width: 84vw;
    box-shadow: 0 3px 10px rgba(0,0,0,0.02);
  }
</style>