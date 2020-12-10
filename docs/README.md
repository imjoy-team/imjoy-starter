# ImJoy Interactive Documentation

See documentation for [ImJoy Docs](https://docs.imjoy.io).

### This is a live documentation

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