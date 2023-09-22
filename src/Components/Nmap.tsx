import React, { useState } from "react";
import nmap from "nmap";

export default function Nmap() {
  const [host, setHost] = useState("");
  const [ports, setPort] = useState("");
  const handleScan = async () => {
    const nmapScanner = new NmapScanner();
  };
  return (
    <div>
      <h1> Port Scanner </h1>
      <form>
        <label> Host </label>
        <input
          type="text"
          name="Host"
          className="host-input"
          placeholder="Host"
          onChange={(event) => setHost(event.target.value)}
          value={host}
        />
        <label> Port </label>
        <input
          type="text"
          name="Host"
          className="port-input"
          placeholder="Ports"
          value={ports}
          onChange={(event) => setPort(event.target.value)}
        />
        <button onClick={handleScan}> Scan </button>
      </form>
    </div>
  );
}
