import React from "react";

interface nMapComponent {
  scan(host: string): Promise<string>;
}

export default function Nmap(nMapComponent) {
  return (
    <form>
      <div>
        <label htmlFor="Host">Host</label>
        <input type="text" name="Host" placeholder="Host" />
      </div>
      <div>
        <label>Scan</label>
        <input type="text" name="Scan" placeholder="Scan" />
      </div>
      <div></div>
    </form>
  );
}
