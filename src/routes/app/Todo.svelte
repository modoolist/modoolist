<script>
  import Navbar from "../../components/Navbar.svelte";
  import { navigate, Link } from "svelte-routing";
  import { onMount } from 'svelte';
import { dataset_dev } from "svelte/internal";
  onMount(() => {
    // 로그인 후 token 설정까지 되면 주석 해제
    // if(!localStorage.getItem("token")) navigate("/auth/login", { replace: true });
  });
  const date = new Date();
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${date.getMonth() + 1}월 ${date.getDate()}일 (${day[date.getDay()]})`;
  const exampleData = [
    {
      "target": "큰 목표",
      "todo": [
        {"id": 1, "name": "작은 목표1", "checked": false},
        {"id": 2, "name": "작은 목표2", "checked": false},
        {"id": 3, "name": "작은 목표3", "checked": true},
        {"id": 4, "name": "작은 목표4", "checked": false},
      ]
    }
  ];
</script>

<main>
  <div id="dateContainer">
    <span id="dateText">{today}</span>
    <span id="titleText">오늘 할 일</span>
  </div>
  <div id="buttonsContainer">
    <div id="buttonsContainerLeft">
      <button>
        <img src="/resources/icons/add_circle.svg" alt="+">
        <span>추가</span>
      </button>
    </div>
    <div id="buttonsContainerRight">
      <button>
        <img src="/resources/icons/timelapse.svg" alt="◐">
        <span>목표 타이머</span>
      </button>
    </div>
  </div>
  <div id="todoContainer">
    {#each exampleData as data}
      <span class="target">{data.target}</span>
      {#each data.todo as todo}
        <div class="todoInnerContainer">
          {#if todo.checked}
            <input type="checkbox" id={`cb${todo.id}`} checked>
            <label for={`cb${todo.id}`}></label>
            <span class="todo completed">{todo.name}</span>
          {:else}
            <input type="checkbox" id={`cb${todo.id}`}>
            <label for={`cb${todo.id}`}></label>
            <span class="todo">{todo.name}</span>
          {/if}
        </div>
      {/each}
    {/each}
  </div>
  <Navbar selection={0}></Navbar>
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

  button>span {
    margin-left: 3px;
    font-size: 2vh;
    font-weight: 700;
    color: #4B90FF;
  }

  input[type="checkbox"] + label {
    display: inline-block;
    width: 4vw;
    height: 4vw;
    border: 2px solid #707070;
    border-radius: 2vw;
  }

  input[type="checkbox"]:checked + label {
    background-color: #4B90FF;
    border: 2px solid #4B90FF;
  } 

  input[type="checkbox"] {
    display: none;
  }

  .todoInnerContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 1vh 0vw;
  }

  .target {
    margin-top: 2vh;
    margin-bottom: 1vh;
    color: #000;
    font-weight: 700;
    font-size: 3vh;
  }

  .todo {
    margin-left: 5px;
    color: #000;
    font-weight: 400;
    font-size: 2.3vh;
    margin-bottom: 0.5vh;
  }

  .todo.completed {
    text-decoration: line-through;
    margin-left: 5px;
    color: #888;
    font-weight: 400;
    font-size: 2.3vh;
    margin-bottom: 0.5vh;
  }

  #dateContainer {
    width: 100vw;
    height: 15%;
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

  #buttonsContainerRight {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
    height: 100%;
  }

  #todoContainer {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 1vh 8vw;
    border-radius: 3vh;
    margin-top: 5%;
    background-color: #fff;
    height: 75%;
    width: 74vw;
    box-shadow: 0 3px 10px rgba(0,0,0,0.02);
  }
</style>