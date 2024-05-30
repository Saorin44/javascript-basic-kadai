// btnというidを持つHTML要素を取得し、定数に代入する
const onBtn = document.getElementById('btn')

// textというidを持つHTML要素を取得し、定数に代入する
const chaText = document.getElementById('text')

btn.addEventListener('click', () => {
// textというidを持つHTML要素の文字を変更
  chaText.textContent="ボタンをクリックしました";
});