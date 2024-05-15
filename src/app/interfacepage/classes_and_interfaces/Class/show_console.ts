import { IShow } from "../Interface/ishow";

export class ShowConsole implements IShow {
    show(s: string): void {
        console.log(s);
    }
}