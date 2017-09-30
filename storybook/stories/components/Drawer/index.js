import React from "react";
import DrawerParent from "./drawer";
import PropTypes from "prop-types";

const Drawer = props => <DrawerParent screenProps={props.NavProps} />;
Drawer.propTypes = {
  IsNewRegistration: PropTypes.bool,
  NavProps: PropTypes.object
};

export { Drawer as default };
