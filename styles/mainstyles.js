import { StyleSheet } from "react-native"

export const mainColors = {
  BACKGROUND_COLOR: "#FFFFFF",
  SECONDARY_COLOR: "#652F2F",
  MAIN_COLOR: "#DD5151",
  BLACKTEXT_COLOR: "#181716",
  WHITETEXT_COLOR: "#FFFFf6",
  INACTIVE_COLOR: '#ada5a0'
}

export const mainStyles = StyleSheet.create({
  containercentered: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mainColors.BACKGROUND_COLOR,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: mainColors.BACKGROUND_COLOR
  },
  logo: {
    fontSize: 32, 
    color: mainColors.MAIN_COLOR, 
    fontWeight: '400',
    shadowRadius: 0,
    shadowColor: mainColors.SECONDARY_COLOR,
    shadowOffset: {
      width: 11,
      height: 0,
    },
    shadowOpacity: 1,
  },
  logob: {
    fontSize: 102, 
    color: mainColors.MAIN_COLOR, 
    fontWeight: '400',
    shadowRadius: 0,
    shadowColor: mainColors.SECONDARY_COLOR,
    shadowOffset: {
      width: 41,
      height: 0,
    },
    shadowOpacity: 1,
  },
  containermiddle:{
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
    flex: 1,
    backgroundColor: mainColors.BACKGROUND_COLOR
  }
  
})

