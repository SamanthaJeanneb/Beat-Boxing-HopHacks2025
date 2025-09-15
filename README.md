# HopHacks2025 — Beat Boxing (Game Client + Body Tracking)

This repository contains a multiplayer rhythm boxing game. The main client lives in the `gameclient/` folder and there's a simple body-tracking Python script that can enable punching input via your webcam.

## Running the game locally (development)

1. Open a terminal and change into the game client directory:

```bash
cd gameclient
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

4. Open the app in your browser. Vite will print the local dev URL (typically `http://localhost:5173`).

## Enabling punching support (body tracking)

The project includes a Python body-tracking script (`OpenCVBody/bodyTracker.py`) that reads from your webcam and sends punching events to the running game client. To enable this feature:

Requirements

- Python 3.12 (recommended)
- OpenCV for Python (`opencv-python`)
- A working webcam

Install Python dependencies

```bash
# Optionally create and activate a virtual environment
python3.12 -m venv .venv
source .venv/bin/activate

# Install dependencies
pip install -r OpenCVBody/requirements.txt || pip install opencv-python
```

If `OpenCVBody/requirements.txt` does not exist, install `opencv-python` directly.

Run the body tracker

Start the tracker in the background (so your terminal remains available for the dev server):

```bash
python3.12 OpenCVBody/bodyTracker.py &
```

The script will connect to your webcam. Keep it running while you play. It will communicate with the game client (the client should be running via `npm run dev`) to translate detected punches into in-game actions.

Troubleshooting

- If the script fails to access the webcam, make sure no other app is using it and that your OS permissions allow camera access.
- If `python3.12` is not found, install Python 3.12 or adjust the command to the Python executable you have (e.g., `python3`, `python3.11`).
- If OpenCV install fails, check compiler/toolchain availability (for some platforms you may need build tools) or use the prebuilt wheel via `pip install opencv-python`.

## Playing multiplayer / official online game

To play multiplayer or the officially hosted version, make sure the Python body tracker is running in the background (if you want punching support), then open:

https://beat-boxing-liard.vercel.app/

The hosted site should connect to the tracker running locally so punching input maps to your in-game character.

## Notes and assumptions

- This README assumes the `gameclient/` dev server uses Vite and the default `npm run dev` script defined in `gameclient/package.json`.
- The body tracker script is assumed to be at `OpenCVBody/bodyTracker.py` and to be compatible with OpenCV Python bindings.
