# Greenverse Firmware Distribution

Public firmware distribution repository for Greenverse IoT plant care devices.

## Supported Devices

- **Bloom Tower**: ESP32-C3 based hydroponic device

## Firmware Downloads

Latest firmware releases are available through:

- **GitHub Releases**: [View releases](https://github.com/unwndevices/GreenverseApp-firmware/releases)
- **Direct Download**: `firmware/bloom-tower/latest.bin`
- **API**: `releases.json` for programmatic access

## Device Update Instructions

### Via Serial Commands (Recommended)
1. Connect to device serial port (115200 baud)
2. Send `update check` to check for new firmware
3. Send `update` to install latest stable release
4. Send `update dev` to install development releases
5. Confirm when prompted

### Via Manual Flash
1. Download latest `bloom-tower-vX.X.X.bin` from releases
2. Use ESP32 flashing tool (esptool.py, ESP32 Flash Tool, etc.)
3. Flash to device at 0x10000 offset

## API Access

The `releases.json` file provides programmatic access to firmware releases:

```bash
curl https://raw.githubusercontent.com/unwndevices/GreenverseApp-firmware/main/releases.json
```

## Security

All firmware binaries are:
- Built from verified source code
- Digitally signed with checksums
- Distributed over HTTPS

---

**Note**: This repository contains only firmware binaries for distribution. 
Source code is maintained in a separate private repository.