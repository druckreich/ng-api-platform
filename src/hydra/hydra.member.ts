import { TypedJSON, JsonMember, JsonObject } from 'typedjson-npm/src/typed-json';

@JsonObject
export class HydraMember {
    
    @JsonMember({ name: "@id" })
    rawId: string;

    @JsonMember({ name: "@context" })
    rawContext: string;

    @JsonMember({ name: "@type" })
    rawType: string;
    
    get id(): number {
        if (this.rawId) {
            let regex = /(\d+)(?!.*\d)/;
            let match: any = regex.exec(this.rawId);
            return +match[0];
        }
    }

    isNew(): boolean {
        return <boolean> (this.rawId == null);
    }

    static parseFromTypedJSON(jsonString: string, type:any) {
        return TypedJSON.parse(jsonString, type);
    }
}
