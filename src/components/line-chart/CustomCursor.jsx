import { Rectangle } from "recharts";

const CustomCursor = ({ points, width, height }) => {
  if (!points || points.length === 0) return null;
  const { x } = points[0];
  return (
    <Rectangle
      x={x}
      y={0}
      width={width}
      height={height * 2}
      fill="rgba(0, 0, 0, 0.1)"
    />
  );
};

export default CustomCursor;
