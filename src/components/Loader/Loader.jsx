import React from 'react';
import './Loader.scss';

export default function Loader() {
  return (
    <div className='loader'>
        <svg className="lp" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#000" />
                    <stop offset="100%" stop-color="#fff" />
                </linearGradient>
                <mask id="mask1">
                    <rect x="0" y="0" width="128" height="128" fill="url(#grad1)" />
                </mask>
            </defs>
            <g fill="none" stroke-linecap="round" stroke-width="16">
                <circle className="lp__ring" r="56" cx="64" cy="64" stroke="#ddd" />
                <g stroke="hsl(183,90%,40%)">
                    <polyline className="lp__fall-line" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay1" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay2" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay3" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay4" points="64,8 64,120" />
                    <circle className="lp__drops" r="56" cx="64" cy="64" transform="rotate(90,64,64)" />
                    <circle className="lp__worm" r="56" cx="64" cy="64" transform="rotate(-90,64,64)" />
                </g>
                <g stroke="hsl(93,90%,40%)" mask="url(#mask1)">
                    <polyline className="lp__fall-line" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay1" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay2" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay3" points="64,8 64,120" />
                    <polyline className="lp__fall-line lp__fall-line--delay4" points="64,8 64,120" />
                    <circle className="lp__drops" r="56" cx="64" cy="64" transform="rotate(90,64,64)" />
                    <circle className="lp__worm" r="56" cx="64" cy="64" transform="rotate(-90,64,64)" />
                </g>
            </g>
        </svg>
    </div>
  );
}