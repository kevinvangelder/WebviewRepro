import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { AppStackScreenProps } from "../navigators" // @demo remove-current-line
import { colors } from "../theme"
import WebView from "react-native-webview"

interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> {}

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(
  _props, // @demo remove-current-line
) {

  return (
    <View style={$container}>
      <WebView 
        source={{ uri: 'https://vangelder.tech/rn-webview' }}
        injectJavaScriptObject={{
          authToken: 'this-is-my-token',
        }}
      />
    </View>
  )
})

const $container: ViewStyle = {
  flex: 1,
  marginTop: 50,
  backgroundColor: colors.background,
}
