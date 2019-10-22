import {Container} from "./modules/Container";
import {Maybe} from "./modules/Maybe";
import {Left,Right,either} from "./modules/Either";
import {IO} from "./modules/IO";
import {untils} from "./modules/environment/untils";

//test only
console.log("FM.js--v0.9 is Running...");

const fm={Container, Maybe, Left, Right, either, IO, untils,};









try {
    window.fm=fm;
    console.log(window.fm);
}
catch (e) {

}
export {fm};



