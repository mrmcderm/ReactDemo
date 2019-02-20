module Main {
    export interface IHelloWorld {
        Name:  string;
    }

    export class HelloWorld implements IHelloWorld {
        private _name: string;

        constructor(name: string) {
            this._name == name;
        }

        get Name(): string {
            return this._name;
        }
    }
}