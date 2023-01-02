const defaultPolygon = (point, strokeWidth, color, sides) => {
  return {
    x: point.x,
    y: point.y,
    sides: sides,
    radius: 1,
    strokeWidth: strokeWidth,
    stroke: color,
  };
};

const changeRadius = (polygon, point) => {
  const newRadius =
    Math.abs(polygon.x - point.x) + Math.abs(polygon.y - point.y);
  return {
    ...polygon,
    radius: newRadius,
  };
};

export { defaultPolygon, changeRadius };
