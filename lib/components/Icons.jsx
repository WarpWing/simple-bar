const Icon = ({ width = 24, height = 24, ...props }) => (
  <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} {...props}>
    {props.children}
  </svg>
);

export const Charging = (props) => (
  <Icon {...props}>
    <path d="M7 2v11h3v9l7-12h-4l3-8z" />
  </Icon>
);

export const Wifi = (props) => (
  <Icon {...props}>
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z" />
  </Icon>
);

export const Terminal = (props) => (
  <Icon {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z" fill="currentColor" /><path d="M15 14H11V16H15V14Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z" fill="currentColor" /></svg>
  </Icon>
)

export const Video = (props) => (
  <Icon {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z" fill="currentColor" /></svg>
  </Icon>
)

export const Agenda = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18H17V16H7V18Z" fill="currentColor" /><path d="M17 14H7V12H17V14Z" fill="currentColor" /><path d="M7 10H11V8H7V10Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" /></svg>
  </Icon>
)

export const Bias = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 18.939C14.2091 18.939 16 17.1482 16 14.939C16 12.7299 14.2091 10.939 12 10.939C9.79086 10.939 8 12.7299 8 14.939C8 17.1482 9.79086 18.939 12 18.939ZM12 16.939C13.1046 16.939 14 16.0436 14 14.939C14 13.8345 13.1046 12.939 12 12.939C10.8954 12.939 10 13.8345 10 14.939C10 16.0436 10.8954 16.939 12 16.939Z" fill="currentColor" /><path d="M12 9.04401C13.1046 9.04401 14 8.14858 14 7.04401C14 5.93944 13.1046 5.04401 12 5.04401C10.8954 5.04401 10 5.93944 10 7.04401C10 8.14858 10.8954 9.04401 12 9.04401Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M7 1C5.34315 1 4 2.34315 4 4V20C4 21.6569 5.34315 23 7 23H17C18.6569 23 20 21.6569 20 20V4C20 2.34315 18.6569 1 17 1H7ZM17 3H7C6.44772 3 6 3.44772 6 4V20C6 20.5523 6.44772 21 7 21H17C17.5523 21 18 20.5523 18 20V4C18 3.44772 17.5523 3 17 3Z" fill="currentColor" /></svg>
  </Icon>
)

export const Piano = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 21C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H22ZM11 5H8.98486V13H7.98511V19H12V13H11V5ZM18.0151 19H22V5H19.0151V13H18.0151V19ZM17.0151 13H16.0151V5H14V13H13V19H17.0151V13ZM6.98511 19V13H5.98486V5H3L3 19H6.98511Z" fill="currentColor" /></svg>
  </Icon>
)
export const Movies = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9C6.55228 9 7 8.55228 7 8C7 7.44772 6.55228 7 6 7Z" fill="currentColor" /><path d="M17 8C17 7.44772 17.4477 7 18 7C18.5523 7 19 7.44772 19 8C19 8.55228 18.5523 9 18 9C17.4477 9 17 8.55228 17 8Z" fill="currentColor" /><path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11Z" fill="currentColor" /><path d="M17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12Z" fill="currentColor" /><path d="M6 15C5.44772 15 5 15.4477 5 16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16C7 15.4477 6.55228 15 6 15Z" fill="currentColor" /><path d="M17 16C17 15.4477 17.4477 15 18 15C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17C17.4477 17 17 16.5523 17 16Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor" /></svg>
  </Icon>
)


export const Dashlane = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 8V13C7 15.7614 9.23858 18 12 18C14.7614 18 17 15.7614 17 13V8H7ZM5 4H19V13C19 16.866 15.866 20 12 20C8.13401 20 5 16.866 5 13V4Z" fill="currentColor" /></svg>
  </Icon>
)

export const Calculator = (props) => (
  <Icon { ...props }>
    <svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M17 5H7V7H17V5Z" fill="currentColor" />
  <path d="M7 9H9V11H7V9Z" fill="currentColor" />
  <path d="M9 13H7V15H9V13Z" fill="currentColor" />
  <path d="M7 17H9V19H7V17Z" fill="currentColor" />
  <path d="M13 9H11V11H13V9Z" fill="currentColor" />
  <path d="M11 13H13V15H11V13Z" fill="currentColor" />
  <path d="M13 17H11V19H13V17Z" fill="currentColor" />
  <path d="M15 9H17V11H15V9Z" fill="currentColor" />
  <path d="M17 13H15V19H17V13Z" fill="currentColor" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3C3 1.89543 3.89543 1 5 1H19C20.1046 1 21 1.89543 21 3V21C21 22.1046 20.1046 23 19 23H5C3.89543 23 3 22.1046 3 21V3ZM5 3H19V21H5V3Z"
    fill="currentColor"
  />
</svg>
  </Icon>
)


