#version 150

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 projectionMatrix;
uniform vec4 lightInEyeSpace;

uniform sampler2D diffuseRamp; 
uniform sampler2D specularRamp;

uniform vec4 Ia; 		 //(0.3, 0.3, 0.3, 1)
uniform vec4 Id; 		 //(0.7, 0.7, 0.7, 1)
uniform vec4 Is; 		 //(1.0, 1.0, 1.0, 1)
uniform vec4 ka; 		 //(1.0, 0.4, 0.4, 1)
uniform vec4 kd; 		 //(1.0, 0.4, 0.4, 1)
uniform vec4 ks; 		 //(0.6, 0.6, 0.6, 1)

uniform float s; 		 // 50
uniform float thickness; // 0.01

uniform vec3 lightPosition;
uniform vec3 cameraPosition;

out vec4 color;
in vec3 vNormal;
in vec3 vPosition;

void main() {

    // We'll start with black, then add various lighting terms to it
    // as we calculate them.
    vec4 finalColor = vec4(0.0, 0.0, 0.0, 1.0);

    vec3 vertexInEyeSpace = (modelViewMatrix*vec4(vPosition,1)).xyz;
    vec3 n = (normalMatrix*vec4(vNormal,0)).xyz;
    vec3 l = normalize((modelViewMatrix * vec4(lightPosition,1)).xyz - vertexInEyeSpace);
    vec3 e = normalize(-vertexInEyeSpace);
    vec3 h = normalize(l + e);
	
    // vec3 h = normalize()

    //gross BlinnPhong/non-energy-conserving/non-PBR lighting

	    // TODO: Calculate ambient, diffuse, and specular lighting for this pixel
	    // based on its position, normal, etc.
	    finalColor += ka*Ia;
	    finalColor += kd*Id*max(dot(n,l), 0.0);
	    finalColor += ks*Is*pow(max(dot(n,h), 0.0), s);

	    

	    // Use the R,G,B components of finalColor for the output color of this
	    // fragment, and set the alpha component to 1.0 (completely opaque).
	    color.rgb = finalColor.rgb;
	    color.a = 1.0;

}

// Easy first step: Set color = normal.  Actually color = 0.5*(normal + 1) is better. Does the result make sense? 
// • This can be a handy way to debug whether your vectors are correct.



    // color.rgba = Ia;
    // color.rgba = Id;
    // color.rgba = Is;
    // color.rgba = ka;
    // color.rgba = kd;
    // color.rgba = ks;
    // color.rgb = vec3(s);
    // color.rgb = vec3(thickness);


		// from slides TODO VLAD: 
	    // vec4 color = texture(name, vec2(u, v));