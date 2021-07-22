$(document).ready(function () {


// const answer = false;
if (answer) {
  new LeaderLine(box_0, box_1, {
    color: '#696969',
    endPlugSize: 0.1,
  });
  new LeaderLine(box_1, box_2, {
    color: '#696969',
    endPlugSize: 0.1,
  });
  new LeaderLine(box_2, box_3, {
    color: '#696969',
    endPlugSize: 0.1,
  });
} else {
  new LeaderLine(box_0, box_1, {
    dash: {animation: true, len: 6, gap: 9},
    color: '#696969',
    endPlugSize: 0.1,
  });
  new LeaderLine(box_1, box_2, {
    dash: {animation: true, len: 6, gap: 9},
    color: '#696969',
    endPlugSize: 0.1,
  });
  new LeaderLine(box_2, box_3, {
    dash: {animation: true, len: 6, gap: 9},
    color: '#696969',
    endPlugSize: 0.1,
  });
}


});
