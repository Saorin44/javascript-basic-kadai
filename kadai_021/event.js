// btnというidを持つHTML要素を取得し、定数に代入する
const onBtn = document.getElementById('btn')

// textというidを持つHTML要素を取得し、定数に代入する
const chaText = document.getElementById('text')


onBtn.addEventListener('click', () => {
  //ボタン押したら↓２秒後に下記の処理
setTimeout(() => {
  // textというidを持つHTML要素の文字を変更
  chaText.textContent="ボタンをクリックしました";
}, 2000);
});