$(document).ready( function() {
    $.plot($("#placeholder"), [ [[0, 0], [1, 2]], [[1,1], [2,2]] ], { yaxis: { max: 2 } });
});