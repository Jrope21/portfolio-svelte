import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as claim_element, a as children, b as detach_dev, f as attr_dev, g as add_location, z as null_to_empty, h as insert_dev, j as append_dev, n as noop, T as TextAnimation, t as text, k as space, p as create_component, l as claim_text, m as claim_space, q as claim_component, r as mount_component, A as set_data_dev, u as transition_in, w as transition_out, x as destroy_component, H as HtmlTag, B as validate_each_argument, o as onMount, C as group_outros, D as check_outros, E as destroy_each } from './client.60253a7c.js';

/* src/components/home-components/projects/Image.svelte generated by Svelte v3.29.4 */

const file = "src/components/home-components/projects/Image.svelte";

function create_fragment(ctx) {
	let a;
	let div;
	let img;
	let img_src_value;
	let a_class_value;

	const block = {
		c: function create() {
			a = element("a");
			div = element("div");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { rel: true, class: true, href: true });
			var a_nodes = children(a);
			div = claim_element(a_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			img = claim_element(div_nodes, "IMG", { src: true, alt: true, class: true });
			div_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*imgSrc*/ ctx[0])) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", /*alt*/ ctx[1]);
			attr_dev(img, "class", "svelte-1cd048f");
			add_location(img, file, 108, 6, 2944);
			attr_dev(div, "class", "img-container svelte-1cd048f");
			add_location(div, file, 107, 4, 2910);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "class", a_class_value = "" + (null_to_empty(/*width*/ ctx[3]) + " svelte-1cd048f"));
			attr_dev(a, "href", /*url*/ ctx[2]);
			add_location(a, file, 106, 0, 2860);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);
			append_dev(a, div);
			append_dev(div, img);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*imgSrc*/ 1 && img.src !== (img_src_value = /*imgSrc*/ ctx[0])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*alt*/ 2) {
				attr_dev(img, "alt", /*alt*/ ctx[1]);
			}

			if (dirty & /*width*/ 8 && a_class_value !== (a_class_value = "" + (null_to_empty(/*width*/ ctx[3]) + " svelte-1cd048f"))) {
				attr_dev(a, "class", a_class_value);
			}

			if (dirty & /*url*/ 4) {
				attr_dev(a, "href", /*url*/ ctx[2]);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Image", slots, []);
	let { imgSrc } = $$props, { alt } = $$props;
	let { url } = $$props;
	let { width } = $$props;
	const writable_props = ["imgSrc", "alt", "url", "width"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Image> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("imgSrc" in $$props) $$invalidate(0, imgSrc = $$props.imgSrc);
		if ("alt" in $$props) $$invalidate(1, alt = $$props.alt);
		if ("url" in $$props) $$invalidate(2, url = $$props.url);
		if ("width" in $$props) $$invalidate(3, width = $$props.width);
	};

	$$self.$capture_state = () => ({ imgSrc, alt, url, width });

	$$self.$inject_state = $$props => {
		if ("imgSrc" in $$props) $$invalidate(0, imgSrc = $$props.imgSrc);
		if ("alt" in $$props) $$invalidate(1, alt = $$props.alt);
		if ("url" in $$props) $$invalidate(2, url = $$props.url);
		if ("width" in $$props) $$invalidate(3, width = $$props.width);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [imgSrc, alt, url, width];
}

class Image extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { imgSrc: 0, alt: 1, url: 2, width: 3 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Image",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*imgSrc*/ ctx[0] === undefined && !("imgSrc" in props)) {
			console.warn("<Image> was created without expected prop 'imgSrc'");
		}

		if (/*alt*/ ctx[1] === undefined && !("alt" in props)) {
			console.warn("<Image> was created without expected prop 'alt'");
		}

		if (/*url*/ ctx[2] === undefined && !("url" in props)) {
			console.warn("<Image> was created without expected prop 'url'");
		}

		if (/*width*/ ctx[3] === undefined && !("width" in props)) {
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

/* src/components/home-components/projects/Text.svelte generated by Svelte v3.29.4 */
const file$1 = "src/components/home-components/projects/Text.svelte";

function create_fragment$1(ctx) {
	let div;
	let h2;
	let t0;
	let t1;
	let p;
	let span;
	let t2;
	let t3;
	let html_tag;
	let t4;
	let a;
	let textanimation;
	let current;

	textanimation = new TextAnimation({
			props: { text: `Project Details` },
			$$inline: true
		});

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t0 = text(/*projectName*/ ctx[0]);
			t1 = space();
			p = element("p");
			span = element("span");
			t2 = text(/*projectYear*/ ctx[3]);
			t3 = space();
			t4 = space();
			a = element("a");
			create_component(textanimation.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, /*projectName*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			span = claim_element(p_nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			t2 = claim_text(span_nodes, /*projectYear*/ ctx[3]);
			span_nodes.forEach(detach_dev);
			t3 = claim_space(p_nodes);
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			a = claim_element(div_nodes, "A", { rel: true, href: true, class: true });
			var a_nodes = children(a);
			claim_component(textanimation.$$.fragment, a_nodes);
			a_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-18b1ye0");
			add_location(h2, file$1, 112, 4, 2933);
			attr_dev(span, "class", "year svelte-18b1ye0");
			add_location(span, file$1, 114, 8, 2972);
			html_tag = new HtmlTag(null);
			attr_dev(p, "class", "svelte-18b1ye0");
			add_location(p, file$1, 113, 4, 2960);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", /*url*/ ctx[1]);
			attr_dev(a, "class", "svelte-18b1ye0");
			add_location(a, file$1, 117, 4, 3053);
			attr_dev(div, "class", "svelte-18b1ye0");
			add_location(div, file$1, 111, 0, 2923);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t0);
			append_dev(div, t1);
			append_dev(div, p);
			append_dev(p, span);
			append_dev(span, t2);
			append_dev(p, t3);
			html_tag.m(/*projectText*/ ctx[2], p);
			append_dev(div, t4);
			append_dev(div, a);
			mount_component(textanimation, a, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*projectName*/ 1) set_data_dev(t0, /*projectName*/ ctx[0]);
			if (!current || dirty & /*projectYear*/ 8) set_data_dev(t2, /*projectYear*/ ctx[3]);
			if (!current || dirty & /*projectText*/ 4) html_tag.p(/*projectText*/ ctx[2]);

			if (!current || dirty & /*url*/ 2) {
				attr_dev(a, "href", /*url*/ ctx[1]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textanimation.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textanimation.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(textanimation);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Text", slots, []);

	let { projectName } = $$props,
		{ url } = $$props,
		{ projectText } = $$props,
		{ projectYear } = $$props;

	const writable_props = ["projectName", "url", "projectText", "projectYear"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Text> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("projectName" in $$props) $$invalidate(0, projectName = $$props.projectName);
		if ("url" in $$props) $$invalidate(1, url = $$props.url);
		if ("projectText" in $$props) $$invalidate(2, projectText = $$props.projectText);
		if ("projectYear" in $$props) $$invalidate(3, projectYear = $$props.projectYear);
	};

	$$self.$capture_state = () => ({
		TextAnimation,
		projectName,
		url,
		projectText,
		projectYear
	});

	$$self.$inject_state = $$props => {
		if ("projectName" in $$props) $$invalidate(0, projectName = $$props.projectName);
		if ("url" in $$props) $$invalidate(1, url = $$props.url);
		if ("projectText" in $$props) $$invalidate(2, projectText = $$props.projectText);
		if ("projectYear" in $$props) $$invalidate(3, projectYear = $$props.projectYear);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [projectName, url, projectText, projectYear];
}

class Text extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			projectName: 0,
			url: 1,
			projectText: 2,
			projectYear: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Text",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*projectName*/ ctx[0] === undefined && !("projectName" in props)) {
			console.warn("<Text> was created without expected prop 'projectName'");
		}

		if (/*url*/ ctx[1] === undefined && !("url" in props)) {
			console.warn("<Text> was created without expected prop 'url'");
		}

		if (/*projectText*/ ctx[2] === undefined && !("projectText" in props)) {
			console.warn("<Text> was created without expected prop 'projectText'");
		}

		if (/*projectYear*/ ctx[3] === undefined && !("projectYear" in props)) {
			console.warn("<Text> was created without expected prop 'projectYear'");
		}
	}

	get projectName() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectName(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get url() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set url(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectText() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectText(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get projectYear() {
		throw new Error("<Text>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set projectYear(value) {
		throw new Error("<Text>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/home-components/projects/Projects.svelte generated by Svelte v3.29.4 */
const file$2 = "src/components/home-components/projects/Projects.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[1] = list[i];
	child_ctx[3] = i;
	return child_ctx;
}

// (138:8) {#each portfolioCards as card, index}
function create_each_block(ctx) {
	let div2;
	let div0;
	let image;
	let t0;
	let div1;
	let text_1;
	let t1;
	let div2_index_value;
	let current;

	image = new Image({
			props: {
				imgSrc: /*card*/ ctx[1].imgSrc,
				url: /*card*/ ctx[1].url,
				alt: /*card*/ ctx[1].alt
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				projectName: /*card*/ ctx[1].projectName,
				url: /*card*/ ctx[1].url,
				projectText: /*card*/ ctx[1].projectText,
				projectYear: /*card*/ ctx[1].projectYear
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			create_component(image.$$.fragment);
			t0 = space();
			div1 = element("div");
			create_component(text_1.$$.fragment);
			t1 = space();
			this.h();
		},
		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true, index: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(image.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			claim_component(text_1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "image-container svelte-lb4k03");
			add_location(div0, file$2, 139, 16, 3682);
			attr_dev(div1, "class", "text-container svelte-lb4k03");
			add_location(div1, file$2, 142, 16, 3832);
			attr_dev(div2, "class", "card-container svelte-lb4k03");
			attr_dev(div2, "index", div2_index_value = /*index*/ ctx[3]);
			add_location(div2, file$2, 138, 12, 3629);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			mount_component(image, div0, null);
			append_dev(div2, t0);
			append_dev(div2, div1);
			mount_component(text_1, div1, null);
			append_dev(div2, t1);
			current = true;
		},
		p: function update(ctx, dirty) {
			const image_changes = {};
			if (dirty & /*portfolioCards*/ 1) image_changes.imgSrc = /*card*/ ctx[1].imgSrc;
			if (dirty & /*portfolioCards*/ 1) image_changes.url = /*card*/ ctx[1].url;
			if (dirty & /*portfolioCards*/ 1) image_changes.alt = /*card*/ ctx[1].alt;
			image.$set(image_changes);
			const text_1_changes = {};
			if (dirty & /*portfolioCards*/ 1) text_1_changes.projectName = /*card*/ ctx[1].projectName;
			if (dirty & /*portfolioCards*/ 1) text_1_changes.url = /*card*/ ctx[1].url;
			if (dirty & /*portfolioCards*/ 1) text_1_changes.projectText = /*card*/ ctx[1].projectText;
			if (dirty & /*portfolioCards*/ 1) text_1_changes.projectYear = /*card*/ ctx[1].projectYear;
			text_1.$set(text_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(image.$$.fragment, local);
			transition_in(text_1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(image.$$.fragment, local);
			transition_out(text_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div2);
			destroy_component(image);
			destroy_component(text_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(138:8) {#each portfolioCards as card, index}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let div;
	let current;
	let each_value = /*portfolioCards*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Selected Works");
			t1 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Selected Works");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-lb4k03");
			add_location(h2, file$2, 135, 4, 3510);
			attr_dev(div, "class", "projects-container svelte-lb4k03");
			add_location(div, file$2, 136, 4, 3538);
			attr_dev(section, "class", "svelte-lb4k03");
			add_location(section, file$2, 134, 0, 3496);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*portfolioCards*/ 1) {
				each_value = /*portfolioCards*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Projects", slots, []);
	let { portfolioCards } = $$props;
	const writable_props = ["portfolioCards"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("portfolioCards" in $$props) $$invalidate(0, portfolioCards = $$props.portfolioCards);
	};

	$$self.$capture_state = () => ({ onMount, Image, Text, portfolioCards });

	$$self.$inject_state = $$props => {
		if ("portfolioCards" in $$props) $$invalidate(0, portfolioCards = $$props.portfolioCards);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [portfolioCards];
}

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { portfolioCards: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Projects",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*portfolioCards*/ ctx[0] === undefined && !("portfolioCards" in props)) {
			console.warn("<Projects> was created without expected prop 'portfolioCards'");
		}
	}

	get portfolioCards() {
		throw new Error("<Projects>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set portfolioCards(value) {
		throw new Error("<Projects>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Projects as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdHMuM2Y4N2M3ZmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9wcm9qZWN0cy9JbWFnZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvcHJvamVjdHMvVGV4dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5leHBvcnQgbGV0IGltZ1NyYywgYWx0O1xuZXhwb3J0IGxldCB1cmw7XG5leHBvcnQgbGV0IHdpZHRoO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIEBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWwudmFyaWFibGVzLnNjc3MnO1xuICAgIFxuICAgIGEsIGRpdntcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5pbWctY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCBjb2xvcihhY2NlbnRTZWNvbmRhcnkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3MgZWFzZSwgdHJhbnNmb3JtIC4zcyBlYXNlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKXtcbiAgICAgICAgLmltZy1jb250YWluZXJ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6MTAwJTsgXG4gICAgICAgICAgICB3aWR0aDogMjV2dztcbiAgICAgICAgICAgIGhlaWdodDogMjV2dztcbiAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNTBweDtcbiAgICAgICAgfSBcblxuICAgICAgICAubGFyZ2UgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDMwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ1MHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZnVsbC13aWR0aCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mdWxsLXdpZHRoIC5pbWctY29udGFpbmVyIHsgXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAzMHZ3ICsgNjB2dyk7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdnc7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAzOXB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNDUwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhOmhvdmVyIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCBjb2xvcihhY2NlbnRTZWNvbmRhcnkpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgXG48L3N0eWxlPlxuXG48YSByZWw9cHJlZmV0Y2ggY2xhc3M9XCJ7d2lkdGh9XCIgaHJlZj1cInt1cmx9XCI+XG4gICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgIDxpbWcgc3JjPVwie2ltZ1NyY31cIiBhbHQ9XCJ7YWx0fVwiPlxuICAgIDwvZGl2PlxuPC9hPiIsIjxzY3JpcHQ+XG5pbXBvcnQgVGV4dEFuaW1hdGlvbiBmcm9tICcuLi8uLi9jb21tb24tY29tcG9uZW50cy9UZXh0QW5pbWF0aW9uLnN2ZWx0ZSc7XG5cbmV4cG9ydCBsZXQgcHJvamVjdE5hbWUsIHVybCwgcHJvamVjdFRleHQsIHByb2plY3RZZWFyO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIEBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWwudmFyaWFibGVzLnNjc3MnO1xuXG4gICAgYXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHJlbTtcbiAgICAgICAgY29sb3I6ICM5ODk4OTg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTVyZW0gMHJlbSA1cmVtIDByZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMTNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICBjb2xvcjogY29sb3IocHJpbWFyeSk7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgfVxuXG4gICAgcHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0ZXh0LWluZGVudDogMTBweDtcbiAgICB9XG5cbiAgICAueWVhcntcbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQ6ICcyMDE5JztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBvcGFjaXR5OiAuNTtcbiAgICAgICAgei1pbmRleDogLTU7XG4gICAgICAgIGxlZnQ6IC02MHB4O1xuICAgICAgICB0b3A6IDMwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG4gICAgICAgIGNvbG9yOiAjZTZlN2U4O1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChzbSkpIHtcbiAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChtZCkpe1xuICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3JlbTtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgZm9udC1zaXplOiAxOHJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgfVxuICAgIGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRyZW07XG4gICAgfVxufVxuXG48L3N0eWxlPlxuPGRpdj5cbiAgICA8aDI+e3Byb2plY3ROYW1lfTwvaDI+XG4gICAgPHA+XG4gICAgICAgIDxzcGFuIGNsYXNzPSd5ZWFyJz57cHJvamVjdFllYXJ9PC9zcGFuPlxuICAgICAgICB7QGh0bWwgcHJvamVjdFRleHR9XG4gICAgPC9wPlxuICAgIDxhIHJlbD1wcmVmZXRjaCBocmVmPVwie3VybH1cIj5cbiAgICAgICAgPFRleHRBbmltYXRpb24gdGV4dD17YFByb2plY3QgRGV0YWlsc2B9IC8+XG4gICAgPC9hPlxuPC9kaXY+IiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJzsgIFxuXG4gICAgaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2Uuc3ZlbHRlJztcbiAgICBpbXBvcnQgVGV4dCBmcm9tICcuL1RleHQuc3ZlbHRlJzsgIFxuXG4gICAgZXhwb3J0IGxldCBwb3J0Zm9saW9DYXJkcztcbiAgICBcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICBAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsLnZhcmlhYmxlcy5zY3NzJztcbiAgICBcbiAgICBzZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDEwJSAwIDEwJSAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChzbSkpeyBcbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMCUgMCAxMCUgMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwNSU7XG4gICAgfVxuXG4gICAgZGl2LmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChzbSkpe1xuICAgICAgICBkaXYuY2FyZC1jb250YWluZXIge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDglO1xuICAgICAgICB9XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcjpudGgtb2YtdHlwZSgybil7XG4gICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgIH1cbiAgICAgICAgZGl2LnRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAzNSU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcjpudGgtb2YtdHlwZSgybikgZGl2LmltYWdlLWNvbnRhaW5lcntcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KG1kKSl7XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzYzcHgpe1xuICAgICAgICBkaXYuY2FyZC1jb250YWluZXJ7XG4gICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpdi5wcm9qZWN0cy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTpmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gICAgICAgIGNvbG9yOiBjb2xvcihwcmltYXJ5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB9XG5cbiAgICBoMjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xuICAgIH1cblxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogYnJlYWtwb2ludChtZCkpe1xuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIzcmVtO1xuICAgICAgICB9XG4gICAgfVxuPC9zdHlsZT5cblxuPHNlY3Rpb24+XG4gICAgPGgyPlNlbGVjdGVkIFdvcmtzPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHsjZWFjaCBwb3J0Zm9saW9DYXJkcyBhcyBjYXJkLCBpbmRleH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiIHtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaW1nU3JjPXtjYXJkLmltZ1NyY30gdXJsPXtjYXJkLnVybH0gYWx0PXtjYXJkLmFsdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgcHJvamVjdE5hbWU9e2NhcmQucHJvamVjdE5hbWV9IHVybD17Y2FyZC51cmx9IHByb2plY3RUZXh0PXtjYXJkLnByb2plY3RUZXh0fSBwcm9qZWN0WWVhcj17Y2FyZC5wcm9qZWN0WWVhcn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBNEdpQixHQUFNO2dDQUFTLEdBQUc7Ozs7OztzRUFGWCxHQUFLOytCQUFVLEdBQUc7Ozs7Ozs7Ozt1RUFFekIsR0FBTTs7Ozs7aUNBQVMsR0FBRzs7OytGQUZYLEdBQUs7Ozs7O2dDQUFVLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXpHL0IsTUFBTSxnQkFBRSxHQUFHO09BQ1gsR0FBRztPQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQzZHUCxHQUFXOzs7OzZCQUVRLEdBQVc7Ozs7Ozs7Ozs7Ozs2Q0FGOUIsR0FBVzs7Ozs7OzsrQ0FFUSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBR1osR0FBRzs7Ozs7Ozs7Ozs7Ozs7OzhCQUZmLEdBQVc7Ozs7Ozs7K0VBSGpCLEdBQVc7K0VBRVEsR0FBVzt5RUFDeEIsR0FBVzs7O2dDQUVDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxIbkIsV0FBVztJQUFFLEdBQUc7SUFBRSxXQUFXO0lBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ3lJbEIsR0FBSSxJQUFDLE1BQU07a0JBQU8sR0FBSSxJQUFDLEdBQUc7a0JBQU8sR0FBSSxJQUFDLEdBQUc7Ozs7Ozs7MEJBR3JDLEdBQUksSUFBQyxXQUFXO2tCQUFPLEdBQUksSUFBQyxHQUFHOzBCQUFlLEdBQUksSUFBQyxXQUFXOzBCQUFlLEdBQUksSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRUFIakcsR0FBSSxJQUFDLE1BQU07a0VBQU8sR0FBSSxJQUFDLEdBQUc7a0VBQU8sR0FBSSxJQUFDLEdBQUc7OzsyRUFHckMsR0FBSSxJQUFDLFdBQVc7bUVBQU8sR0FBSSxJQUFDLEdBQUc7MkVBQWUsR0FBSSxJQUFDLFdBQVc7MkVBQWUsR0FBSSxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0FOckgsR0FBYzs7OztnQ0FBbkIsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBQyxHQUFjOzs7OytCQUFuQixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O3dCQUFKLE1BQUk7Ozs7Ozs7Ozs7a0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FuSUMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
