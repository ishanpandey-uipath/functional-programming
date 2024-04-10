let cnt = 0;
// cnt can be modified by other functions, since it lies outside scope if incrementCnt
// SideEffect - any observable change outside a function.
// - makes code difficult to predict/reason about, and harder to debug.

let incrementCnt = function() {
    cnt++;
    return cnt;
};

