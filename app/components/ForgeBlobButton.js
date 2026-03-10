"use client";

export default function ForgeBlobButton({ className = "" }) {
  const classes = className ? `u-btn--2 ${className}` : "u-btn--2";

  return (
    <span className={classes} aria-hidden="true">
      <i className="btn_icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="51" height="48" fill="none" viewBox="0 0 51 48">
          <path fill="currentColor" d="M6.728 9.09A12 12 0 0 1 18.369 0H39c6.627 0 12 5.373 12 12v24c0 6.627-5.373 12-12 12H12.37C4.561 48-1.167 40.663.727 33.09l6-24Z" />
        </svg>
      </i>
    </span>
  );
}
