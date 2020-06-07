import { baseStyles } from "./lib/styles";

// Pinched command from https://github.com/ThomasBrace/Ubersicht-Spotify-widget/blob/master/SpotifyCurrentTrack.coffee
const command = `
IFS='|' read -r theArtist theName <<<"$(osascript <<<'tell application "Spotify"
        set theTrack to current track
        set theArtist to artist of theTrack
        set theName to name of theTrack
        return theArtist & "|" & theName
    end tell')"
echo "$theArtist - $theName"`;

const refreshFrequency = 5000;

const style = {
  marginTop: "3px",
  left: "150px",
};

const render = ({ output }) => (
  <div style={{ ...baseStyles, ...style }}>
    {output ? (
      <div>
        <i class="fab fa-spotify"></i> {output}
      </div>
    ) : null}
  </div>
);

export { command, refreshFrequency, render };
