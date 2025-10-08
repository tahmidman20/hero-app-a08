import axios from "axios";
import { useEffect, useState } from "react";

const useApps = () => {
  const [appsdata, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios("../appsData.json")
      .then((data) => setAppsData(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return { appsdata, loading, error };
};

export default useApps;
