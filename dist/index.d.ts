import { Module } from 'magnet-core/module';
export interface Config {
    baseDirPath: string;
    configDirPath: string;
    env: {
        dev: boolean;
        test: boolean;
        stag: boolean;
        prod: boolean;
    };
    [propName: string]: any;
}
export default class MagnetConfig extends Module {
    setup(): Promise<void>;
    setupConfig(configPath: string): Promise<any>;
}
