var circles = [];

function onKeyDown(event){
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = new Point.random();
  var point = maxPoint * randomPoint;
  var circle = new Path.Circle(point, 500);
  circle.fillColor = "yellow";
  circles.push(circle);
}

function onFrame(event){
  for(var i = 0; i < circles.length; i++){
    circles[i].fillColor.hue += 1;
    circles[i].scale(0.9);
  };
}

