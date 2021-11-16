const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      background: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4px',
    }}
    onClick={onClick}
  />
);

export default NextArrow;
