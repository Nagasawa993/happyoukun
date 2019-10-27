// let btn = document.getElementById('btn');
// btn.addEventListener('click',function(){

  // let res = ['japan.jpg','USA.jpg','cebu.jpg','spain.jpg','china.jpg'];

// <img src="https://hakuhin.jp/graphic/title.png" width="312" height="112" alt="画像の解説文です" >
// </img>

//   let japan = 'japan.jpg';
//   let USA   = 'USA.jpg';
//   let cebu  = 'cebu.jpg';
//   let spain = 'spain.jpg';
//   let china = 'china.jpg';
// console.log(japan);
// alert(USA)

// var array1 = ['japan','USA','cebu','spain','china'];
// console.log (array1[0]);

// document.write('<img src= "japan.jpg" alt="どこかの国の画像">')

  // let res = ['japan','USA','cebu','spain','china'];
  // let randomNum = Math.random();


  // alert(randomNum);
  // math.flor
  // math.cell
  // math.round
  // 0,1,2,3,4
// console.log(Math.floor(randomNum * res.length));

// let num = (Math.floor(randomNum * res.length));
// document.write('<img src= "japan" alt="どこかの国の画像">')

// result.textContent = res [num];

// });

function getImage(){
  //画像ファイル名を配列で保持
  var arr = ['japan.jpg','USA.jpg','cebu.jpg','spain','china'];
  //ランダムで画像ファイルを取得して表示する
  var obj = document.getElementById("result");
  var a = Math.floor(Math.random() * arr.length);
  obj.src = arr[a];
}
