# electron talk notes #

## general ##
- html/css/js
- node
- formally atom shell
- created by github

## pros ##
- cross platform
- rapid development
- themable (css)
- share code with web app
- built in updater
- silent updates (like vs code)
- native UX for host OS

## cons ##
- sometimes looks like website running on desktop
- must take advantage of native features

## why desktop ##
- offline app
- sometimes it just feels right
- access to local hardware, printers/scanners/etc
- something to run on premesis
- edit local files
- build something for mac os store?
- kiosks/retail

## sample apps ##
- atom
- slack
- vs code
- postman
- github desktop app

## lifecycle ##
- process (main.js)
- renderers (html files)

## modules ##
### process module ###
- app, set default file program, etc
- ipc, communicate between processes
- dialog, native dialogs (open/save/print/etc)
- menu, create menues
- power-monitor, power status stuff, suspend sleep, etc
- tray, notification stuff

### render modules ###
- ipc
- remote
- web-frame, host external content (sandboxes it, like a web browser)

### both ###
- clipboard
- crash-reporter
- native-image
- screen
- shell

## other utils ##
- devtron