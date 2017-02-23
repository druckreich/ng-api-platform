import { JsonObject, JsonMember, TypedJSON } from 'typedjson-npm/src/typed-json';

@JsonObject
export class HydraView {

    @JsonMember({ name: '@id' })
    id: string;

    @JsonMember({ name: '@type' })
    type: string;

    @JsonMember({ name: 'hydra:first' })
    first: string;

    @JsonMember({ name: 'hydra:last' })
    last: string;

    @JsonMember({ name: 'hydra:next' })
    next: string;
}