import React from "react";

type TSvgSelectorProps = {
  id: string;
  className?: string;
  style?: Record<string, string>;
};

type TSvgMapItem = Record<string, JSX.Element>;

const SvgSelector: React.FC<TSvgSelectorProps> = ({ id, className, style }) => {
  const svgMap: TSvgMapItem = {
    search: (
      <svg className={className} style={style} viewBox="0 0 24 24">
        <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
      </svg>
    ),
    placeholder: (
      <svg className={className} style={style} viewBox="0 0 30 26">
        <path
          d="M25.6929 3.07269H4.30809C3.22416 3.07269 2.34546 3.95139 2.34546 5.03531V20.9654C2.34546 22.0494 3.22416 22.928 4.30809 22.928H25.6929C26.7768 22.928 27.6555 22.0494 27.6555 20.9654V5.03531C27.6555 3.95139 26.7768 3.07269 25.6929 3.07269Z"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path d="M5.18188 20.0916V17.434L9.59697 13.0189L11.7974 15.2205L18.928 8.09111L24.7645 13.9277V20.0916H5.18188Z" />
        <path d="M10.4185 8.52751C10.3595 11.9695 5.2397 11.9684 5.18188 8.52751C5.24079 5.08555 10.3606 5.08664 10.4185 8.52751Z" />
      </svg>
    ),
    burger: (
      <svg
        className={className}
        style={style}
        viewBox="0 30 20 20"
        fill="#7E8DB7"
      >
        <rect y="35.5" width="20" height="2" rx="1" fill="#7E8DB7" />
        <rect y="42.5" width="20" height="2" rx="1" fill="#7E8DB7" />
      </svg>
    ),
  };

  if (!svgMap.hasOwnProperty(id)) {
    console.warn(`Svg with id "${id}" doesn't exist`);
    return svgMap.placeholder;
  }

  return svgMap[id];
};

export default React.memo(SvgSelector);
