#version 150

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 projectionMatrix;

in vec3 vertex;
in vec3 normal;

void main() {

    // TODO: Transform the vertex position and normal to eye space
    // and pass them on to the fragment shader so that it can
    // calculate the lighting correctly.

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertex,1);
}
