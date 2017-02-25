import { Module } from 'magnet-core/module';
export default class Config extends Module {
    setup(): Promise<void>;
    setupConfig(configPath: string): Promise<any>;
}
