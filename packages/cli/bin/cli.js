#!/usr/bin/env node

import importLocal from "import-local";
import { filename } from 'dirname-filename-esm';
const __filename = filename(import.meta);
import entry from "../lib/index.js";

if (importLocal(__filename)){

} else {
  entry(process.argv.slice(2))
}