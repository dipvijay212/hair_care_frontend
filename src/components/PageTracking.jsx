import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import * as gtag from "../utils/gtag";

const PageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    gtag.pageview(location.pathname + location.search);
  }, [location]);

  return null;
};

export default PageTracking;
