import React from "react";
import DrawerExample from "./drawer";
import PropTypes from "prop-types";

const Drawer = props => (
  <DrawerExample IsNewRegistration={props.IsNewRegistration} />
);
Drawer.propTypes = { IsNewRegistration: PropTypes.bool };

export { Drawer as default };
