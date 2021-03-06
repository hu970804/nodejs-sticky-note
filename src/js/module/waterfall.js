var WaterFall = (function() {
  var $ct;
  var $items;

  function render($c) {
    $ct = $c;
    $items = $ct.children();

    var nodeWidth = $items.outerWidth(true);
    var colNum = parseInt($(window).width() / nodeWidth);
    var colSumHeight = [];

    for(var i = 0;i < colNum;i++) {
      colSumHeight.push(0);
    }

    $items.each(function() {
      var $cur = $(this);

      var idx = 0;
      var minSumHeight = colSumHeight[0];

      for(var i = 0;i < colSumHeight.length;i++){
        if(colSumHeight[i] < minSumHeight) {
          idx = i;
          minSumHeight = colSumHeight[i];
        }
      }

      $cur.css ({
        left: nodeWidth * idx,
        top: minSumHeight
      });
      colSumHeight[idx] = $cur.outerHeight(true) + colSumHeight[idx];
    });
  }

  $(window).on('resize', function() {
    render($ct);
  })

  return {
    init: render
  }
})();


module.exports = WaterFall;