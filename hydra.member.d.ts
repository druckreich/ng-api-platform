export declare class HydraMember {
    rawId: string;
    rawContext: string;
    rawType: string;
    readonly id: number;
    isNew(): boolean;
    static parseFromTypedJSON(jsonString: string, type: any): any;
}
