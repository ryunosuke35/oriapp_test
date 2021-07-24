var datas = {0: false, 1: true, 2: false, 3: true, 4: true, 5: false, 6: true, 7:false};

$(document).ready(function () {

  Object.keys(datas).forEach(function(key) {

    num = parseInt(key) + 1;

    if (datas[key]){
      new LeaderLine(
        document.getElementById("box_" + key),
        document.getElementById("box_" + num), {
          color: '#696969',
          endPlugSize: 0.1
        }
      );
    }else {
      new LeaderLine(
      document.getElementById("box_" + key),
        document.getElementById("box_" + num),{
          dash: {animation: true, len: 6, gap: 9},
          color: '#696969',
          endPlugSize: 0.1
        }
      );
    }
  });
});
