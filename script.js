function onKeyDown(event){
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = new Point.random();
  var point = maxPoint * randomPoint;
  new Path.Circle(point, 10).fillColor = "green";
}