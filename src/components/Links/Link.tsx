import { useState } from 'react';
import "./Link.css";

enum STATUS {
  HOVERED = 'HoveredLink',
  DEFAULT = 'DefaultLink',
};

export interface LinkProps {
  page: string;
  children: React.ReactNode;
}


const Link: React.FC<LinkProps> = (props) => {
  const [status, setStatus] = useState(STATUS.DEFAULT);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.DEFAULT);
  };

  return (
    <a
      className={status}
      href={props.page || '#'}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {props.children}
    </a>
  );
}
export default Link;