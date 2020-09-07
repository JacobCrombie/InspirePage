function mytime() {
  var d = new Date();
  // @ts-ignore
  ap = "am";
  // @ts-ignore
  h = d.getHours();
  // @ts-ignore
  m = d.getMinutes();
  // @ts-ignore
  s = d.getSeconds();
  // @ts-ignore
  if (h > 11) { ap = "pm"; }
  // @ts-ignore
  if (h > 12) { h = h - 12; }
  // @ts-ignore
  if (h == 0) { h = 12; }
  // @ts-ignore
  if (m < 10) { m = "0" + m; }
  // @ts-ignore
  if (s < 10) { s = "0" + s; }
  // @ts-ignore
  document.getElementById('time').innerHTML = h + ":" + m + ap;
  // @ts-ignore
  t = setTimeout('mytime()', 500);
}