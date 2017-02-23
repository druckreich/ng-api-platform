import { JsonObject, JsonMember, TypedJSON } from 'typedjson-npm/src/typed-json';
import { HydraMember } from './hydra.member';

@JsonObject
export class HydraView extends HydraMember {

    @JsonMember({ name: 'hydra:first' })
    first: string;

    @JsonMember({ name: 'hydra:last' })
    last: string;

    @JsonMember({ name: 'hydra:next' })
    next: string;

}