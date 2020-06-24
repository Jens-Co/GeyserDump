{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 32,

  "maxLength": 400000,

  "staticMaxAge": 31536000,

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "random"
  },

  "rateLimits": {
    "categories": {
      "normal": {
        "totalRequests": 500,
        "every": 60000
      }
    }
  },

  "rateLimitsPost": {
    "categories": {
      "normal": {
        "totalRequests": 1,
        "every": 60000
      }
    },
    "fail": {
      "message": "{\"message\":\"You can only upload a dump once a minute\"}",
      "type": "application/json"
    }
  },

  "storage": {
    "type": "file",
    "path": "./data"
  },

  "documents": {
    "about": "./about.md"
  }

}
