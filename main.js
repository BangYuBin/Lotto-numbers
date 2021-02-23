const button = document.querySelector(".button");
const yellow = "#FBC400";
const blue = "#69C8F2";
const red = "#FF7272";
const gray = "#AAAAAA";
const green = "#B0D840"
button.addEventListener('click', ()=>{
    const numbers = document.querySelectorAll(".number");
    const lotto_number = [];
    for(let i = 0; i<6; i++){
        //1~45숫자를 생성한 뒤 넣음
        lotto_number.push(Math.floor(Math.random()*45)+1);
        //겹치는 숫자 확인
        for(let j = 0; j<i; j++){
            if(lotto_number[i]==lotto_number[j]){
                lotto_number.pop(); //뽑은 숫자 제거
                i--; //i -1로 다시 뽑기
            }
        }
    }
    //오름 차순 정렬
    lotto_number.sort(function(a, b)  {
        return a - b;
      });
    console.log(lotto_number);

    //HTML내용에 숫자 적용
    for(let i=0; i<6; i++){
        numbers[i].innerText = lotto_number[i];
        //숫자 크기 별 색상 적용
        switch(parseInt((lotto_number[i]-1)/10)){
            case 0:
                //1~10 -> 노란색
                numbers[i].style.backgroundColor = yellow;
                break;
            case 1:
                //11~20 -> 파랑색
                numbers[i].style.backgroundColor = blue;
                break;
            case 2:
                //21~30 -> 빨강색
                numbers[i].style.backgroundColor = red;
                break;
            case 3:
                //31~40 -> 회색
                numbers[i].style.backgroundColor = gray;
                break;
            case 4:
                //41~45 -> 녹색
                numbers[i].style.backgroundColor = green;
                break;
        }
    }
})