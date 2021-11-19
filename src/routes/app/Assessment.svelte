<script>
  import Navbar from "../../components/Navbar.svelte";
  import { navigate, Link } from "svelte-routing";
  import { onMount } from 'svelte';
import { dataset_dev } from "svelte/internal";
  onMount(() => {
    // 로그인 후 token 설정까지 되면 주석 해제
    // if(!localStorage.getItem("token")) navigate("/auth/login", { replace: true });
  });
  function formatDate(date) {
    var mymonth = date.getMonth()+1;
    var myweekday = date.getDate();
    return (mymonth + "월 " + myweekday + "일");
  }

  var now = new Date();
  var nowDayOfWeek = now.getDay();
  var nowDay = now.getDate();
  var nowMonth = now.getMonth();
  var nowYear = now.getYear();
  nowYear += (nowYear < 2000) ? 1900 : 0;
  var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
  var weekEndDate = new Date(nowYear, nowMonth, nowDay + (7 - nowDayOfWeek));
  const week = `${formatDate(weekStartDate)} ~ ${formatDate(weekEndDate)}`;
</script>

<main>
  <div id="dateContainer">
    <span id="dateText">{week}</span>
    <span id="titleText">달성률</span>
  </div>
  <div id="buttonsContainer">
    <div id="buttonsContainerLeft">
      <button>
        <img src="/resources/icons/calendar.svg" alt="□">
        <span>달력</span>
      </button>
    </div>
  </div>

  <div id="scrollContainer">
    <div id="levelContainer">
    </div>

    <div id="rateContainer">
      <div id="rateTextContainer">
        <span id="containerTitle">오늘 달성률</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
    </div>

    <div id="rateContainer">
      <div id="rateTextContainer">
        <span id="containerTitle">월요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
      <div id="rateTextContainer">
        <span id="containerTitle">화요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
      <div id="rateTextContainer">
        <span id="containerTitle">수요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
      <div id="rateTextContainer">
        <span id="containerTitle">목요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
      <div id="rateTextContainer">
        <span id="containerTitle">금요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
      <div id="rateTextContainer">
        <span id="containerTitle">토요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
      <div id="rateTextContainer">
        <span id="containerTitle">일요일</span>
        <span id="countText">4/5 개</span>
      </div>
      <progress value="4" max="5" id="todayRate"></progress>
    </div>
  </div>

  <Navbar selection={1}></Navbar>
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border: none;
    border-radius: 5vh;
    box-shadow: 0 3px 10px rgba(0,0,0,0.04);
    height: 100%;
    padding: 1vh 3vw;
  }

  #todayRate {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    margin-top: 1.2vh;
    margin-bottom: 2.5vh;
  }

  ::-webkit-progress-bar {
    background-color: #BFD8FF;
    border-radius: 10vh;
  }

  ::-webkit-progress-value {
    background-color: #4b90ff;
    border-radius: 5em;
  }

  button>span {
    margin-left: 3px;
    font-size: 2vh;
    font-weight: 700;
    color: #4B90FF;
  }

  #dateContainer {
    width: 100vw;
    height: 15vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #dateText {
    color: #7B7B7B;
    font-weight: 600;
    font-size: 2.2vh;
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

  #buttonsContainerLeft {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
  }

  #scrollContainer {
    height: 63vh;
    overflow: auto;
    margin-top: 2vh;
  }

  #rateContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.8vh 6vw;
    padding-bottom: 0vh;
    border-radius: 3vh;
    margin-bottom: 2vh;
    background-color: #fff;
    width: 78vw;
    box-shadow: 0 3px 10px rgba(0,0,0,0.02);
  }

  #levelContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1.8vh 6vw;
    padding-bottom: 0vh;
    border-radius: 3vh;
    margin-bottom: 2vh;
    background-color: #fff;
    width: 78vw;
    box-shadow: 0 3px 10px rgba(0,0,0,0.02);
  }

  #containerTitle {
    color: #222;
    font-size: 2.2vh;
  }

  #countText {
    color: #7B7B7B;
    font-size: 2.2vh;
    margin-left: auto;
    text-align: right;
  }

  #rateTextContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
</style>