import { useEffect, useState } from "react";

export function useLocalStorageWithExpiry(key, defaultValue, ttl = 900000) {
  const initial = () => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return defaultValue;
    try {
      const item = JSON.parse(itemStr);
      const now = new Date().getTime();
      if (now > item.expiry) {
        localStorage.removeItem(key);
        return defaultValue;
      }
      return item.value;
    } catch {
      return defaultValue;
    }
  };

  const [value, setValue] = useState(initial);

  useEffect(() => {
    const now = new Date().getTime();
    const item = {
      value,
      expiry: now + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
  }, [key, value, ttl]);

  return [value, setValue];
}