export const Preview = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 5.44772 18 6C18 6.55228 17.5523 7 17 7H7C6.44771 7 6 6.55228 6 6Z" fill="currentColor" /><path d="M6 10C6 9.44771 6.44772 9 7 9H17C17.5523 9 18 9.44771 18 10C18 10.5523 17.5523 11 17 11H7C6.44771 11 6 10.5523 6 10Z" fill="currentColor" /><path d="M7 13C6.44772 13 6 13.4477 6 14C6 14.5523 6.44771 15 7 15H17C17.5523 15 18 14.5523 18 14C18 13.4477 17.5523 13 17 13H7Z" fill="currentColor" /><path d="M6 18C6 17.4477 6.44772 17 7 17H11C11.5523 17 12 17.4477 12 18C12 18.5523 11.5523 19 11 19H7C6.44772 19 6 18.5523 6 18Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.34315 3.34315 1 5 1H19C20.6569 1 22 2.34315 22 4V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V4ZM5 3H19C19.5523 3 20 3.44771 20 4V20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V4C4 3.44772 4.44771 3 5 3Z" fill="currentColor" /></svg>
  </Icon>
)

export const Discord = (props) => (
  <Icon { ...props }>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 4C9 2.34315 10.3431 1 12 1C13.6569 1 15 2.34315 15 4V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V4ZM13 4V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4Z" fill="currentColor" /><path d="M18 12C18 14.973 15.8377 17.441 13 17.917V21H17V23H7V21H11V17.917C8.16229 17.441 6 14.973 6 12V9H8V12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12V9H18V12Z" fill="currentColor" /></svg>
  </Icon>
)


export const Firefox = (props) => (
  <Icon { ...props }>
    <path  d="M 12 3 C 8.933594 3 6.21875 4.53125 4.59375 6.875 C 4.324219 6.460938 4.078125 5.75 3.96875 5.03125 C 3.257813 5.730469 2.945313 7.011719 3.0625 8.71875 C 3.007813 8.792969 2.03125 10.058594 2.03125 11.25 C 2.027344 11.25 2.042969 11.519531 2.0625 11.59375 L 2.65625 11.125 C 2.445313 11.652344 2.328125 12.78125 2.34375 13.375 C 2.375 14.625 2.46875 16.324219 3.78125 18.21875 C 5.75 20.765625 8.269531 21.789063 11.25 21.96875 C 14.230469 22.144531 16.871094 21.210938 18.96875 18.84375 C 20.390625 17.101563 21.199219 15.734375 21.59375 13.84375 C 21.871094 12.523438 21.988281 11.058594 21.875 10.03125 C 21.785156 10.472656 21.570313 10.914063 21.34375 11.21875 C 21.316406 10.085938 21.25 8.859375 20.9375 7.96875 C 20.71875 7.371094 20.382813 6.519531 19.96875 5.96875 C 20.160156 6.726563 20.089844 7.414063 20.09375 7.84375 C 19.730469 6.566406 18.804688 5.417969 17.4375 4.84375 C 15.925781 3.691406 14.046875 3 12 3 Z M 12 4 C 12.78125 4 13.535156 4.132813 14.25 4.34375 C 14.160156 4.414063 14.078125 4.503906 14 4.5 C 15.304688 4.867188 16.199219 5.191406 16.3125 5.46875 C 15.832031 5.382813 15.382813 5.414063 15 5.5625 C 17.738281 6.640625 19.148438 8.453125 19 9.9375 C 18.800781 9.625 18.304688 9.121094 18 8.96875 C 18.417969 10.597656 18.558594 11.78125 18.21875 12.84375 C 17.984375 12.132813 17.628906 11.148438 17.4375 11 C 17.703125 13.183594 17.480469 15.351563 16.5 16.40625 C 16.59375 16.035156 16.605469 15.414063 16.5625 15 C 15.410156 16.730469 14.347656 17.507813 12.875 17.5625 C 12.027344 17.558594 10.996094 17.25 11 17.25 C 10.242188 16.996094 9.558594 16.566406 9.0625 15.9375 C 10.082031 16.222656 11.125 16.382813 11.75 16.0625 L 13.1875 15.1875 C 13.351563 15.125 13.476563 15.117188 13.625 15.1875 C 13.933594 15.144531 14.039063 14.992188 13.9375 14.71875 C 13.789063 14.511719 13.570313 14.320313 13.28125 14.15625 C 12.652344 13.828125 11.996094 13.878906 11.3125 14.3125 C 10.660156 14.679688 9.679688 14.3125 9 14.03125 C 8.75 13.925781 8.09375 13.40625 8.03125 13 C 7.960938 12.546875 8.117188 12.207031 8.46875 12.3125 C 8.367188 12.304688 9.5 12.503906 10.03125 12.65625 C 10.03125 12.058594 9.691406 11.460938 9.53125 11 C 10.027344 10.539063 10.683594 10.246094 11.0625 10.03125 C 11.519531 9.804688 11.480469 9.351563 11.3125 9.25 C 10.703125 9.308594 10.25 9.1875 10.25 9.1875 C 10.105469 9.144531 9.722656 8.964844 9.5 8.75 L 9.0625 8.34375 C 9.0625 8.34375 8.894531 8.207031 8.90625 8.125 C 9.070313 7.050781 9.878906 6.355469 10.40625 6 C 9.429688 6.121094 8.535156 6.558594 7.75 7.3125 C 7.222656 7.121094 6.390625 6.925781 5.6875 7.09375 C 7.152344 5.207031 9.433594 4 12 4 Z"/>
  </Icon>
)

