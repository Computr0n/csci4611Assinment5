#version 150

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 projectionMatrix;
uniform vec4 lightInViewSpace;
uniform int style; //1 for analytic blinn phong, 2 for ramped Blinn-Phong. 3 for TOON

uniform sampler2D dRamp; 
uniform sampler2D sRamp;
uniform sampler2D toonDRamp; 
uniform sampler2D toonSRamp;

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


in vec3 interpPosition;
in vec3 interpNormal;
in vec3 vertexInEyeSpace;

void main() {

    // We'll start with black, then add various lighting terms to it
    // as we calculate them.

    //vec3 n = (normalMatrix*vec4(interpNormal,0)).xyz;
    vec3 n = normalize((normalMatrix*vec4(interpNormal,0)).xyz);
    vec3 l = normalize(lightInViewSpace.xyz - vertexInEyeSpace);
    vec3 e = normalize(-vertexInEyeSpace);
    vec3 h = normalize(l + e);

    vec4 ambient;
    vec4 diffuse;
    vec4 specular;

    	 if(style == 1){ 
    	ambient 	= ka*Ia;														//ambient 	component
		diffuse 	= kd*Id*texture(toonDRamp, vec2((0.5 * (dot(n,l)) +0.5)));		//diffuse 	component
		specular 	= ks*Is*texture(toonSRamp, vec2(pow(max(dot(n,h), 0.0), s))); 	//specular 	component using half vector
	}
    else if(style == 2){ 
    	ambient 	= ka*Ia;													//ambient 	component
		diffuse 	= kd*Id*texture(dRamp, vec2((0.5 * (dot(n,l)) +0.5)));		//diffuse 	component
		specular 	= ks*Is*texture(sRamp, vec2(pow(max(dot(n,h), 0.0), s))); 	//specular 	component using half vector
	}
    else if(style == 3){ 
		ambient 	= ka*Ia;							//ambient 	component
		diffuse 	= kd*Id*(max(dot(n,l), 0.0));		//diffuse 	component
		specular 	= ks*Is*pow(max(dot(n,h), 0.0), s); //specular 	component using half vector
	} 
	
	color.rgb = vec3(  ambient + diffuse + specular );
}

// Easy first step: Set color = normal.  Actually color = 0.5*(normal + 1) is better. Does the result make sense? 
// • This can be a handy way to debug whether your vectors are correct.

		// from slides TODO VLAD: 
	    // vec4 color = texture(name, vec2(u, v));