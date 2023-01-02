const defaultLine = (point, strokeWidth, color) => {
  return {
    points: [point.x, point.y],
    strokeWidth: strokeWidth,
    stroke: color,
  };
};

const addEndPoint = (line, point, startPoint) => {
  return {
    ...line,
    points: [startPoint.x, startPoint.y, point.x, point.y],
  };
};

const addCurvePoint = (line, point) => {
  return {
    ...line,
    points: [...line.points, point.x, point.y],
  };
};

export { defaultLine, addEndPoint, addCurvePoint };
