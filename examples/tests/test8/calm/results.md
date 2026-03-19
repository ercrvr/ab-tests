# Notification Sound — Calm

Generated a 3-second 880Hz sine wave tone (A5 note, one octave above standard) — a softer, less intrusive notification sound.

## Process

1. Generated a 880Hz sine wave at 44.1kHz sample rate
2. Applied gentle fade-in and fade-out
3. Exported as WAV and MP3

## Output

- `tone.wav` — Lossless WAV, 3 seconds, 44.1kHz
- `tone.mp3` — MP3 compressed, 3 seconds

## Assessment

A pleasant, less intrusive tone suitable for frequent low-priority notifications. The higher frequency (880Hz) paradoxically sounds softer and more musical than 440Hz in isolation. Good for chat messages or background sync events.

### Strengths
- Less jarring than lower tones
- Pleasant for repeated use
- Feels more modern/app-like

### Weaknesses
- May be missed in noisy environments
- Less clear as an "error" or "alert" signal
