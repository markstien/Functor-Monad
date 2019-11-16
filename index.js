import {Container} from "./modules/Container";
import {Maybe} from "./modules/Maybe";
import {Left,Right} from "./modules/Either";
import {IO} from "./modules/IO";
import {untils} from "./modules/environment/untils";

const fm={Container, Maybe, Left, Right,IO, untils};

try {
    window.fm=fm;
}
catch (e) {
    exports.fm={Container, Maybe, Left, Right,IO, untils} ;
}