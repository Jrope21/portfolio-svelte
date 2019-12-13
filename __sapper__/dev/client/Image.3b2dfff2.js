import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, c as claim_element, b as children, d as detach, g as attr, h as add_location, G as null_to_empty, j as insert, k as append, n as noop } from './index.0199b3b0.js';

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
			a = claim_element(nodes, "A", { target: true, class: true, href: true }, false);
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
			attr(img, "class", "svelte-1llx1ll");
			add_location(img, file, 64, 6, 1215);
			attr(div, "class", "img-container svelte-1llx1ll");
			add_location(div, file, 63, 4, 1181);
			attr(a, "target", "blank");
			attr(a, "class", "" + null_to_empty(ctx.width) + " svelte-1llx1ll");
			attr(a, "href", ctx.url);
			add_location(a, file, 62, 0, 1129);
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

			if (changed.width) {
				attr(a, "class", "" + null_to_empty(ctx.width) + " svelte-1llx1ll");
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
	let { imgSrc, alt, projectName, url, width } = $$props;

	const writable_props = ['imgSrc', 'alt', 'projectName', 'url', 'width'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Image> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('imgSrc' in $$props) $$invalidate('imgSrc', imgSrc = $$props.imgSrc);
		if ('alt' in $$props) $$invalidate('alt', alt = $$props.alt);
		if ('projectName' in $$props) $$invalidate('projectName', projectName = $$props.projectName);
		if ('url' in $$props) $$invalidate('url', url = $$props.url);
		if ('width' in $$props) $$invalidate('width', width = $$props.width);
	};

	return { imgSrc, alt, projectName, url, width };
}

class Image extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["imgSrc", "alt", "projectName", "url", "width"]);

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
		if (ctx.width === undefined && !('width' in props)) {
			console.warn("<Image> was created without expected prop 'width'");
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

	get width() {
		throw new Error("<Image>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set width(value) {
		throw new Error("<Image>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Image as I };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW1hZ2UuM2IyZGZmZjIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3Byb2plY3RzL0ltYWdlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuZXhwb3J0IGxldCBpbWdTcmMsIGFsdDtcbmV4cG9ydCBsZXQgcHJvamVjdE5hbWU7XG5leHBvcnQgbGV0IHVybDtcbmV4cG9ydCBsZXQgd2lkdGg7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAgIGEsIGRpdntcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5pbWctY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCBsaWdodGdyZXk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbjtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MGVtKXtcbiAgICAgICAgLmltZy1jb250YWluZXJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTsgXG4gICAgICAgICAgICB3aWR0aDogMjV2dztcbiAgICAgICAgICAgIGhlaWdodDogMjV2dztcbiAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfSBcblxuICAgICAgICAubGFyZ2UgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDI4dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4dnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZnVsbC13aWR0aCAuaW1nLWNvbnRhaW5lciB7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGE6aG92ZXIgLmltZy1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggbGlnaHRncmV5O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgXG48L3N0eWxlPlxuXG48YSB0YXJnZXQ9XCJibGFua1wiIGNsYXNzPVwie3dpZHRofVwiIGhyZWY9XCJ7dXJsfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIntpbWdTcmN9XCIgYWx0PVwie2FsdH1cIj5cbiAgICA8L2Rpdj5cbjwvYT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFnRWlCLE1BQU07d0JBQVMsR0FBRzs7Ozs7OzJDQUZULEtBQUs7dUJBQVUsR0FBRzs7Ozs7Ozs7Ozs7O3lCQUUzQixNQUFNOzs7O3lCQUFTLEdBQUc7Ozs7NENBRlQsS0FBSzs7Ozt3QkFBVSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0NBN0RyQyxNQUFJLE1BQU0sRUFBRSxHQUFHLEVBQ1gsV0FBVyxFQUNYLEdBQUcsRUFDSCxpQkFBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
