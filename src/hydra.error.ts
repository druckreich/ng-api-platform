import { TypedJSON, JsonMember, JsonObject } from 'typedjson-npm/src/typed-json';
import { HydraMember } from './hydra.member';

@JsonObject
export class HydraError extends HydraMember {

    @JsonMember({ name: "hydra:title" })
    title: string;

    @JsonMember({ name: "hydra:description" })
    description: string;

}
