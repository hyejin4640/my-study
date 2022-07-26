/**변수규칙
 * 라틴문자(0-9,a-z,A-Z) OR _
 * 대소문자를 구분함
 * 카멜표기법사용-> camelCase :  2단어이상이면, 2번째단어앞자리는 upper로 쓰기(ex:likeThis)
 * 한국어x
 * 예약어x
 * 숫자로 시작x
 * 특수문자 x but,("_","$") <- 2가지특수문자는 예외
 * 이모지x
 * 여러개의 변수를 1,2,3 숫자로 구분 x ->최대한의미있게 구체적으로 작성하기!
 */

//나쁜예제😒
let number = 20;
let audio1;
let audio2;


// 좋은예제😊
let myAge = 20;    //자신의나이인것을 추측가능
let backgroundAudio;  //뒷배경오디오 추측가능
let windAudio;        //바람 오디오 추측가능


// 꿀팁!💕
let audioBackground;
let audioWind;
// 반복되는 단어를 "앞" 에써주면 단어 앞자리만 입력해도 같은 단어들의 목록이 미리보기로 보여줌!
