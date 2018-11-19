'use strict';

function TimeDisplay() {
  let date = new Date();
  date.setTime(date.getTime() + 1000 * 60 * 60 * 9);

  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  //getdayの数字で一文字を抽出。
  const week = '日月火水木金土'.charAt(date.getDay());

  const h = date.getHours();
  const min = date.getMinutes();
  const s = date.getSeconds();

  //　二桁目に０を付け加える関数。
  function add0(num) {

    //右から2文字目でカットする関数。例)07;012:022 → 07:12:22
    return ('0' + num).slice(-2);

  };

  //実際に表示される部分
  return `${y}年${m}月${d}日 (${week}) ` + add0(h) + ':' + add0(min) + ':' + add0(s) + ` (JST)`;

}

module.exports = {
  TimeDisplay
};