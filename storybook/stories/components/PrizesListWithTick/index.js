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
      renderLeftHiddenRow={() => {}}
      renderRightHiddenRow={data => (
        <Button full success onPress={() => props.onTick(data)}>
          <Icon active name="md-checkmark" />
        </Button>
      )}
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
