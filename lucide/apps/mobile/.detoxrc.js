/** Detox — exécutable sur macOS avec Xcode (CI job dédié ou poste dev).
 *  1) npm i -D detox jest @types/jest   2) npx expo prebuild -p ios   3) detox build -c ios.sim.debug   4) detox test */
module.exports = {
  testRunner: { args: { config: 'e2e/jest.config.js' }, jest: { setupTimeout: 120000 } },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/Lucide.app',
      build: 'xcodebuild -workspace ios/Lucide.xcworkspace -scheme Lucide -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
  },
  devices: { simulator: { type: 'ios.simulator', device: { type: 'iPhone 15' } } },
  configurations: { 'ios.sim.debug': { device: 'simulator', app: 'ios.debug' } },
};
