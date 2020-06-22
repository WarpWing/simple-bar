: > /Users/$USER/Library/ApplicationSupport/Übersicht/widgets/simple-bar/lib/styles/Pywal.js;

echo "export const Pywal = {" >> /Users/$USER/Library/ApplicationSupport/Übersicht/widgets/simple-bar/lib/styles/Pywal.js;

sed -n '2,14p' ~/.cache/wal/colors-speedcrunch.json >> /Users/$USER/Library/ApplicationSupport/Übersicht/widgets/simple-bar/lib/styles/Pywal.js

echo "};" >> /Users/$USER/Library/ApplicationSupport/Übersicht/widgets/simple-bar/lib/styles/Pywal.js;
