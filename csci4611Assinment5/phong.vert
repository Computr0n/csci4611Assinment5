#version 150

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 projectionMatrix;



in vec3 vertex;
in vec3 normal;

out vec3 vNormal;
out vec3 vPosition;

void main() {

    // DONE?: Transform the vertex position and normal to eye space
    // and pass them on to the fragment shader so that it can
    // calculate the lighting correctly.

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertex,1);
    vPosition 	= vec3(projectionMatrix * modelViewMatrix * vec4(vertex,1));
    vec4 eyeN 	= projectionMatrix * modelViewMatrix * vec4(normal,1);

    vNormal = vec3(eyeN);
}
