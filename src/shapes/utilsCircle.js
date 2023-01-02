const defaultCircle = (point, strokeWidth, color) => {
  return {
    x: point.x,
    y: point.y,
    radius: 1,
    strokeWidth: strokeWidth,
    stroke: color,
  };
};

const changeRadius = (circle, point) => {
  const newRadius = Math.abs(circle.x - point.x) + Math.abs(circle.y - point.y);
  return {
    ...circle,
    radius: newRadius,
  };
};

export { defaultCircle, changeRadius };
