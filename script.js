function getlasfibo(k) {
  var arr = [];
  arr = [1, 1];
  var f1 = 1;
  var f2 = 1;
  var sum = 0;
  for (let j = 1; j < k; j++) {
    sum = f1 + f2;
    arr.push(sum);
    f1 = f2;
    f2 = sum;
  }
  return arr;
}

function getprimenum(k) {
  var arr = [];
  for (let i = 2; i <= k; i++) {
    var cnt = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        cnt++;
        break;
      }
    }
    if (cnt == 0) arr.push(i);
  }
  return arr;
}
function generatetable(flag) {
    var getinput = parseInt(document.getElementById('inputelement').value) - 1;
    if(!flag && getinput > 10){
        var ele = document.getElementById('errormsg');
        ele.style.display='block';
        return;
    }
    var ele = document.getElementById('errormsg');
        ele.style.display='none';
  var table = document.getElementById("fibotable");
  var tblBody = document.createElement("tbody");
  for (var i = 0; i < getinput; i++) {
    var row = document.createElement("tr");

    for (var j = 0; j < 4; j++) {
      var cell = document.createElement("td");
      if (j === 0) {
        var cellText = document.createTextNode(i + 2);
      } 
      else if (j === 1) {
        let arr = getlasfibo(i + 2);
        let lastfibo = arr.pop();
        var cellText = document.createTextNode(lastfibo);
      } 
      else if (j === 2) {
        let arr = getlasfibo(i + 2);
        var cellText = document.createTextNode("(" + arr + ")");
      } 
      else {
        let arr = getlasfibo(i + 2);
        let lastfibo = arr.pop();
        let arrprime = getprimenum(lastfibo);
        var cellText = document.createTextNode("(" + arrprime + ")");
      }
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    tblBody.appendChild(row);
  }

  table.appendChild(tblBody);
  var inp = document.getElementById('inputelement');
  inp.style.display='none';
  var but = document.getElementsByTagName('button')[0];
  but.style.display='none';
}