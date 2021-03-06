import { Theme } from './Theme.js';

export const SpacesDisplayStyles = `
.spaces-display {
  flex: 0 0 auto;
  display: flex;
  list-style: none;
} 
.space {
  display: flex;
  align-items: center;
  margin-right: 6px;
  padding: 3px 6px;
  background-color: ${Theme.minor};
  transition: background-color 160ms ${Theme.easing}, color 160ms ${Theme.easing};
}
.space--focused {
  color: ${Theme.minor};
  background-color: white;
}
.space > svg {
  width: 11px;
  height: 11px;
  margin-left: 6px;
  fill: currentColor;
}
.space > span {
  margin-left: 6px;
}
`;

export const ProcessStyles = `
.process {
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 40%;
  text-align: center;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
`;

export const BatteryStyles = `
.battery {
  display: flex;
  align-items: center;
  padding: 3px 7px;
  background-color: ${Theme.magenta}
}
.battery__charging-icon {
  width: 10px;
  height: 10px;
  margin: 2px 2px 0 0;
  fill: ${Theme.main};
}
.battery--low .battery__charging-icon {
  fill: ${Theme.red};
}
.battery__icon {
  position: relative;
  width: 14px;
  height: 8px;
  margin-right: 8px;
  border: 1px solid ${Theme.main};
}
.battery--low .battery__icon {
  border: 1px solid ${Theme.red};
}
.battery__icon:after {
  content: '';
  position: absolute;
  top: 10%;
  left: 100%;
  width: 3px;
  height: 80%;
  background-color: ${Theme.main};
}
.battery--low .battery__icon:after {
  background-color: ${Theme.red};
}
.battery__icon-filler {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Theme.main};
  transform scaleX(0);
  transform-origin: left center;
  transition: transform 160ms ${Theme.easing};
}
.battery--low .battery__icon-filler {
  background-color: ${Theme.red};
}
`;

export const SoundStyles = `
  .sound {
    display: flex;
    align-items: center;
    padding: 3px 7px;
    background-color: ${Theme.blue}
  }
  .sound__icon {
    width: 14px;
    height: 14px;
    margin-right: 4px;
    fill: ${Theme.main};
  }
`;

export const WifiStyles = `
  .wifi {
    display: flex;
    align-items: center;
    padding: 3px 7px;
    background-color: ${Theme.red}
  }
  .wifi__icon {
    width: 14px;
    height: 14px;
    margin-right: 7px;
    fill: ${Theme.main};
  }
  .wifi--inactive .wifi__icon {
    fill: ${Theme.red}
  }
`;

export const DateStyles = `
.date {
  padding: 3px 7px;
  background-color: ${Theme.cyan}
}
`;

export const TimeStyles = `
.time {
  padding: 3px 7px;
  background-color: ${Theme.yellow}
}
`;