export const Spotify = (props) => (
  <Icon {...props}>
      <path d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M16.057,16.406c-0.188,0-0.282-0.094-0.47-0.188 c-1.411-0.847-3.198-1.317-5.079-1.317c-1.035,0-2.163,0.188-3.104,0.376c-0.188,0-0.376,0.094-0.47,0.094 c-0.376,0-0.658-0.282-0.658-0.658c0-0.376,0.188-0.658,0.564-0.658c1.223-0.282,2.446-0.47,3.763-0.47 c2.163,0,4.139,0.564,5.832,1.505c0.188,0.188,0.376,0.282,0.376,0.658C16.621,16.218,16.339,16.406,16.057,16.406z M17.091,13.773 c-0.188,0-0.376-0.094-0.564-0.188c-1.599-1.035-3.857-1.599-6.302-1.599c-1.223,0-2.352,0.188-3.198,0.376 c-0.188,0.094-0.282,0.094-0.47,0.094c-0.47,0-0.753-0.376-0.753-0.753c0-0.47,0.188-0.658,0.658-0.847 c1.129-0.282,2.258-0.564,3.857-0.564c2.634,0,5.079,0.658,7.149,1.881c0.282,0.188,0.47,0.47,0.47,0.753 C17.844,13.396,17.562,13.773,17.091,13.773z M18.314,10.762c-0.188,0-0.282-0.094-0.564-0.188 c-1.881-1.035-4.609-1.693-7.243-1.693c-1.317,0-2.728,0.188-3.951,0.47c-0.188,0-0.282,0.094-0.564,0.094 C5.428,9.54,5.051,9.069,5.051,8.505c0-0.564,0.282-0.847,0.658-0.941C7.215,7.188,8.814,7,10.507,7 c2.916,0,5.926,0.658,8.278,1.881c0.282,0.188,0.564,0.47,0.564,0.941C19.255,10.386,18.878,10.762,18.314,10.762z"/>
  </Icon>
)

export const WifiOff = (props) => (
  <Icon {...props}>
    <path d="M21 11l2-2c-3.73-3.73-8.87-5.15-13.7-4.31l2.58 2.58c3.3-.02 6.61 1.22 9.12 3.73zM9 17l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm10-4c-1.08-1.08-2.36-1.85-3.72-2.33l3.02 3.02.7-.69zM3.41 1.64L2 3.05 5.05 6.1C3.59 6.83 2.22 7.79 1 9l2 2c1.23-1.23 2.65-2.16 4.17-2.78l2.24 2.24C7.79 10.89 6.27 11.74 5 13l2 2c1.35-1.35 3.11-2.04 4.89-2.06l7.08 7.08 1.41-1.41L3.41 1.64z" />
  </Icon>
);

export const VolumeHigh = (props) => (
  <Icon {...props}>
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
  </Icon>
);

export const VolumeLow = (props) => (
  <Icon {...props}>
    <path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z" />
  </Icon>
);

export const NoVolume = (props) => (
  <Icon {...props}>
    <path d="M7 9v6h4l5 5V4l-5 5H7z" />
  </Icon>
);

