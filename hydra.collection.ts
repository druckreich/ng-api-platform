import { JsonObject, JsonMember, TypedJSON } from 'typedjson-npm/src/typed-json';
import { Book } from './../book';

@JsonObject
export class HydraCollection {
    
    @JsonMember({name: '@context'})
    context:string;

    @JsonMember({name: '@id'})
    id:string;

    @JsonMember({name: '@type'})
    type:string;

    @JsonMember({name: 'hydra:totalItems'})
    totalItems:number;
}