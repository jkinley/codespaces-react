export default function AutoGrid({children, width, gap}) {
  
  width = width || '250px';
  gap = gap || '1rem';

  const grid = {
    gap: `${gap}`,
    gridTemplateColumns: `repeat(auto-fit, minmax(min(${width},100%), 1fr))`
  }

  return(
    <div className="autogrid" style={grid}>
      {children}
    </div>
  );
};