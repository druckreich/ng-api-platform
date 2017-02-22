import { JsonObject, JsonMember, TypedJSON } from 'typedjson-npm/src/typed-json';
import { HydraView } from './hydra.view';

@JsonObject
export class HydraCollection {

    @JsonMember({ name: '@context' })
    context: string;

    @JsonMember({ name: '@id' })
    id: string;

    @JsonMember({ name: '@type' })
    type: string;

    @JsonMember({ name: 'hydra:totalItems' })
    totalItems: number;

    // @JsonMember({ name: 'hydra:member', elements: Object })
    // member: Object[];

    @JsonMember({ name: 'hydra:view' })
    view: HydraView;

    static parseFromTypedJSON(list: string) {
        return TypedJSON.parse(list, HydraCollection);
    }
}