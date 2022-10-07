const setCurrentScene = () => {
    yOffset = window.pageYOffset;
    let total = 0;
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        total += sceneInfo[i].scrollHeight;
        if( total >= yOffset ){
            currentScene = i;
            break;
        }
    }
}



const setSecHeight = () => {
    for( let i=0 ; i<sceneInfo.length ; i++ ){
        sceneInfo[i].scrollHeight = sceneInfo[i].heightCnt * window.innerHeight;
        sceneInfo[i].objs.container.style.height = sceneInfo[i].scrollHeight + 'px';
    }
    setCurrentScene();
}



const partAniPlay = ( values,currentYOffset) => {
    let calc=0;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;  /* 현재섹션의 높이값 */
    let scrollRatio = currentYOffset / scrollHeight;  /* 현재섹션에서의 스크롤위치값을 비율로 바꾼값(0~1사이) */
    if( values.length >= 3){
        // start,end 는 0-1사이로만든 비율의 전체 높이값을 기준으로 변환값
        const start = values[2].start * scrollHeight; /* 0~1사이의 0.2가 차지하는 비율과 전체높이값에서 0.2가차지하는비율만큼의 값은 얼마인지 알아내는식 */
        const end = values[2].end * scrollHeight;      /* 0.3 */
        const partHeight= end - start;   /* 선택구간 */
        const partRatio =(currentYOffset - start) / partHeight; /* 선택구간의(비율 0~1사이)서의 스크롤위치값 */
        if( currentYOffset >= start && currentYOffset <= end){
            calc = partRatio*(values[1]-values[0])+values[0];
        }else if ( currentYOffset < start){
            calc = values[0]
        }else if (currentYOffset > end){
            calc = values[1];
        }
       
    }else{
        calc = scrollRatio*(values[1]-values[0])+values[0];
    }
    return calc;
}



// 각 요소의 애니메이션값을 적용.
const sectionAniPlay = (prevHeight) => {
    const currentYOffset = yOffset - prevHeight;   /* 현재섹션의 스크롤위치값 :  전체스크롤의 현재스크롤위치값 - 이전페이지들의 높이값*/
    let scrollRatio = currentYOffset / sceneInfo[currentScene].scrollHeight; /*선택값 / 전체값 :  현재섹션에서의 위치값 / 현재섹션의 높이값 */
    // 현재섹셕의 스크롤 위치값(0~1사이의비율로)
    const tagObjs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    switch( currentScene ) {
        case 0 :  //section-0
        /* canvas load */ 
        let seq =Math.round(partAniPlay(values.images_seq, currentYOffset)); 
        if( seq < 0){
            seq = 0;
        }
        tagObjs.context.drawImage(tagObjs.videoImages[seq],0,0);
        tagObjs.canvas.style.opacity = partAniPlay(values.canvas_opacity_out, currentYOffset );
        
        /* message show */
        // messageA
        if( scrollRatio <= 0.22){
            tagObjs.msgA.style.transform = `translateY(${ partAniPlay( values.msgA_position_in , currentYOffset )}px)`;
            tagObjs.msgA.style.opacity =  partAniPlay( values.msgA_opacity_in , currentYOffset );
        }
        else{
            tagObjs.msgA.style.opacity =  partAniPlay( values.msgA_opacity_out , currentYOffset );
            tagObjs.msgA.style.transform = `translateY(${ partAniPlay( values.msgA_position_out , currentYOffset )}px)`;
        }
        //messageB
        if( scrollRatio <= 0.42){
            tagObjs.msgB.style.transform = `translateY(${ partAniPlay( values.msgB_position_in , currentYOffset )}px)`;
            tagObjs.msgB.style.opacity =  partAniPlay( values.msgB_opacity_in , currentYOffset );
        }else{
            tagObjs.msgB.style.opacity =  partAniPlay( values.msgB_opacity_out , currentYOffset );
            tagObjs.msgB.style.transform = `translateY(${ partAniPlay( values.msgB_position_out , currentYOffset )}px)`;
        }
        //messageC
        if( scrollRatio <= 0.62){
            tagObjs.msgC.style.transform = `translateY(${ partAniPlay( values.msgC_position_in , currentYOffset )}px)`;
            tagObjs.msgC.style.opacity =  partAniPlay( values.msgC_opacity_in , currentYOffset );
        }else{
            tagObjs.msgC.style.opacity =  partAniPlay( values.msgC_opacity_out , currentYOffset );
            tagObjs.msgC.style.transform = `translateY(${ partAniPlay( values.msgC_position_out , currentYOffset )}px)`;
        }
        //messageD
        if( scrollRatio <= 0.82){
            tagObjs.msgD.style.transform = `translateY(${ partAniPlay( values.msgD_position_in , currentYOffset )}px)`;
            tagObjs.msgD.style.opacity =  partAniPlay( values.msgD_opacity_in , currentYOffset );
        }else{
            tagObjs.msgD.style.opacity =  partAniPlay( values.msgD_opacity_out , currentYOffset );
            tagObjs.msgD.style.transform = `translateY(${ partAniPlay( values.msgD_position_out , currentYOffset )}px)`;
        }
        
            break;
        case 1 :  //section-1
            break;
        case 2 :  //section-2
        // canvas load 
        let seq2 =Math.round(partAniPlay(values.images_seq, currentYOffset)); 
        if( seq2 < 0){
            seq2 = 0;
        }
        tagObjs.context.drawImage(tagObjs.videoImages[seq2],0,0);
         // messageA
         if( scrollRatio <= 0.22){
            tagObjs.msgA.style.opacity =  partAniPlay( values.msgA_opacity_in , currentYOffset );
            tagObjs.msgA.style.transform = `translateY(${ partAniPlay( values.msgA_position_in , currentYOffset )}px)`;
        }
        else{
            tagObjs.msgA.style.opacity =  partAniPlay( values.msgA_opacity_out , currentYOffset );
            tagObjs.msgA.style.transform = `translateY(${ partAniPlay( values.msgA_position_out , currentYOffset )}px)`;
        }
        //messageB
        if( scrollRatio <= 0.42){
            tagObjs.msgB.style.transform = `translateY(${ partAniPlay( values.msgB_position_in , currentYOffset )}px)`;
            tagObjs.msgB.style.opacity =  partAniPlay( values.msgB_opacity_in , currentYOffset );
        }else{
            tagObjs.msgB.style.opacity =  partAniPlay( values.msgB_opacity_out , currentYOffset );
            tagObjs.msgB.style.transform = `translateY(${ partAniPlay( values.msgB_position_out , currentYOffset )}px)`;
        }
        //messageC
        if( scrollRatio <= 0.62){
            tagObjs.msgC.style.transform = `translateY(${ partAniPlay( values.msgC_position_in , currentYOffset )}px)`;
            tagObjs.msgC.style.opacity =  partAniPlay( values.msgC_opacity_in , currentYOffset );
        }else{
            tagObjs.msgC.style.opacity =  partAniPlay( values.msgC_opacity_out , currentYOffset );
            tagObjs.msgC.style.transform = `translateY(${ partAniPlay( values.msgC_position_out , currentYOffset )}px)`;
        }
            break;
        case 3 :  //section-3
            break;
    }
}


    //스크롤이 발생될 때 현재 보여지는 section 값을 가져오도록 함.
