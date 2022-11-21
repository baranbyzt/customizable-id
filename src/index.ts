import { Letters } from "./classes/Letters";


export let custom = (limit: number): string => {

    let NumberCheckBBs = new Letters(limit);

    return NumberCheckBBs.customizableV15()
}

