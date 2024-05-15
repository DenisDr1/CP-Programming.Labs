import { IShow } from "../Interface/ishow";

export class ShowDesktop implements IShow {
    info: string = "";
    show(s: string): void {
        this.info = s;
    }
}