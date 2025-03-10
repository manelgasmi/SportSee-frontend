import { Rectangle } from "recharts";

/**
 * CustomCursor - Draws the hover effect in a line chart.
 *
 * @component
 *
 * @param {*} props - The component props.
 * @param {*} props.points - The array of points from the chart.
 * @param {*} props.width - The width of the cursor.
 * @param {*} props.height - The height of the cursor.
 *
 * @returns {JSX.Element | null} The custom cursor element or null if no points exist.
 */
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
