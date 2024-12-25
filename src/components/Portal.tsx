import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface PortalProps extends React.PropsWithChildren {
  selector: string;
}

const Portal: React.FC<PortalProps> = ({ selector, children }) => {
  const portal = useRef<Element | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    portal.current = document.createElement("div");
    portal.current?.setAttribute("id", selector);
    document.body.appendChild(portal.current);
    setIsMounted(true);

    const portalNode = portal.current as Node;
    return () => {
      if (document.body.contains(portalNode)) {
        document.body.removeChild(portalNode);
      }
    };
  }, [selector]);

  return isMounted && portal.current
    ? createPortal(children, portal.current as Element)
    : null;
};

export default Portal;
