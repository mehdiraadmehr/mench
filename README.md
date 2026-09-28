# Mench (منچ)
Modes: hot-seat (2-4 players, one device), vs computer (1-3 bots), online rooms (share a 4-letter code; empty seats and disconnected players are played by bots).

Run locally: `npm install && npm start` then open http://localhost:3000
Deploy: push to GitHub, then Railway -> New Project -> Deploy from GitHub repo. No config or env vars needed (Railway sets PORT).

Rules: 40-cell track, 4 pieces each. Roll a 6 to leave home (3 tries when all pieces are home). A 6 gives another roll. Landing on an opponent sends it home. You must move if you can, and must clear your start cell when you roll a 6 with pieces still at home. Pieces enter the home lane after a full lap; first to fill all 4 lane cells wins.
