import {id,trace,curry} from "./environment";

const join = function(mma){ return mma.join(); };
const chain=curry(function (f,m) {
    return m.map(f).join();
});


const untils={join,chain,id,trace};
export {untils};