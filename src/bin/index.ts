#!/usr/bin/env node
import { Command } from 'commander';
import * as packageJson from '../../package.json';
import { sayHello } from '../test';


const program = new Command();

program.version(packageJson.version)
    .command('say-hello')
    .description('A simple CLI tool to say hello')
    .action(() => {
        sayHello();
    }
    )
    .parse(process.argv);