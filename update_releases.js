const fs = require('fs');
const version = process.argv[2];
const date = process.argv[3];

let releases = { latest: version, releases: [] };
if (fs.existsSync('releases.json')) {
  releases = JSON.parse(fs.readFileSync('releases.json'));
}

// Update latest version
releases.latest = version;

// Add new release (avoid duplicates)
const existingIndex = releases.releases.findIndex(r => r.version === version);
const newRelease = {
  version,
  releaseDate: date,
  changelog: ["Updated via automated release system"],
  platforms: {
    "bloom-tower": `https://raw.githubusercontent.com/unwndevices/GreenverseApp-firmware/main/firmware/bloom-tower/bloom-tower-${version}.bin`
  }
};

if (existingIndex >= 0) {
  releases.releases[existingIndex] = newRelease;
} else {
  releases.releases.unshift(newRelease);
}

fs.writeFileSync('releases.json', JSON.stringify(releases, null, 2));