export const VolumeMuted = (props) => (
  <Icon {...props}>
    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
  </Icon>
);

export const Figma = (props) => (
  <Icon {...props}>
    <path d="M8 24c.5 0 1 0 1.5-.3a4 4 0 0 0 1.3-.7c.4-.4.7-.7.9-1.2.2-.4.3-.8.3-1.3V17H8c-.5 0-1 0-1.5.3a4 4 0 0 0-1.3.7c-.4.4-.7.7-.9 1.2a3.1 3.1 0 0 0 0 2.6c.2.5.5.8.9 1.2.3.3.8.6 1.3.7L8 24zM4 12.5c0-1.2.4-2.3 1.2-3.2C5.9 8.5 6.9 8 8 8h4v9H8c-1 0-2-.5-2.8-1.3-.8-.9-1.2-2-1.2-3.2zM4 4a4 4 0 0 1 4-4h4v8H8a4 4 0 0 1-4-4zM12 0h4a4 4 0 1 1 0 8h-4V0z" />
    <path d="M20 12.5a5 5 0 0 1-.7 2.5c-.4.7-1 1.3-1.8 1.7-.7.3-1.5.4-2.3.2-.8-.2-1.5-.6-2-1.2-.6-.6-1-1.4-1.1-2.3a5 5 0 0 1 .2-2.6c.3-.8.8-1.5 1.5-2 .6-.5 1.4-.8 2.2-.8 1 0 2 .5 2.8 1.3.8.9 1.2 2 1.2 3.2z" />
  </Icon>
);

export const Zeplin = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.7 15.23l-1.26.46-.06 3.73 4.34-1.59c-1.49-.5-2.58-1.38-3.02-2.6zM4.36 11.28L0 12.87l2.44 2.82 1.26-.46c-.44-1.22-.17-2.6.66-3.95z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.69 5.89c-5.55 2.02-9.13 6.2-8 9.34l20.1-7.34c-1.14-3.13-6.56-4.03-12.1-2z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.8 17.23c5.55-2.03 9.13-6.2 7.99-9.34l-20.1 7.34c1.15 3.15 6.56 4.02 12.11 2z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.79 7.89l-20.1 7.34c.4 1.08 1.9 1.62 4 1.62 2.06 0 4.69-.51 7.42-1.51 5.55-2.03 9.45-5.3 8.68-7.45z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.79 6.27c-2.05 0-4.68.5-7.42 1.5-5.54 2.03-9.45 5.31-8.67 7.46l20.09-7.34c-.4-1.09-1.9-1.62-4-1.62z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.68 19.62c-.6 0-1.46-.54-2.6-1.59a33.48 33.48 0 0 1-4.3-5.14 33.54 33.54 0 0 1-3.34-5.81c-.77-1.84-.88-2.97-.32-3.36a.74.74 0 0 1 .43-.13c.46 0 1.34.34 2.96 1.94l.04.03v.05l-.03.35-.02.23-.16-.16C9.58 4.26 8.8 4.07 8.56 4.07a.3.3 0 0 0-.17.04c-.24.17-.26 1 .5 2.78.69 1.65 1.86 3.69 3.28 5.73a33 33 0 0 0 4.24 5.06c1.42 1.32 2.05 1.46 2.26 1.46a.3.3 0 0 0 .18-.04c.25-.18.25-1.07-.59-2.99l-.03-.08.08-.05.24-.13.1-.06.05.1c.6 1.36 1.15 3.09.42 3.6a.75.75 0 0 1-.44.13zm0-.21v.1-.1z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.93 17.17v.1c-.14 1.74-.51 3.83-1.48 3.91h-.06c-.65 0-1.27-.93-1.83-2.78-.54-1.75-.96-4.1-1.18-6.61-.21-2.52-.21-4.9.01-6.72.25-1.97.72-3 1.4-3.07h.05c.48 0 1.2.54 1.92 3.04l-.47.1a9.78 9.78 0 0 0-.78-2c-.24-.42-.48-.66-.67-.66h-.02c-.29.02-.72.74-.95 2.65a33.14 33.14 0 0 0-.01 6.62c.21 2.48.62 4.8 1.15 6.5.24.78.5 1.41.75 1.84.23.4.46.62.63.62h.02c.28-.03.81-.77 1.03-3.37l.5-.17z"
    />
  </Icon>
);

