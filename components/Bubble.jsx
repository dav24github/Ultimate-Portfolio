import classes from "./Bubble.module.scss";

export const Bubble = () => {
  return (
    <div className={classes.bubble}>
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: "rgb(14, 173, 198)" }}></stop>
            <stop
              offset="100%"
              style={{ stopColor: "rgb(142, 96, 211)" }}
            ></stop>
          </linearGradient>
        </defs>

        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="8000ms"
            repeatCount="indefinite"
            values="M418.5,336Q387,422,295,439.5Q203,457,132.5,399Q62,341,55,247Q48,153,127,105.5Q206,58,294,71.5Q382,85,416,167.5Q450,250,418.5,336Z;
              M425,322Q364,394,281.5,434.5Q199,475,128.5,408.5Q58,342,66.5,254Q75,166,136.5,94.5Q198,23,282,64Q366,105,426,177.5Q486,250,425,322Z;
              M420.5,321.5Q364,393,286,413Q208,433,145.5,381.5Q83,330,75,246Q67,162,137.5,114Q208,66,298.5,71Q389,76,433,163Q477,250,420.5,321.5Z;
              M426.5,324.5Q369,399,285,431.5Q201,464,132,402Q63,340,76.5,256.5Q90,173,146,106.5Q202,40,284,72Q366,104,425,177Q484,250,426.5,324.5Z;
              M418.5,336Q387,422,295,439.5Q203,457,132.5,399Q62,341,55,247Q48,153,127,105.5Q206,58,294,71.5Q382,85,416,167.5Q450,250,418.5,336Z"
          ></animate>
        </path>
        <image
          x="170"
          y="160"
          className={classes.img}
          xlinkHref="/assets/code.png"
        />
      </svg>
    </div>
  );
};
