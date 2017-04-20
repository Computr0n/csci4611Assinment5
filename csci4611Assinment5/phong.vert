#version 150

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 projectionMatrix;
uniform vec4 lightInViewSpace;

in vec3 vertex;
in vec3 normal;

out vec3 interpPosition;
out vec3 interpNormal;
out vec3 vertexInEyeSpace;

void main() {

    vertexInEyeSpace = (modelViewMatrix*vec4(vertex,1)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertex,1);

    interpPosition = vertex;
    interpNormal = normal;

}
