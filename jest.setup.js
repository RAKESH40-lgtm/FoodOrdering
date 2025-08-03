// jest.setup.js
import { TextEncoder, TextDecoder } from 'util'; // Polyfill TextEncoder

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
