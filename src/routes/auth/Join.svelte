<script>
  import { navigate, link } from "svelte-routing";
  if(localStorage.getItem("token")) navigate("/todo", { replace: true });
</script>

<main>
  <img src="/images/logo.png" alt="Modoo-list">
  <div id="fieldContainer">

  </div>
  <button>회원가입</button>
  <span>모두리스트 계정이 이미 있으신가요?</span>
  <a href="/auth/login" use:link>로그인</a>
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
    margin-top: 5vh;
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

  #fieldContainer {
    width: 100vw;
    height: 24vh;
  }

  #username {
    margin-top: 10vh;
  }
</style>