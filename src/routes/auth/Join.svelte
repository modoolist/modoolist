<script>
  import { navigate, link } from "svelte-routing";
  if(localStorage.getItem("token")) navigate("/todo", { replace: true });
  let screenNumber = 1;
  const next = () => {
    if(screenNumber > -1) screenNumber--;
    else navigate("/todo", { replace: true });
    document.getElementById("fieldContainer").style.marginLeft = `${screenNumber * 200}vw`;
    if(screenNumber == -1) {
      document.getElementsByTagName("button")[0].textContent = "시작하기";
    }
  };
</script>

<main>
  <img src="/images/logo.png" alt="Modoo-list">
  <div id="fieldContainer">
    <div class="fieldInnerContainer">
      <span class="fieldExplanationText">사용하실 아이디를 정해주세요.</span>
      <input type="text" placeholder="아이디" id="username">
    </div>
    <div class="fieldInnerContainer">
      <span class="fieldExplanationText">사용하실 비밀번호를 입력해주세요.</span>
      <input type="password" placeholder="비밀번호" id="password">
      <input type="password" placeholder="비밀번호 재입력" id="passwordCheck">
    </div>
    <div class="fieldInnerContainer">
      <p>모든 준비가 끝났습니다!</p>
    </div>
  </div>
  <button on:click={next}>다음</button>
  <span>모두리스트 계정이 이미 있으신가요?</span>
  <a href="/auth/login" use:link replace>로그인</a>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
  }

  img {
    width: 40vw;
  }

  input::placeholder {
    font-weight: 600;
    font-size: 2vh;
    color: #7B7B7B;
  }

  input[type=text], input[type=password] {
    font-size: 2vh;
    font-weight: 400;
    padding: 1vh 5vw;
    width: 70vw;
    height: 4vh;
    margin-top: 2vh;
    border-radius: 1vh;
    border: 2px solid #ddd;
    background-color: #FFFFFF;
  }

  button {
    font-weight: 800;
    font-size: 2.5vh;
    width: 45vw;
    height: 7vh;
    border-radius: 5vh;
    border: none;
    background-color: #4B90FF;
    color: #FFFFFF;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 1.7vh;
    font-weight: 400;
    margin-top: 2vh;
    color: #B4B4B4;
  }

  a {
    font-size: 1.7vh;
    font-weight: 600;
    color: #555;
  }

  .fieldInnerContainer {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 29vh;
  }

  .fieldExplanationText {
    font-size: 1.8vh;
    color: #222;
    font-weight: 400;
  }

  #fieldContainer {
    transition-duration: 0.5s;
    margin-left: 200vw;
    flex-direction: row;
    display: flex;
    width: 300vw;
    height: 29vh;
  }
</style>