# flutter_screen_height_bug

## Prerequisites

Ensure you have Flutter version 3.10.6 installed for compatibility. This project uses [FVM (Flutter Version Management)](https://fvm.app/) to manage Flutter versions. If you haven't installed FVM yet, please follow the [installation guide](https://fvm.app/docs/getting_started/installation).

## Running the Application Locally

To run the application locally on a web server, use the following command:

```bash
fvm flutter run -d web-server --web-hostname=0.0.0.0 --web-port=8080
```

## Reproducing the bug.

Access the app from a chromium-based web browser (I am using Chrome version 123.0.6312.40) from your physical mobile device.

The bug is only visible when you open a new tab and navigate to the page. Refreshing an open tab does not produce the bug.
