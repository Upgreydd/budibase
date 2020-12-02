const { BUILTIN_ROLE_IDS } = require("../utilities/security/roles")

exports.HOME_SCREEN = {
  description: "",
  url: "",
  props: {
    _id: "d834fea2-1b3e-4320-ab34-f9009f5ecc59",
    _component: "@budibase/standard-components/container",
    _styles: {
      normal: {
        flex: "1 1 auto",
        display: "flex",
        "flex-direction": "column",
        "justify-content": "flex-start",
        "align-items": "stretch",
      },
      hover: {},
      active: {},
      selected: {},
    },
    _code: "",
    type: "div",
    _children: [
      {
        _id: "ef60083f-4a02-4df3-80f3-a0d3d16847e7",
        _component: "@budibase/standard-components/heading",
        _styles: {
          normal: {
            "text-align": "left",
          },
          hover: {},
          active: {},
          selected: {},
        },
        _code: "",
        text: "Welcome to your Budibase App 👋",
        type: "h2",
        _appId: "inst_cf8ace4_69efc0d72e6f443db2d4c902c14d9394",
        _instanceName: "Heading",
        _children: [],
      },
      {
        _id: "cbbf41b27c2b44d1abba38bb694880c6a",
        _component: "@budibase/standard-components/container",
        _styles: {
          normal: {
            display: "flex",
            "flex-direction": "column",
            "justify-content": "center",
            "align-items": "stretch",
            flex: "1 1 auto",
            "border-width": "4px",
            "border-style": "Dashed",
            "margin-bottom": "32px",
          },
          hover: {},
          active: {},
          selected: {},
        },
        _code: "",
        type: "div",
        _appId: "inst_app_2cc_ca3383f896034e9295345c05f7dfca0c",
        _instanceName: "Video Container",
        _children: [
          {
            _id: "c07d752cb3e544b418088fa9be84ba2e4",
            _component: "@budibase/standard-components/embed",
            _styles: {
              normal: {
                width: "100%",
                flex: "1 1 auto",
                opacity: "0",
                "transition-property": "Opacity",
                "transition-duration": "1s",
                "transition-timing-function:": "ease-in",
              },
              hover: {
                "transition-property": "Opacity",
                "transition-duration": "1s",
                "transition-timing-function:": "ease-out",
                opacity: "1",
              },
              active: {},
              selected: {},
            },
            _code: "",
            embed:
              '<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            _appId: "inst_app_2cc_ca3383f896034e9295345c05f7dfca0c",
            _instanceName: "Rick Astley Video",
            _children: [],
          },
        ],
      },
    ],
    _instanceName: "Home",
  },
  routing: {
    route: "/",
    roleId: BUILTIN_ROLE_IDS.BASIC,
  },
  name: "home-screen",
}

exports.LOGIN_SCREEN = {
  description: "",
  url: "",
  props: {
    _id: "781e497e-2e7c-11eb-adc1-0242ac120002",
    _component: "@budibase/standard-components/login",
    _styles: {
      normal: {},
      hover: {},
      active: {},
      selected: {},
    },
    _code: "",
    className: "",
    onLoad: [],
    type: "div",
    _children: [],
    _instanceName: "Login",
  },
  routing: {
    route: "/",
    accessLevelId: BUILTIN_LEVEL_IDS.PUBLIC,
  },
  name: "login-screen",
}
