import { getCLS, getFID, getLCP, getTTFB, getFCP } from "web-vitals";

const sendToAnalytics = (metric) => {
  const body = JSON.stringify(metric);

  fetch(`${process.env.REACT_APP_API_BASE_URL}/metrics`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  }).catch((error) => {
    console.error("Error posting data:", error);
  });
};

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
    getFCP(onPerfEntry);
  }
};

const report = (onPerfEntry) => {
  reportWebVitals((metric) => {
    sendToAnalytics(metric);
    if (onPerfEntry) {
      onPerfEntry(metric);
    }
  });
};

export default report;
