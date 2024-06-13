import React, { useState, useEffect } from "react";

const MetricsDashboard = () => {
  const [metrics, setMetrics] = useState("");

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/metrics`
        );
        const data = await response.text();
        setMetrics(data);
      } catch (error) {
        console.error("Error fetching metrics:", error);
      }
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h1>Metrics Dashboard</h1>
      <pre>{metrics}</pre>
    </div>
  );
};

export default MetricsDashboard;
