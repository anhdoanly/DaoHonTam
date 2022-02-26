import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const theme = extendTheme({
    config,
    colors: {
        blue: {
            500: "#0057FF",
        },
    },
})

export default theme