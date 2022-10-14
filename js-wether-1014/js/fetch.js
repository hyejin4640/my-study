const url =  'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

fetch(url).then( (response)=>{
  return response.json();   /*.json 은 json방식으로 들어온string타입을  object로 변환하는 메소드 */
}).then((data)=>{
  console.log( data );
  console.log( typeof data );
})