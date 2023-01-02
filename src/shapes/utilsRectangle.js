const defaultRect = (point, strokeWidth, color) => {
  return {
    x: point.x,
    y: point.y,
    width: 1,
    height: 1,
    strokeWidth: strokeWidth,
    stroke: color,
  };
};

const changeWidthHeight = (rect, point, startPoint) => {
  const newWidth = Math.abs(startPoint.x - point.x);
  const newHeight = Math.abs(startPoint.y - point.y);

  return {
    ...rect,
    x: Math.min(startPoint.x, point.x),
    y: Math.min(startPoint.y, point.y),
    width: newWidth,
    height: newHeight,
  };
};

export { defaultRect, changeWidthHeight };
