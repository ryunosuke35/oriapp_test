$(document).ready(function () {

  let max = count.reduce(function(a, b){
    return Math.max(a, b);
  });


  for (let i = 0; i < max; i++) {
    start = i;
    end = i + 1;

    if (answer){
      new LeaderLine(
        document.getElementById("box_" + start),
        document.getElementById("box_" + end), {
          color: '#696969',
          endPlugSize: 0.1
        }
      );
    }else {
      new LeaderLine(
      document.getElementById("box_" + start),
        document.getElementById("box_" + end),{
          dash: {animation: true, len: 6, gap: 9},
          color: '#696969',
          endPlugSize: 0.1
        }
      );
    }
  };
});
