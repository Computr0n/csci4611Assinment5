#version 150

out vec4 color;

void main() {

    // We'll start with black, then add various lighting terms to it
    // as we calculate them.
    vec3 finalColor = vec3(0.0, 0.0, 0.0);

    // TODO: Calculate ambient, diffuse, and specular lighting for this pixel
    // based on its position, normal, etc.

    // Use the R,G,B components of finalColor for the output color of this
    // fragment, and set the alpha component to 1.0 (completely opaque).
    color.rgb = finalColor;
    color.a = 1.0;

}
