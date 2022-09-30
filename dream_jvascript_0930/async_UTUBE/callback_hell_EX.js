// Callback Hell example

class UserStorage {
  loginUser(id, passward, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && passward === "dream") ||
        (id === "coder" && passward === "academy")
      ) {
        onSuccess(id); // id와 passward가 2개의 조건중에서 일치하면onSuccess(id)를 전달한다
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

/**
 * 1. id를 입력을 받아온다.
 * 2. 입력받은 id를 서버에 전달해 로그인한다
 * 3. 로그인이 성공하면 id를 받아오면서 역할을 요청해 역할을 받아온다
 * 4. 받아온 역할과 이름을 출력해본다.(최종목적)
 */

const userstorage = new UserStorage();
const id = prompt("enter your id");
const passward = prompt("enter your passward");
userstorage.loginUser(
  id,
  passward,
  (user) => {
    userstorage.getRoles(user,(userWithRole)=>{
      alert(`hello ${userWithRole.name},you have a ${userWithRole.role} role`);
    },(error)=>{
      console.log(error);
      
    })
  },
  (error) => {console.log(error);
  }
);
