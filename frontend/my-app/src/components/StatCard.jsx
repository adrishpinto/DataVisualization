import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <Card
      className={`shadow-xl border rounded-lg overflow-hidden w-60 border-b-4 border-${color} }`}
    >
      <CardContent className="flex items-center p-4">
        <div>
          <Typography variant="h6" className="text-gray-700 font-thin">
            {title}
          </Typography>
          <Typography
            variant="h4"
            className="font-bold flex align-baseline items-baseline"
          >
            {value}
            <span className={`mr-4 mx-2 text-${color} `}>{icon}</span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
