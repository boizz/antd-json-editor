module.exports = {
    "parser": "babel-eslint",
    "extends": ["standard", "plugin:react/recommended"],
    "plugins": [
        "react",
        "standard"
    ],
    "env": {
        "browser": true,
        "mocha": true
    },
    "rules": {
        "no-console": 1,
        "generator-star-spacing": 0
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "globals": {
        "VERSION": true,
        "UM": true,
        "$": true
    }
}