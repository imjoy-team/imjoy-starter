# ImJoy Starter

This is a template repo made for the I2K workshop tutorial: https://imjoy.io/docs/#/i2k_tutorial.

You can use it for hosting ImJoy plugins, interactive, docs and notebooks.

It is meant to be forked by developers of ImJoy and you can do whatever with it, including:

 1. Take notes and write documentation by adding markdown files under the `docs` folder, it will render as a live document like this: https://imjoy-team.github.io/imjoy-starter/

 1. Edit and run the Jupyter notebooks under the `notebooks` folder, you can also add new ones.

 1. Add ImJoy plugin files into the `plugins` folder which can then be shared via their URL.


## Interactive Documentation with ImJoy Docs

You can make interactive docs for your project with [ImJoy Docs](https://imjoy-team.github.io/imjoy-docs/)

To test this feature, make sure you are reading this page from https://imjoy-team.github.io/imjoy-starter/.

Try the code block below, if you click the **Run** button, you should see a popup message saying `Hello from ImJoy!`.
<!-- ImJoyPlugin: {"type": "web-worker", "editor_height": "200px"} -->
```js
api.alert("Hello from ImJoy!")
```
You can also click the **Edit** button, you should see a code editor. Now you can change `Hello from ImJoy!` to `Hello, <YOUR NAME>`, then click the **Run** button in the toolbar of the code editor.

You can even embed slides into this docs with ImJoy plugins:

<!-- ImJoyPlugin: {"type": "web-worker", "hide_code_block": true, "editor_height": "200px"} -->
```js
api.createWindow({src:"https://gist.github.com/oeway/96cd0f99e87abbcf97d65a3605471130"})
```