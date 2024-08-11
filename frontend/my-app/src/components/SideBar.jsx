import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  LightBulbIcon,
  PowerIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function DefaultSidebar(props) {
  const [isExpanded, setIsExpanded] = useState(true);
  const navChange = (value) => {
    props.navChange(value);
  };
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card
      className={` min-h-screen rounded-none transition-width duration-500 sticky border border-slate-100 ${
        isExpanded ? "w-64 p-4" : "w-16"
      } relative`}
    >
      <div className="mb-2 p-4 flex justify-between items-center">
        <Typography
          variant="h5"
          color="blue-gray"
          className={`transition-opacity duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
          }`}
        >
          Sidebar
        </Typography>
        <Bars3Icon
          className={`h-6 w-6 ${isExpanded ? "" : "opacity-100 absolute"}`}
          onClick={handleToggle}
        />
      </div>
      <List>
        <ListItem className="group">
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span
            onClick={() => navChange(0)}
            className={`ml-1 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            Dashboard
          </span>
        </ListItem>
        <ListItem className="group">
          <ListItemPrefix>
            <LightBulbIcon className="h-5 w-5" />
          </ListItemPrefix>
          <span
            onClick={() => navChange(1)}
            className={`ml-1 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            }`}
          >
            Project Details
          </span>
        </ListItem>
      </List>
    </Card>
  );
}
