# CRXJ Vite Firestore bug

This is a minimal reproduction of a bug I'm experiencing with Vite, chrome extension manifest v3 and Firestore.

Note: using firebase auth is working, it is only firestore that is not working.

```zsh
xmlhttp.js:170 Uncaught ReferenceError: XMLHttpRequest is not defined

@firebase/firestore: Firestore (10.3.1): Could not reach Cloud Firestore backend. Backend didn't respond within 10 seconds.
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.

@firebase/firestore: Firestore (10.3.1): WebChannelConnection RPC 'Listen' stream 0x814b5887 transport errored: Qd {type: 'c', target: Q, g: Q, defaultPrevented: false, status: 1}

```

## Steps to reproduce

1. Clone this repo
2. `npm install`
3. `npm run dev`
4. Load the unpacked extension in chrome
5. Open the devtools console for the service worker
