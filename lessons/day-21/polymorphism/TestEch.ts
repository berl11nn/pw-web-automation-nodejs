import Ech from "./Ech";
import EchCon from "./EchCon";
import NongNoc from "./NongNoc";
import TrungEch from "./TrungEch";

// Một object có thể có nhiều hình dạng trong một design
let ech: Ech = new TrungEch();
ech = new NongNoc();
ech = new EchCon();