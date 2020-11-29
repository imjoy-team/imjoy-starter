# Interactive documentation for ImJoy

## Development
```
npm i docsify-cli -g
git clone https://github.com/oeway/imjoy-docs-starter
```

```
cd imjoy-docs-starter
docsify serve
```
Now go to: http://localhost:3000/local.html


### This is a live documentation

Try the code block below, if you click the **Run** button, you should see a popup message saying `Hello from ImJoy!`.
<!-- ImJoyPlugin: {"type": "iframe", "passive": true, "editor_height": "200px"} -->
```js
api.alert("Hello from ImJoy!")
```
You can also click the **Edit** button, you should see a code editor. Now you can change `Hello from ImJoy!` to `Hello, <YOUR NAME>`, then click the **Run** button in the toolbar of the code editor.