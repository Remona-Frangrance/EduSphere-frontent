

export const AnimatedOpenBook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="60"
    height="60"
    style={{
      animation: 'openBook 2s infinite alternate',
      marginRight: '10px', // Space between icon and text
    }}
  >
    <path
      d="M10,40 Q30,20 50,40 Q70,60 90,40"
      stroke="#1976D2"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M10,50 Q30,30 50,50 Q70,70 90,50"
      stroke="#1976D2"
      strokeWidth="2"
      fill="none"
    />
    <style>
      {`
        @keyframes openBook {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}
    </style>
  </svg>
);
