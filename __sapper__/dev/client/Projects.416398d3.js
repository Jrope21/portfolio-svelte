import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, c as claim_element, a as children, b as detach_dev, f as attr_dev, g as add_location, z as null_to_empty, h as insert_dev, j as append_dev, n as noop, T as TextAnimation, t as text, k as space, p as create_component, l as claim_text, m as claim_space, q as claim_component, r as mount_component, A as set_data_dev, u as transition_in, w as transition_out, x as destroy_component, H as HtmlTag, B as validate_each_argument, o as onMount, C as group_outros, D as check_outros, E as destroy_each } from './client.009ecea0.js';

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
			attr_dev(img, "class", "svelte-17cohc4");
			add_location(img, file, 108, 6, 2945);
			attr_dev(div, "class", "img-container svelte-17cohc4");
			add_location(div, file, 107, 4, 2911);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "class", a_class_value = "" + (null_to_empty(/*width*/ ctx[3]) + " svelte-17cohc4"));
			attr_dev(a, "href", /*url*/ ctx[2]);
			add_location(a, file, 106, 0, 2861);
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

			if (dirty & /*width*/ 8 && a_class_value !== (a_class_value = "" + (null_to_empty(/*width*/ ctx[3]) + " svelte-17cohc4"))) {
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
			attr_dev(h2, "class", "svelte-1lsm61t");
			add_location(h2, file$1, 111, 4, 2898);
			attr_dev(span, "class", "year svelte-1lsm61t");
			add_location(span, file$1, 113, 8, 2937);
			html_tag = new HtmlTag(null);
			attr_dev(p, "class", "svelte-1lsm61t");
			add_location(p, file$1, 112, 4, 2925);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", /*url*/ ctx[1]);
			attr_dev(a, "class", "svelte-1lsm61t");
			add_location(a, file$1, 116, 4, 3018);
			attr_dev(div, "class", "svelte-1lsm61t");
			add_location(div, file$1, 110, 0, 2888);
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
	child_ctx[2] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

// (136:4) {#if title}
function create_if_block(ctx) {
	let h2;
	let t;

	const block = {
		c: function create() {
			h2 = element("h2");
			t = text(/*title*/ ctx[1]);
			this.h();
		},
		l: function claim(nodes) {
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, /*title*/ ctx[1]);
			h2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-lb4k03");
			add_location(h2, file$2, 136, 8, 3537);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h2, anchor);
			append_dev(h2, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*title*/ 2) set_data_dev(t, /*title*/ ctx[1]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(136:4) {#if title}",
		ctx
	});

	return block;
}

// (141:8) {#each portfolioCards as card, index}
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
				imgSrc: /*card*/ ctx[2].imgSrc,
				url: /*card*/ ctx[2].url,
				alt: /*card*/ ctx[2].alt
			},
			$$inline: true
		});

	text_1 = new Text({
			props: {
				projectName: /*card*/ ctx[2].projectName,
				url: /*card*/ ctx[2].url,
				projectText: /*card*/ ctx[2].projectText,
				projectYear: /*card*/ ctx[2].projectYear
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
			add_location(div0, file$2, 142, 16, 3717);
			attr_dev(div1, "class", "text-container svelte-lb4k03");
			add_location(div1, file$2, 145, 16, 3867);
			attr_dev(div2, "class", "card-container svelte-lb4k03");
			attr_dev(div2, "index", div2_index_value = /*index*/ ctx[4]);
			add_location(div2, file$2, 141, 12, 3664);
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
			if (dirty & /*portfolioCards*/ 1) image_changes.imgSrc = /*card*/ ctx[2].imgSrc;
			if (dirty & /*portfolioCards*/ 1) image_changes.url = /*card*/ ctx[2].url;
			if (dirty & /*portfolioCards*/ 1) image_changes.alt = /*card*/ ctx[2].alt;
			image.$set(image_changes);
			const text_1_changes = {};
			if (dirty & /*portfolioCards*/ 1) text_1_changes.projectName = /*card*/ ctx[2].projectName;
			if (dirty & /*portfolioCards*/ 1) text_1_changes.url = /*card*/ ctx[2].url;
			if (dirty & /*portfolioCards*/ 1) text_1_changes.projectText = /*card*/ ctx[2].projectText;
			if (dirty & /*portfolioCards*/ 1) text_1_changes.projectYear = /*card*/ ctx[2].projectYear;
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
		source: "(141:8) {#each portfolioCards as card, index}",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let section;
	let t;
	let div;
	let current;
	let if_block = /*title*/ ctx[1] && create_if_block(ctx);
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
			if (if_block) if_block.c();
			t = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			if (if_block) if_block.l(section_nodes);
			t = claim_space(section_nodes);
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
			attr_dev(div, "class", "projects-container svelte-lb4k03");
			add_location(div, file$2, 139, 4, 3573);
			attr_dev(section, "class", "svelte-lb4k03");
			add_location(section, file$2, 134, 0, 3503);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			if (if_block) if_block.m(section, null);
			append_dev(section, t);
			append_dev(section, div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*title*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(section, t);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

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
			if (if_block) if_block.d();
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
	let { portfolioCards } = $$props, { title } = $$props;
	const writable_props = ["portfolioCards", "title"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Projects> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("portfolioCards" in $$props) $$invalidate(0, portfolioCards = $$props.portfolioCards);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
	};

	$$self.$capture_state = () => ({
		onMount,
		Image,
		Text,
		portfolioCards,
		title
	});

	$$self.$inject_state = $$props => {
		if ("portfolioCards" in $$props) $$invalidate(0, portfolioCards = $$props.portfolioCards);
		if ("title" in $$props) $$invalidate(1, title = $$props.title);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [portfolioCards, title];
}

class Projects extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { portfolioCards: 0, title: 1 });

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

		if (/*title*/ ctx[1] === undefined && !("title" in props)) {
			console.warn("<Projects> was created without expected prop 'title'");
		}
	}

	get portfolioCards() {
		throw new Error("<Projects>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set portfolioCards(value) {
		throw new Error("<Projects>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<Projects>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Projects>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Projects as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvamVjdHMuNDE2Mzk4ZDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hvbWUtY29tcG9uZW50cy9wcm9qZWN0cy9JbWFnZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvcHJvamVjdHMvVGV4dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9ob21lLWNvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHMuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5leHBvcnQgbGV0IGltZ1NyYywgYWx0O1xuZXhwb3J0IGxldCB1cmw7XG5leHBvcnQgbGV0IHdpZHRoO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIEBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWwudmFyaWFibGVzLnNjc3MnO1xuICAgIFxuICAgIGEsIGRpdntcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGEge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cblxuICAgIC5pbWctY29udGFpbmVye1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgICAgIHdpZHRoOiA2NXZ3O1xuICAgICAgICBoZWlnaHQ6IDY1dnc7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCBjb2xvcihhY2NlbnRTZWNvbmRhcnkpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuM3MgZWFzZSwgdHJhbnNmb3JtIC4zcyBlYXNlO1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKXtcbiAgICAgICAgLmltZy1jb250YWluZXJ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgLy8gbWF4LXdpZHRoOjEwMCU7IFxuICAgICAgICAgICAgd2lkdGg6IDI1dnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1dnc7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzUwcHg7XG4gICAgICAgIH0gXG5cbiAgICAgICAgLmxhcmdlIC5pbWctY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHZ3O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZ1bGwtd2lkdGgge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuZnVsbC13aWR0aCAuaW1nLWNvbnRhaW5lciB7IFxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMzB2dyArIDYwdncpO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHZ3O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMzlweDtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYTpob3ZlciAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNHB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggY29sb3IoYWNjZW50U2Vjb25kYXJ5KTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgIFxuPC9zdHlsZT5cblxuPGEgcmVsPXByZWZldGNoIGNsYXNzPVwie3dpZHRofVwiIGhyZWY9XCJ7dXJsfVwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbWctY29udGFpbmVyXCI+XG4gICAgICA8aW1nIHNyYz1cIntpbWdTcmN9XCIgYWx0PVwie2FsdH1cIj5cbiAgICA8L2Rpdj5cbjwvYT4iLCI8c2NyaXB0PlxuaW1wb3J0IFRleHRBbmltYXRpb24gZnJvbSAnLi4vLi4vY29tbW9uLWNvbXBvbmVudHMvVGV4dEFuaW1hdGlvbi5zdmVsdGUnO1xuXG5leHBvcnQgbGV0IHByb2plY3ROYW1lLCB1cmwsIHByb2plY3RUZXh0LCBwcm9qZWN0WWVhcjtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiAgICBAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2xvYmFsLnZhcmlhYmxlcy5zY3NzJztcblxuICAgIGF7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTByZW07XG4gICAgICAgIGNvbG9yOiAjOTg5ODk4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgfVxuICAgIGgyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDE1cmVtIDByZW0gNXJlbSAwcmVtO1xuICAgICAgICBmb250LXNpemU6IDEzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgIH1cblxuICAgIHB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLnllYXJ7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50OiAnMjAxOSc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIHotaW5kZXg6IC01O1xuICAgICAgICBsZWZ0OiAtNjBweDtcbiAgICAgICAgdG9wOiAzMHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICBjb2xvcjogI2U2ZTdlODtcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQoc20pKSB7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDByZW07XG4gICAgICAgIH1cbiAgICB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobWQpKXtcbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNyZW07XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgIH1cbiAgICBhe1xuICAgICAgICBmb250LXNpemU6IDE0cmVtO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbjxkaXY+XG4gICAgPGgyPntwcm9qZWN0TmFtZX08L2gyPlxuICAgIDxwPlxuICAgICAgICA8c3BhbiBjbGFzcz0neWVhcic+e3Byb2plY3RZZWFyfTwvc3Bhbj5cbiAgICAgICAge0BodG1sIHByb2plY3RUZXh0fVxuICAgIDwvcD5cbiAgICA8YSByZWw9cHJlZmV0Y2ggaHJlZj1cInt1cmx9XCI+XG4gICAgICAgIDxUZXh0QW5pbWF0aW9uIHRleHQ9e2BQcm9qZWN0IERldGFpbHNgfSAvPlxuICAgIDwvYT5cbjwvZGl2PiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7ICBcblxuICAgIGltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlLnN2ZWx0ZSc7XG4gICAgaW1wb3J0IFRleHQgZnJvbSAnLi9UZXh0LnN2ZWx0ZSc7ICBcblxuICAgIGV4cG9ydCBsZXQgcG9ydGZvbGlvQ2FyZHMsIHRpdGxlO1xuICAgIFxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAgIEBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9nbG9iYWwudmFyaWFibGVzLnNjc3MnO1xuICAgIFxuICAgIHNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTAlIDAgMTAlIDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KHNtKSl7IFxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwJSAwIDEwJSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGl2LmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA1JTtcbiAgICB9XG5cbiAgICBkaXYuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KHNtKSl7XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOCU7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmNhcmQtY29udGFpbmVyOm50aC1vZi10eXBlKDJuKXtcbiAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgICAgICAgfVxuICAgICAgICBkaXYudGV4dC1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgfVxuICAgICAgICBkaXYuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgZGl2LmNhcmQtY29udGFpbmVyOm50aC1vZi10eXBlKDJuKSBkaXYuaW1hZ2UtY29udGFpbmVye1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IGJyZWFrcG9pbnQobWQpKXtcbiAgICAgICAgZGl2LmNhcmQtY29udGFpbmVye1xuICAgICAgICAgICAgd2lkdGg6IDg1JTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzNjNweCl7XG4gICAgICAgIGRpdi5jYXJkLWNvbnRhaW5lcntcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGl2LnByb2plY3RzLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OmZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgICAgICAgY29sb3I6IGNvbG9yKHByaW1hcnkpO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgIH1cblxuICAgIGgyOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gICAgfVxuXG5cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiBicmVha3BvaW50KG1kKSl7XG4gICAgICAgIGgyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNyZW07XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG48c2VjdGlvbj5cbiAgICB7I2lmIHRpdGxlfVxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgey9pZn1cbiAgICBcbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICAgIHsjZWFjaCBwb3J0Zm9saW9DYXJkcyBhcyBjYXJkLCBpbmRleH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lclwiIHtpbmRleH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgaW1nU3JjPXtjYXJkLmltZ1NyY30gdXJsPXtjYXJkLnVybH0gYWx0PXtjYXJkLmFsdH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgcHJvamVjdE5hbWU9e2NhcmQucHJvamVjdE5hbWV9IHVybD17Y2FyZC51cmx9IHByb2plY3RUZXh0PXtjYXJkLnByb2plY3RUZXh0fSBwcm9qZWN0WWVhcj17Y2FyZC5wcm9qZWN0WWVhcn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICB7L2VhY2h9XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0NBNEdpQixHQUFNO2dDQUFTLEdBQUc7Ozs7OztzRUFGWCxHQUFLOytCQUFVLEdBQUc7Ozs7Ozs7Ozt1RUFFekIsR0FBTTs7Ozs7aUNBQVMsR0FBRzs7OytGQUZYLEdBQUs7Ozs7O2dDQUFVLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXpHL0IsTUFBTSxnQkFBRSxHQUFHO09BQ1gsR0FBRztPQUNILEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQzRHUCxHQUFXOzs7OzZCQUVRLEdBQVc7Ozs7Ozs7Ozs7Ozs2Q0FGOUIsR0FBVzs7Ozs7OzsrQ0FFUSxHQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBR1osR0FBRzs7Ozs7Ozs7Ozs7Ozs7OzhCQUZmLEdBQVc7Ozs7Ozs7K0VBSGpCLEdBQVc7K0VBRVEsR0FBVzt5RUFDeEIsR0FBVzs7O2dDQUVDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWpIbkIsV0FBVztJQUFFLEdBQUc7SUFBRSxXQUFXO0lBQUUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ3FJeEMsR0FBSzs7Ozs7O3NDQUFMLEdBQUs7Ozs7Ozs7Ozs7Ozs7c0RBQUwsR0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBT2lCLEdBQUksSUFBQyxNQUFNO2tCQUFPLEdBQUksSUFBQyxHQUFHO2tCQUFPLEdBQUksSUFBQyxHQUFHOzs7Ozs7OzBCQUdyQyxHQUFJLElBQUMsV0FBVztrQkFBTyxHQUFJLElBQUMsR0FBRzswQkFBZSxHQUFJLElBQUMsV0FBVzswQkFBZSxHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBSGpHLEdBQUksSUFBQyxNQUFNO2tFQUFPLEdBQUksSUFBQyxHQUFHO2tFQUFPLEdBQUksSUFBQyxHQUFHOzs7MkVBR3JDLEdBQUksSUFBQyxXQUFXO21FQUFPLEdBQUksSUFBQyxHQUFHOzJFQUFlLEdBQUksSUFBQyxXQUFXOzJFQUFlLEdBQUksSUFBQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVgzSCxHQUFLO3FDQUtDLEdBQWM7Ozs7Z0NBQW5CLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lCQUxMLEdBQUs7Ozs7Ozs7Ozs7Ozs7O29DQUtDLEdBQWM7Ozs7K0JBQW5CLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBQUosTUFBSTs7Ozs7Ozs7OztrQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F0SUMsY0FBYyxnQkFBRSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
