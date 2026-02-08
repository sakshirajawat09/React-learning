import { useEffect, useState } from "react";

const useOlineStatus = () => {
  const [onlineStatus, SetOnlineStatus] = useState(true);

  useEffect(() => {
    addEventListener("online", (event) => {
      SetOnlineStatus(true);
    });
    addEventListener("offline", (event) => {
      SetOnlineStatus(false);
    });
  }, []);

  return onlineStatus;
};

export default useOlineStatus;
