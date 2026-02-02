precision mediump float;

varying vec2 pos;

#define PI 3.141592

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float mouse_press;
uniform int u_functionType;

float plot(vec2 pos, float pct) {
    return smoothstep(pct-0.1, pct, pos.y) - smoothstep(pct, pct+0.1, pos.y);
}

float checkFunctionType(vec2 pos, int functionType) {
    if (functionType == 0) return plot(pos, (sin(pos.x*10. + u_time) + 5.)/5. - 0.5);
    if (functionType == 1) return plot(pos, (sin(pos.x*8. + u_time)/cos(pos.x*3. + u_time) + 1.)/2.);
    if (functionType == 2) return plot(pos, (sin(1./pos.x*10. + u_time) + 5.)/5. - 0.5);
    if (functionType == 3) return plot(pos, (sin(pos.x/pos.y + u_time) + 10.)/10. - 0.5);
    if (functionType == 4) return plot(pos, (0.2/sin((1./pos.y)/pos.x + u_time) + 2.)/2. - 0.5);
    return 0.;
}

void main() {

    float check = checkFunctionType(pos, u_functionType);

    vec3 color = (1.-check) * vec3(0.) + check * vec3(0.,pos.x,1.-pos.x);

    gl_FragColor = vec4(color, 1.); 

}

// [(cos(pos.x + u_time) + 1.)/2., (sin(pos.x + u_time) + 1.)/2.]

// void main() {

//     vec2 u_mouse = u_mouse / u_resolution;

//     float y = (cos(pos.x + u_time + u_mouse.x) + 1.)/2.;
//     float y2 = (sin(pos.x + u_time) + 1.)/2.;
    
//     vec3 color = vec3(y);

//     float pct = plot(pos, y);
//     float pct2 = plot(pos, y2);

//     color = (1. - pct - pct2) * color + pct * vec3(0.,pos.y,0.) + pct2 * vec3(0.,0.,u_mouse.y);

//     gl_FragColor = vec4(color,1.);
// }