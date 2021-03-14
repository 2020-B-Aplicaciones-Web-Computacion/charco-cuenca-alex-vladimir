import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    index(response: any): void;
    login(session: any, request: any): string;
    indetify(session: any): string;
    logout(session: any, request: any): string;
    protected(session: any): string;
}
