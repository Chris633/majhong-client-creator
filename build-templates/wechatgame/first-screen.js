const options = {
    alpha: false,
    antialias: true,
    depth: true,
    stencil: true,
    premultipliedAlpha: false,
    preserveDrawingBuffer: false,
    powerPreference: 'default',
    failIfMajorPerformanceCaveat: false,
};

function start() {
    let gl = window.canvas.getContext("webgl", options);
    if (!gl) return Promise.reject("不支持webgl")
    return Promise.resolve()

}
module.exports = { start };