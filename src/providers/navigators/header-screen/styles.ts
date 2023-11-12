import { wp } from "@utils/_dimensions";
import { StyleSheet } from "react-native";

const padding: number = 10;
const minHeight: number = 40;
const config = {
  width: wp(50),
  marginTop: -20, // TODO: fix this
  flexDirection: 'row',
  justifyContent: 'space-between',
} as const
const styler = StyleSheet.create({
  tapbarLeft: {
    // {"flexDirection": "row", "justifyContent": "space-between", "marginTop": -20, "maxHeight": 40, "minHeight": 40, "paddingLeft": 10, "width": 195}
    ...config,
    minHeight,
    maxHeight: minHeight,
    paddingLeft: padding,
  },
  tapbarRight: {
    ...config,
    minHeight,
    maxHeight: minHeight,
    paddingRight: padding,
  }
})
const marginHorizontal: number = 15
const tapbar = `flex flex-row w-50 p-3 bg-red-200 border border-2 border-solid border-green-500`
const styles = {
  left: `${tapbar} ml-[-${marginHorizontal}] bg-green-200`,
  right: `${tapbar} mr-[-${marginHorizontal}] pr-5 bg-blue-200`,
}
export default styles