export const Code = (props) => (
  <Icon {...props}>
    <path d="M8.54 14.69L2.6 19.3 0 18.02V5.99l2.58-1.3L8.5 9.33 17.85 0 24 2.44v19.08L17.88 24l-9.34-9.31zm9.12 1.62V7.7L12.06 12l5.6 4.3zM2.8 14.76l2.94-2.66L2.8 9.18v5.58z" />
  </Icon>
);

export const GoogleChrome = (props) => (
  <Icon {...props}>
    <path d="M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
    <path d="M12 17.99a6 6 0 0 1-5.94-5.18L1.92 5.64v-.02l-.47.67c-.11.21-.23.42-.33.64l-.22.52c-.15.38-.29.76-.4 1.15l-.14.48c-.06.22-.1.44-.15.67l-.08.47-.08.66-.04.52c-.02.4-.02.8 0 1.2l.04.52.08.66.08.47.15.67.13.48.2.62.21.54.22.52.33.63.15.3.07.1c.13.23.28.45.42.66l.24.35c.14.2.3.38.45.57l.31.37.43.43c.14.14.28.29.43.42l.37.31.56.45.35.24c.22.15.43.3.66.42l.1.07.3.15c.2.12.42.23.64.33l.06.03.3.13c.81.34 1.66.59 2.53.75l3.42-5.94c-.4.08-.81.13-1.24.13v.01z" />
    <path d="M23.97 11.17l-.02-.2c-.08-1-.5-2.45-.83-3.42h-7.1a5.97 5.97 0 0 1-.29 9.13L11.51 24c1.49 0 3.49-.27 4.92-.84l.05-.02.08-.03c.94-.39 1.83-.9 2.65-1.5l.02-.02c.37-.28.71-.57 1.04-.88l.05-.05.17-.17c.72-.72 1.35-1.53 1.86-2.4l.05-.08.1-.2c.17-.3.32-.6.46-.92l.18-.41c.12-.3.22-.6.31-.9l.13-.38c.11-.42.2-.84.27-1.27l.03-.24c.06-.36.1-.73.11-1.1v-.3c.01-.37 0-.75-.02-1.12z" />
    <path d="M22.4 6c-.25-.44-.54-.85-.83-1.24l-.1-.12a11.6 11.6 0 0 0-.84-.98l-.2-.2c-.33-.32-.67-.63-1.02-.9l-.08-.07c-.4-.3-.81-.58-1.24-.83l-.08-.06-.33-.17c-.19-.1-.37-.2-.57-.29L16.55.9l-.47-.19L15.4.5 15 .4c-.25-.07-.5-.12-.75-.17L13.9.15l-.74-.1-.4-.03C12.54 0 12.33 0 12.12 0h-.52l-.4.03a12 12 0 0 0-2.68.49l-.18.04-.67.25-.42.17-.54.26-.52.26-.2.1-.28.19c-.34.2-.67.43-.99.67l-.41.33-.5.44-.3.3c-.18.17-.36.36-.52.54l-.11.14 3.41 5.92A6 6 0 0 1 12 5.99h10.4V6z" />
  </Icon>
);

export const Skype = (props) => (
  <Icon {...props}>
    <path d="M23.3 14.55C25.06 6.74 18.2-.35 10.18 1 5.81-1.7 0 1.36 0 6.55c0 1.2.33 2.33.91 3.3C-.7 17.69 6.2 24.69 14.22 23.23c.94.5 2 .78 3.14.78a6.55 6.55 0 0 0 5.95-9.45zm-11.2 5.33c-2.35 0-4.63-.57-5.99-2.5-2.02-2.85.64-4.28 1.95-3.2 1.1.93.75 3.15 3.95 3.15 1.41 0 3.15-.6 3.15-2 0-2.82-6.24-1.49-8.73-4.55a3.77 3.77 0 0 1 .04-4.55c1.95-2.51 7.68-2.67 10.14-.77 2.28 1.76 1.66 4.1-.17 4.1-2.2 0-1.05-2.89-4.61-2.89-2.58 0-3.6 1.84-1.78 2.73 2.42 1.2 8.75.83 8.75 5.6 0 3.36-3.25 4.88-6.7 4.88z" />
  </Icon>
);

