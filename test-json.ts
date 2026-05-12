import { calculateResults } from './src/data/diagnosticTestV2.ts';
import { PHASES } from './src/data/testPhases.ts';
import { METHODS_MAP } from './src/data/testConfig.ts';

const responses = {
  "0-0-0": 1,
  "0-1-0": 0.5
};

const METHODS = Object.keys(METHODS_MAP);
const results = calculateResults(responses, PHASES, METHODS);
try {
  const json = JSON.stringify(results);
  console.log("Success! Length:", json.length);
} catch (e) {
  console.error("Stringify failed:", e);
}
