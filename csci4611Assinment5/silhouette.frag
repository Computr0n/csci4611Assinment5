#version 150

// Nothing much to see here, as the silhouette edges are always black.

out vec4 color;


in vec3 eye;

void main() {
    color = vec4(0,0,0, 1);
    //color = vec4(eye, 1);
}