export const Music = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm4.28-18.93l.5-.07c.23 0 .39.12.45.34.02.07.01 9.1.01 10.6a1.9 1.9 0 0 1-1.37 1.76c-.47.14-1.15.2-1.48.12-.3-.07-.52-.2-.75-.44-.35-.34-.5-.7-.5-1.15 0-.25.04-.44.16-.7.17-.36.4-.57.79-.77.31-.16.6-.24 1.42-.41.54-.12.76-.16.87-.29.15-.17.04-5.36 0-5.43-.07-.1-.2-.14-.35-.12l-5.62 1.13a.4.4 0 0 0-.29.32l-.02 1.34c-.01 2.2-.05 6.39-.16 6.7a2.3 2.3 0 0 1-.18.37c-.14.2-.4.46-.6.58-.5.29-1.45.44-1.96.3-.54-.14-.94-.5-1.12-1.03-.09-.24-.1-.65-.05-.93.07-.28.22-.55.41-.75.35-.35.77-.52 1.88-.74l.55-.13a.64.64 0 0 0 .34-.32c.04-.1.07-8.5.07-8.5l.06-.1a.7.7 0 0 1 .36-.34c.1-.03 5.64-1.16 6.58-1.34z"
    />
  </Icon>
);

export const SequelPro = (props) => (
  <Icon {...props}>
    <path d="M24 16.2c0 3.76-5.37 6.8-12 6.8S0 19.96 0 16.2c0-3.75 5.37-6.8 12-6.8s12 3.05 12 6.8z" />
    <path d="M20.62 15.58c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 12.75c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 10.14c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 7.32c0 2.6-3.72 4.7-8.31 4.7-4.6 0-8.31-2.1-8.31-4.7s3.72-4.7 8.3-4.7c4.6 0 8.32 2.1 8.32 4.7z" />
    <path d="M20.62 4.7c0 2.6-3.72 4.7-8.31 4.7C7.7 9.4 4 7.3 4 4.7S7.72 0 12.3 0c4.6 0 8.32 2.1 8.32 4.7z" />
  </Icon>
);

export const Slack = (props) => (
  <Icon {...props}>
    <path d="M8.8 12.7a2.5 2.5 0 0 0-2.5 2.5v6.3a2.5 2.5 0 0 0 5 0v-6.3c0-1.4-1-2.5-2.5-2.5zM0 15.2a2.5 2.5 0 0 0 5 0v-2.6H2.6A2.5 2.5 0 0 0 0 15.2zM8.8 0a2.5 2.5 0 0 0 0 5h2.6V2.5c0-1.4-1.2-2.5-2.6-2.5zM2.5 11.4h6.3a2.5 2.5 0 0 0 0-5H2.5a2.5 2.5 0 0 0 0 5zM21.5 6.3a2.5 2.5 0 0 0-2.6 2.5v2.6h2.6a2.5 2.5 0 0 0 0-5zM12.6 2.5v6.3a2.5 2.5 0 0 0 5 0V2.5a2.5 2.5 0 0 0-5 0zM17.7 21.5c0-1.4-1.1-2.5-2.5-2.5h-2.6v2.5a2.5 2.5 0 0 0 5 0zM21.5 12.6h-6.3a2.5 2.5 0 0 0 0 5.1h6.3a2.5 2.5 0 0 0 0-5z" />
  </Icon>
);

export const AndroidMessages = (props) => (
  <Icon {...props}>
    <path d="M.61 5.7a.3.3 0 0 1 0-.48l2.42-1.86a.3.3 0 0 1 .48.24V7.3a.3.3 0 0 1-.48.24L.6 5.69z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 3.3H3.18v16.1c0 1.1.9 2 2 2H22a2 2 0 0 0 2-2V5.3a2 2 0 0 0-2-2zM9.15 8.66a.64.64 0 1 0 0 1.28h8.88a.64.64 0 0 0 0-1.28H9.15zm-.64 3.67c0-.35.3-.64.64-.64h8.88a.64.64 0 1 1 0 1.28H9.15a.64.64 0 0 1-.64-.64zm.64 2.4a.64.64 0 1 0 0 1.27h8.88a.64.64 0 1 0 0-1.28H9.15z"
    />
  </Icon>
);

export const Caprine = (props) => (
  <Icon {...props}>
    <path d="M12 0C5.37 0 0 4.97 0 11.11c0 3.5 1.74 6.62 4.47 8.65V24l4.09-2.24c1.09.3 2.24.46 3.44.46 6.63 0 12-4.97 12-11.1C24 4.97 18.63 0 12 0zm1.2 14.96l-3.06-3.26-5.97 3.26L10.73 8l3.13 3.26L19.76 8l-6.57 6.96z" />
  </Icon>
);

export const Default = (props) => (
  <Icon {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 2a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm1.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM9 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM11.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
    />
  </Icon>
);
