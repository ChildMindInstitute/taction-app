import React from "react";
import PropTypes from "prop-types";
import { List, Button, Icon } from "native-base";
import ListContent from "./ListContent";
import { ListView } from "react-native";
const AddPrizes = props => {
  const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  return (
    <List
      style={{ flex: 1 }}
      closeOnRowBeginSwipe
      dataSource={ds.cloneWithRows(props.data)}
      renderRow={data => <ListContent item={data} />}
      renderLeftHiddenRow={data => (
        <Button full success onPress={() => props.editPress(data)}>
          <Icon active name="nutrition" />
        </Button>
      )}
      renderRightHiddenRow={data => (
        <Button full danger onPress={() => props.deletePress(data)}>
          <Icon active name="trash" />
        </Button>
      )}
      leftOpenValue={75}
      rightOpenValue={-75}
    />
  );
};

AddPrizes.propTypes = {
  listStyle: PropTypes.object,
  data: PropTypes.array,
  listItemPress: PropTypes.func
};
AddPrizes.defaultProps = {
  listItemPress: () => {}
};
export { AddPrizes as default };
