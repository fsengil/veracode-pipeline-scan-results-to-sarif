#!/usr/bin/env node

import program from 'commander'
import {run} from "./index";

program
    .version('0.0.1')
    .requiredOption('-i, --input <path>', 'Input file to convert')
    .requiredOption('-o, --output <path>', 'Output file to convert')
    .option('-r, --rule-level <string>', 'Rule level', '4:3:0')
    .option('-p, --path-replace <string>', 'Path replacements', '')
    .parse(process.argv)

try {
    run(program.opts(), msg => console.log(msg))
} catch (error) {
    console.error(error.message);
}