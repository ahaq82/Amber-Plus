import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { renderToString } from "react-dom/server";
import { Marker } from "react-leaflet";
import L from "leaflet";
import EventButton from "./EventButton";
import EventPopup from "./EventPopup";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
  eventButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    border: "none",
    outline: 0,
    minWidth: 0,
    zIndex: 300,
    padding: 0,
    transform: "translate3d(0px, -15px, 0px)",
  },
  personMarker: {
    border: `1.5px solid white`,
    borderRadius: "50%",
    boxShadow: `0px 0px 20px 3px white`,
    width: 50,
    height: 50,
  },
}));

const EventMarker = ({
  person = null,
  isOpen = false,
  handleClick = null,
  eventType = "",
}) => {
  const classes = useStyles();
  const position = person.position;

  const iconHtml = renderToString(
    <div className={classes.eventButton}>
      <EventButton eventType={eventType} active={isOpen}>
        {person ? (
          <img
            src={person.image}
            alt={person.name}
            className={classes.personMarker}
          />
        ) : (
          <RoomIcon />
        )}
      </EventButton>
    </div>
  );

  const divIcon = L.divIcon({
    html: iconHtml,
    className: "", // overrides leaflet icon class
  });

  return (
    <Marker
      position={position}
      icon={divIcon}
      onClick={handleClick}
      style={{ zIndex: 1200 }}
    >
      <EventPopup person={person} />
    </Marker>
  );
};

export default EventMarker;
