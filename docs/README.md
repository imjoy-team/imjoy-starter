# ImJoy Interactive Documentation

## Usage

You can write the documentation in markdown and save under this folder, then push the changes to Github. If you enable Github Pages service, you will see a live interactive document.

To run it locally, you will need to install nodejs, then run:
```
npm i docsify-cli -g
```

```
git clone https://github.com/imjoy-team/imjoy-starter
cd imjoy-starter/docs
docsify serve
```
Now go to: http://localhost:3000/


### This is a live documentation

Try the code block below, if you click the **Run** button, you should see a popup message saying `Hello from ImJoy!`.
<!-- ImJoyPlugin: {"type": "web-worker", "passive": true, "editor_height": "200px"} -->
```js
api.alert("Hello from ImJoy!")
```
You can also click the **Edit** button, you should see a code editor. Now you can change `Hello from ImJoy!` to `Hello, <YOUR NAME>`, then click the **Run** button in the toolbar of the code editor.

You can even embed slides into this docs with ImJoy plugins:

<!-- ImJoyPlugin: {"type": "web-worker", "hide_code_block": true, "startup_mode": "run", "passive": true, "editor_height": "200px"} -->
```js
api.createWindow({src:"https://gist.github.com/oeway/96cd0f99e87abbcf97d65a3605471130"})
```