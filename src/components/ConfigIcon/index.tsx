import { IconContext } from "react-icons";

interface ConfigIconProps {
  children: any;
  color: string;
  size: string;
}

export default function ConfigIcon({ children, color, size }: ConfigIconProps) {
  return (
    <>
      <IconContext.Provider value={{ color: color, size: size }}>
        {children}
      </IconContext.Provider>
    </>
  );
}
