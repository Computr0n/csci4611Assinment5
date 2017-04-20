README

Vladimir Kuksenko
kukse004@umn.edu

Work Log:
1. Added uniforms and texture samplers to C++ cpu code and passed to the vert/frag shaders
2. Added Blinn-Phong lighting to shaders. Computed in Frag shader per-pixel.
3. Added Ramp Shader modifications
4. Added Silhouette edges to silhouette.vert


FEATURE:
When you hit buttons 1, 2 & 3, the pixel shader switches the way it renders to the following respective modes in order to aid in debugging and prove the Blinn-Phong analytical shader is identical to the standard Diffuse/Specular ramp shader:

1. Blinn-Phong Ramp Shader with Toon ramp textures
2. Blinn-Phong Ramp Shader with standard ramp textures
3. Blinn-Phong standard analytical shader without textures (renders identically to #2 above)

NOTE: As per requirements, I am noting that the specular component of the blinn-phong lighting uses the HALF VECTOR in its computation.