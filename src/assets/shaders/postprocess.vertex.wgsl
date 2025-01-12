// Attributes
attribute position : vec2<f32>;

uniform scale : vec2<f32>;
// Output
varying vUV : vec2<f32>;

let madd = vec2(0.5, 0.5);

#define CUSTOM_VERTEX_DEFINITIONS

@stage(vertex)
fn main(input : VertexInputs) -> FragmentInputs
{
#define CUSTOM_VERTEX_MAIN_BEGIN

	vUV = (position * madd + madd) * uniforms.scale;
	gl_Position = vec4(position, 0.0, 1.0);

#define CUSTOM_VERTEX_MAIN_END
}
