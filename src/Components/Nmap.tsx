import React, { useState } from "react";
import { Input, Button } from "@chakra-ui/react";

interface NmapProps {
  host: string;
  port: string;
  onSubmit: (host: string, port: string) => void;
}

const Nmap: React.FC<NmapProps> = ({ host, port, onSubmit }) => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center mt-auto mb-auto">
        <form
          className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8"
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(host, port);
            setSubmitting(true);
          }}
        >
          <div className="flex flex-row items-center mb-4">
            <label className="text-gray-700 font-bold mr-4 w-1/4">Host:</label>
            <Input
              type="text"
              placeholder="Host"
              value={host}
              onChange={(event) => onSubmit(event.target.value, port)}
              className="bg-gray-100 border border-gray-200 rounded-md px-4 py-2 w-3/4"
            />
          </div>

          <div className="flex flex-row items-center mb-4">
            <label className="text-gray-700 font-bold mr-4 w-1/4">Ports:</label>
            <Input
              type="text"
              placeholder="Ports"
              value={port}
              onChange={(event) => onSubmit(host, event.target.value)}
              className="bg-gray-100 border border-gray-200 rounded-md px-4 py-2 w-3/4"
            />
          </div>

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
            disabled={submitting}
          >
            Scan
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Nmap;