const handlerScroll = () => {
    yOffset = window.pageYOffset;
    let prevHeight = 0;   /* 이전섹션의높이값이 더해지는 변수 */
    for( let i=0 ; i<currentScene ; i++ ){    /* currentScene : 0,1,2,3 */
        prevHeight += sceneInfo[i].scrollHeight;
    }
    if( yOffset > prevHeight + sceneInfo[currentScene].scrollHeight ){  /* 이전높이값 + 현재높이값 보다 현재 스크롤값이 더크면++ */
        currentScene++;
    }
    if( yOffset < prevHeight ) {  /* 현재 스크롤위치값이 이전섹션높이값보다작으면--  */
        currentScene--;
    }
    document.body.setAttribute('id',`show-section-${currentScene}`);  /* 각센셕의 sticky-msg를 보이게함 */
    sectionAniPlay(prevHeight);
}




// 이미지를 객체로가져와 배열안에 저장한다.
const setCavasImages =()=>{
    let imgElem;
    let heightRatio; /* canvas사이즈비율 변수 */

    for( let j=0; j<sceneInfo.length; j++){
        // 섹션의 이미지가 설정되지않게하기위해 => imgCount의 값이 0이상인지 검사
        let count = sceneInfo[j].imgCount;
        if(count <=0) continue;

        // 이미지들을 객체로 가져오기
        for(let i=0; i<count; i++){
            imgElem = new Image();
            imgElem.src = `./images/seq_${j}/${i}.jpg`;
            sceneInfo[j].objs.videoImages.push(imgElem);
        }

        // 각canvas의 사이즈 조정
        heightRatio = window.innerHeight / sceneInfo[j].objs.canvas.height;  /* 선택된사이즈 / 전체 사이즈 */
        if( j === 3){
            sceneInfo[j].objs.canvas.style.transform = `scale(${heightRatio})`;
        }else{
            sceneInfo[j].objs.canvas.style.transform = `translate(-50%,-50%) scale(${heightRatio})`;
        }

        // canvas의 이미지중에 0번째 이미지로 업로드.
        sceneInfo[j].objs.videoImages[0].onload =()=>{
            sceneInfo[j].objs.context.drawImage(sceneInfo[j].objs.videoImages[0],0,0);
        }
    }

}


// 메뉴를 스크롤에 따라 고정.
const menuPosCheck =( tagGlobalNav,tagLocalNav )=>{
  const globalNavHeight =  tagGlobalNav.clientHeight; 
  if( yOffset > globalNavHeight ){
    tagLocalNav.classList.add('local-nav-fixed');
  }else{
    tagLocalNav.classList.remove('local-nav-fixed');
  }  
}


const init = () => {
    //각각의 섹션의 height 설정
    setSecHeight();
    setCavasImages();
    //초기화
    window.addEventListener('scroll',()=>{
        const tagGlobalNav = document.querySelector('.global-nav');
        const tagLocalNav = document.querySelector('.local-nav');
        handlerScroll();
        menuPosCheck( tagGlobalNav,tagLocalNav );
    });
}

window.addEventListener('load',init);
window.addEventListener('resize',setSecHeight);
