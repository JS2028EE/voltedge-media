# VoltEdge Media

A responsive static website for VoltEdge Media, with service descriptions, plan selection, a consultation form, and optional offline caching.

## Run

Open `index.html`, or serve the folder with `python -m http.server 8000` and visit `http://localhost:8000`. Hosting on HTTPS enables the service worker.

## Behavior

The consultation form opens the visitor's mail application with a drafted message; it does not submit to a backend. Navigation and plan selection run in `app.js`. The service worker caches the five existing core files; optional image paths can fail without preventing installation. Old VoltEdge caches are cleaned up without deleting unrelated caches on the same origin.

## Verification

Check navigation at narrow widths, select a plan, fill the form, and confirm the generated mail draft. After a first successful visit, reload offline and check the page. Email delivery depends on the visitor's configured mail application.

## License

Original source and documentation are available under the [MIT License](LICENSE). External dependencies, libraries, and third-party assets retain their respective licenses. Licensing does not imply that the prototype is calibrated, certified, or physically validated after later code changes.
