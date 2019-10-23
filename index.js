import {Container} from "./modules/Container";
import {Maybe} from "./modules/Maybe";
import {Left,Right,either} from "./modules/Either";
import {IO} from "./modules/IO";
import {untils} from "./modules/environment/untils";

const fm={Container, Maybe, Left, Right, either, IO, untils};
const fmDeconstruction=[Container, Maybe, Left, Right, either, IO, untils];

try {
    window.fm=fm;
    window.fmDeconstruction=fmDeconstruction;
}
catch (e) {

}
export {fm,fmDeconstruction};



