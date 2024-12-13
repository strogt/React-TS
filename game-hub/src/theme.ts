import { defineConfig,createSystem } from "@chakra-ui/react"

const config = defineConfig({
    globalCss: {
      "html, body": {
        background: "black"
      },
    },
  })
  
  export default createSystem(config)