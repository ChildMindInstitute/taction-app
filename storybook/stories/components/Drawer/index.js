import React from "react";
import DrawerParent from "./drawer";
import PropTypes from "prop-types";

const Drawer = props => <DrawerParent screenProps={props.navProps} />;
Drawer.propTypes = {
  isNewRegistration: PropTypes.bool,
  navProps: PropTypes.object
};

export { Drawer as default };
