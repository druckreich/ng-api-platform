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

    isReal(): boolean {
        return !this.isNew();
    }

    isNew(): boolean {
        return <boolean> (this.rawId == null);
    }

    static parseFromTypedJSON(jsonString: string, type:any) {
        try {
            return TypedJSON.parse(jsonString, type);
        } catch(e) {
            console.error(e);
        }
    }
}
