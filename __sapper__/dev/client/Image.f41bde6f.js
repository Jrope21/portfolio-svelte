import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, c as claim_element, b as children, d as detach, g as attr, h as add_location, j as insert, k as append, n as noop } from './index.0199b3b0.js';

/* src/components/projects/Image.svelte generated by Svelte v3.9.1 */

const file = "src/components/projects/Image.svelte";

function create_fragment(ctx) {
	var a, div, img;

	return {
		c: function create() {
			a = element("a");
			div = element("div");
			img = element("img");
			this.h();
		},

		l: function claim(nodes) {
			a = claim_element(nodes, "A", { target: true, href: true, class: true }, false);
			var a_nodes = children(a);

			div = claim_element(a_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach);
			div_nodes.forEach(detach);
			a_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			attr(img, "src", ctx.imgSrc);
			attr(img, "alt", ctx.alt);
			attr(img, "class", "svelte-k3snuk");
			add_location(img, file, 53, 6, 980);
			attr(div, "class", "img-container svelte-k3snuk");
			add_location(div, file, 52, 4, 946);
			attr(a, "target", "blank");
			attr(a, "href", ctx.url);
			attr(a, "class", "svelte-k3snuk");
			add_location(a, file, 51, 0, 910);
		},

		m: function mount(target, anchor) {
			insert(target, a, anchor);
			append(a, div);
			append(div, img);
		},

		p: function update(changed, ctx) {
			if (changed.imgSrc) {
				attr(img, "src", ctx.imgSrc);
			}

			if (changed.alt) {
				attr(img, "alt", ctx.alt);
			}

			if (changed.url) {
				attr(a, "href", ctx.url);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(a);
			}
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { imgSrc, alt, projectName, url } = $$props;

	const writable_props = ['imgSrc', 'alt', 'projectName', 'url'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Image> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('imgSrc' in $$props) $$invalidate('imgSrc', imgSrc = $$props.imgSrc);
		if ('alt' in $$props) $$invalidate('alt', alt = $$props.alt);
		if ('projectName' in $$props) $$invalidate('projectName', projectName = $$props.projectName);
		if ('url' in $$props) $$invalidate('url', url = $$props.url);
	};

	return { imgSrc, alt, projectName, url };
}

class Image extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["imgSrc", "alt", "projectName", "url"]);

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.imgSrc === undefined && !('imgSrc' in props)) {
			console.warn("<Image> was created without expected prop 'imgSrc'");
		}
		if (ctx.alt === undefined && !('alt' in props)) {
			console.warn("<Image> was created without expected prop 'alt'");
		}
		if (ctx.projectName === undefined && !('projectName' in props)) {
			console.warn("<Image> was created without expected prop 'projectName'");
		}
		if (ctx.url === undefined && !('url' in props)) {
			console.warn("<Image> was created without expected prop 'url'");
		}
	}

	get imgSrc() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set imgSrc(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get alt() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set alt(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectName() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectName(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get url() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set url(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Image as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuZjQxYmRlNmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL0ltYWdlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuZXhwb3J0IGxldCBpbWdTcmMsIGFsdDtcbmV4cG9ydCBsZXQgcHJvamVjdE5hbWU7XG5leHBvcnQgbGV0IHVybDtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgICBhLCBkaXZ7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAuaW1nLWNvbnRhaW5lcntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogNjV2dztcbiAgICAgICAgaGVpZ2h0OiA2NXZ3O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggbGlnaHRncmV5O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDBlbSl7XG4gICAgICAgIC5pbWctY29udGFpbmVye1xuICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7IFxuICAgICAgICAgICAgd2lkdGg6IDI1dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIH0gICBcbiAgICB9XG5cbiAgICBhOmhvdmVyIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IGxpZ2h0Z3JleTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgIFxuPC9zdHlsZT5cblxuPGEgdGFyZ2V0PVwiYmxhbmtcIiBocmVmPVwie3VybH1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgPGltZyBzcmM9XCJ7aW1nU3JjfVwiIGFsdD1cInthbHR9XCI+XG4gICAgPC9kaXY+XG48L2E+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBcURpQixNQUFNO3dCQUFTLEdBQUc7Ozs7Ozt1QkFGVixHQUFHOzs7Ozs7Ozs7Ozs7O3lCQUVYLE1BQU07Ozs7eUJBQVMsR0FBRzs7Ozt3QkFGVixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0NBbERyQixNQUFJLE1BQU0sRUFBRSxHQUFHLEVBQ1gsV0FBVyxFQUNYLGVBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
