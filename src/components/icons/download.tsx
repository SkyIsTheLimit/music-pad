export function DownloadIcon(props: { onClick: () => void }) {
  return (
    <svg
      version='1.1'
      viewBox='0 0 330 330'
      className={`w-6 h-6 hover:stroke-neutral-50 stroke-neutral-500 hover:fill-neutral-50 fill-neutral-500 cursor-pointer mx-2`}
    >
      <g>
        <path
          d='M165,0C74.019,0,0,74.018,0,165c0,90.98,74.019,165,165,165s165-74.02,165-165C330,74.018,255.981,0,165,0z M165,300
		c-74.439,0-135-60.561-135-135S90.561,30,165,30s135,60.561,135,135S239.439,300,165,300z'
        />
        <path
          d='M211.667,127.121l-31.669,31.666V75c0-8.285-6.716-15-15-15c-8.284,0-15,6.715-15,15v83.787l-31.665-31.666
		c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.859-5.858,15.355,0,21.213l57.271,57.271c2.929,2.93,6.768,4.395,10.606,4.395
		c3.838,0,7.678-1.465,10.607-4.393l57.275-57.271c5.857-5.857,5.858-15.355,0.001-21.215
		C227.021,121.264,217.524,121.264,211.667,127.121z'
        />
        <path d='M195,240h-60c-8.284,0-15,6.715-15,15c0,8.283,6.716,15,15,15h60c8.284,0,15-6.717,15-15C210,246.715,203.284,240,195,240z' />
      </g>
    </svg>
  );
}